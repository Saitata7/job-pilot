export type AIProvider = 'ollama' | 'openai' | 'anthropic' | 'groq';

export interface UserSettings {
  id: string;

  ai: AISettings;

  detection: DetectionSettings;
  autofill: AutofillSettings;
  notifications: NotificationSettings;
  privacy: PrivacySettings;
  appearance: AppearanceSettings;
}

export interface AISettings {
  provider: AIProvider;

  ollama?: OllamaConfig;
  openai?: OpenAIConfig;
  anthropic?: AnthropicConfig;
  groq?: GroqConfig;

  generation: GenerationSettings;
}

export interface OllamaConfig {
  baseUrl: string;
  model: string;
  contextLength: number;
}

export interface OpenAIConfig {
  apiKey: string;
  model: string;
  organization?: string;
}

export interface AnthropicConfig {
  apiKey: string;
  model: string;
}

export interface GroqConfig {
  apiKey: string;
  model: string;
}

export interface GenerationSettings {
  temperature: number;
  maxTokens: number;
  streamResponses: boolean;
}

export interface DetectionSettings {
  autoDetect: boolean;
  showOverlay: boolean;
  overlayPosition: 'top-right' | 'bottom-right' | 'bottom-left';
  autoAnalyze: boolean;
}

export interface AutofillSettings {
  enabled: boolean;
  requireApproval: boolean;
  autoFillBasicInfo: boolean;
  autoFillExperience: boolean;
  autoFillEducation: boolean;
  autoFillCustomQuestions: boolean;
}

export interface NotificationSettings {
  showJobScore: boolean;
  scoreThreshold: number;
  soundEnabled: boolean;
}

export interface PrivacySettings {
  trackApplications: boolean;
  enableLearning: boolean;
  anonymizeData: boolean;
}

export interface AppearanceSettings {
  theme: 'light' | 'dark' | 'system';
  compactMode: boolean;
}

export function getDefaultSettings(): UserSettings {
  return {
    id: 'user_settings',
    ai: {
      provider: 'ollama',
      ollama: {
        baseUrl: 'http://localhost:11434',
        model: 'llama3.1',
        contextLength: 8192,
      },
      generation: {
        temperature: 0.7,
        maxTokens: 2048,
        streamResponses: true,
      },
    },
    detection: {
      autoDetect: true,
      showOverlay: true,
      overlayPosition: 'bottom-right',
      autoAnalyze: false,
    },
    autofill: {
      enabled: true,
      requireApproval: true,
      autoFillBasicInfo: true,
      autoFillExperience: true,
      autoFillEducation: true,
      autoFillCustomQuestions: false,
    },
    notifications: {
      showJobScore: true,
      scoreThreshold: 70,
      soundEnabled: false,
    },
    privacy: {
      trackApplications: true,
      enableLearning: true,
      anonymizeData: false,
    },
    appearance: {
      theme: 'system',
      compactMode: false,
    },
  };
}
