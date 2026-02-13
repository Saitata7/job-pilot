import type { AIProviderInterface, ChatMessage, ChatOptions, ChatResponse } from '@shared/types/ai.types';
import type { OpenAIConfig } from '@shared/types/settings.types';

export class OpenAIProvider implements AIProviderInterface {
  name = 'OpenAI';
  isLocal = false;

  private apiKey: string;
  private model: string;
  private baseUrl = 'https://api.openai.com/v1';

  constructor(config: OpenAIConfig) {
    this.apiKey = config.apiKey;
    this.model = config.model || 'gpt-4o-mini';
  }

  async chat(messages: ChatMessage[], options?: ChatOptions): Promise<ChatResponse> {
    const response = await fetch(`${this.baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: this.model,
        messages: messages.map((m) => ({
          role: m.role,
          content: m.content,
        })),
        temperature: options?.temperature ?? 0.7,
        max_tokens: options?.maxTokens ?? 2048,
        stream: false,
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(`OpenAI request failed: ${error.error?.message || response.statusText}`);
    }

    const data = await response.json();
    const choice = data.choices?.[0];

    return {
      content: choice?.message?.content || '',
      tokensUsed: {
        prompt: data.usage?.prompt_tokens || 0,
        completion: data.usage?.completion_tokens || 0,
        total: data.usage?.total_tokens || 0,
      },
      model: this.model,
      finishReason: choice?.finish_reason === 'stop' ? 'stop' : 'length',
    };
  }

  async *chatStream(messages: ChatMessage[], options?: ChatOptions): AsyncIterable<string> {
    const response = await fetch(`${this.baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: this.model,
        messages: messages.map((m) => ({
          role: m.role,
          content: m.content,
        })),
        temperature: options?.temperature ?? 0.7,
        max_tokens: options?.maxTokens ?? 2048,
        stream: true,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI request failed: ${response.statusText}`);
    }

    const reader = response.body?.getReader();
    if (!reader) throw new Error('No response body');

    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6);
          if (data === '[DONE]') return;

          try {
            const parsed = JSON.parse(data);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) yield content;
          } catch {
            // Expected: SSE stream chunks may contain partial JSON
          }
        }
      }
    }
  }

  countTokens(text: string): number {
    // Rough estimation: ~4 characters per token for English
    return Math.ceil(text.length / 4);
  }

  getMaxContextLength(): number {
    if (this.model.includes('gpt-4o')) return 128000;
    if (this.model.includes('gpt-4-turbo')) return 128000;
    if (this.model.includes('gpt-4')) return 8192;
    return 16385; // gpt-3.5-turbo default
  }

  async isAvailable(): Promise<boolean> {
    if (!this.apiKey) return false;

    try {
      const response = await fetch(`${this.baseUrl}/models`, {
        headers: { 'Authorization': `Bearer ${this.apiKey}` },
      });
      return response.ok;
    } catch (error) {
      console.debug('[OpenAI] Availability check failed:', (error as Error).message);
      return false;
    }
  }
}
