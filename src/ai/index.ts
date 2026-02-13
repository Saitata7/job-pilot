import type { AIProviderInterface, ChatMessage, ChatOptions, ChatResponse, JobScoringResult } from '@shared/types/ai.types';
import type { Job } from '@shared/types/job.types';
import type { ResumeProfile } from '@shared/types/profile.types';
import type { AISettings } from '@shared/types/settings.types';
import { OllamaProvider } from './providers/ollama';
import { OpenAIProvider } from './providers/openai';
import { GroqProvider } from './providers/groq';
import { JOB_SCORING_PROMPT, COVER_LETTER_PROMPT } from './prompts/templates';

export class AIService {
  private provider: AIProviderInterface;
  private settings: AISettings;

  constructor(settings: AISettings) {
    this.settings = settings;
    this.provider = this.createProvider();
  }

  private createProvider(): AIProviderInterface {
    switch (this.settings.provider) {
      case 'ollama':
        return new OllamaProvider(this.settings.ollama!);
      case 'openai':
        return new OpenAIProvider(this.settings.openai!);
      case 'anthropic':
        // Use OpenAI-compatible endpoint for now
        throw new Error('Anthropic provider coming soon - use OpenAI or Groq');
      case 'groq':
        return new GroqProvider(this.settings.groq!);
      default:
        throw new Error(`Unknown provider: ${this.settings.provider}`);
    }
  }

  async isAvailable(): Promise<boolean> {
    return this.provider.isAvailable();
  }

  async scoreJobFit(job: Job, profile: ResumeProfile): Promise<JobScoringResult> {
    const prompt = JOB_SCORING_PROMPT
      .replace('{jobDescription}', job.description)
      .replace('{candidateName}', profile.personal.fullName)
      .replace('{candidateSummary}', profile.summary)
      .replace('{skills}', [
        ...profile.skills.technical,
        ...profile.skills.tools,
      ].join(', '))
      .replace('{experience}', profile.experience.map((exp) =>
        `${exp.title} at ${exp.company}: ${exp.description}`
      ).join('\n'));

    const messages: ChatMessage[] = [
      { role: 'user', content: prompt },
    ];

    const response = await this.provider.chat(messages, {
      temperature: 0.3,
      maxTokens: 1500,
    });

    try {
      // Extract JSON from response
      const jsonMatch = response.content.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('No JSON found in response');
      }

      const result = JSON.parse(jsonMatch[0]) as JobScoringResult;
      return result;
    } catch (error) {
      console.error('Failed to parse scoring result:', error);
      // Return default scores on parse failure
      return {
        overallScore: 50,
        skillMatch: 50,
        experienceMatch: 50,
        educationMatch: 50,
        cultureFit: 50,
        matchedSkills: [],
        missingSkills: [],
        strengths: ['Unable to analyze'],
        gaps: ['Unable to analyze'],
        suggestions: ['Try again or check AI configuration'],
        reasoning: 'Failed to parse AI response',
      };
    }
  }

  async generateCoverLetter(job: Job, profile: ResumeProfile): Promise<string> {
    const profileSummary = `
Name: ${profile.personal.fullName}
Current/Recent Role: ${profile.experience[0]?.title || 'N/A'} at ${profile.experience[0]?.company || 'N/A'}
Summary: ${profile.summary}
Key Skills: ${profile.skills.technical.slice(0, 10).join(', ')}
Notable Achievements:
${profile.experience[0]?.achievements.slice(0, 3).map((a) => `- ${a}`).join('\n') || 'N/A'}
    `.trim();

    const prompt = COVER_LETTER_PROMPT
      .replace('{company}', job.company)
      .replace('{title}', job.title)
      .replace('{jobDescription}', job.description.slice(0, 3000))
      .replace('{candidateProfile}', profileSummary);

    const messages: ChatMessage[] = [
      { role: 'user', content: prompt },
    ];

    const response = await this.provider.chat(messages, {
      temperature: this.settings.generation.temperature,
      maxTokens: this.settings.generation.maxTokens,
    });

    return response.content.trim();
  }

  async *generateCoverLetterStream(job: Job, profile: ResumeProfile): AsyncIterable<string> {
    const profileSummary = `
Name: ${profile.personal.fullName}
Current/Recent Role: ${profile.experience[0]?.title || 'N/A'} at ${profile.experience[0]?.company || 'N/A'}
Summary: ${profile.summary}
Key Skills: ${profile.skills.technical.slice(0, 10).join(', ')}
    `.trim();

    const prompt = COVER_LETTER_PROMPT
      .replace('{company}', job.company)
      .replace('{title}', job.title)
      .replace('{jobDescription}', job.description.slice(0, 3000))
      .replace('{candidateProfile}', profileSummary);

    const messages: ChatMessage[] = [
      { role: 'user', content: prompt },
    ];

    for await (const chunk of this.provider.chatStream(messages, {
      temperature: this.settings.generation.temperature,
      maxTokens: this.settings.generation.maxTokens,
    })) {
      yield chunk;
    }
  }

  async chat(messages: ChatMessage[], options?: ChatOptions): Promise<ChatResponse> {
    return this.provider.chat(messages, options);
  }
}

export { OllamaProvider } from './providers/ollama';
export { OpenAIProvider } from './providers/openai';
export { GroqProvider } from './providers/groq';
