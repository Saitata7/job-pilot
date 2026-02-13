import type { AIProviderInterface, ChatMessage, ChatOptions, ChatResponse } from '@shared/types/ai.types';
import type { OllamaConfig } from '@shared/types/settings.types';

export class OllamaProvider implements AIProviderInterface {
  name = 'Ollama';
  isLocal = true;

  private baseUrl: string;
  private model: string;
  private contextLength: number;

  constructor(config: OllamaConfig) {
    this.baseUrl = config.baseUrl || 'http://localhost:11434';
    this.model = config.model || 'llama3.1';
    this.contextLength = config.contextLength || 8192;
  }

  async chat(messages: ChatMessage[], options?: ChatOptions): Promise<ChatResponse> {
    const response = await fetch(`${this.baseUrl}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: this.model,
        messages: messages.map((m) => ({
          role: m.role,
          content: m.content,
        })),
        stream: false,
        options: {
          temperature: options?.temperature ?? 0.7,
          num_predict: options?.maxTokens ?? 2048,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Ollama request failed: ${response.statusText}`);
    }

    const data = await response.json();

    return {
      content: data.message?.content || '',
      tokensUsed: {
        prompt: data.prompt_eval_count || 0,
        completion: data.eval_count || 0,
        total: (data.prompt_eval_count || 0) + (data.eval_count || 0),
      },
      model: this.model,
      finishReason: 'stop',
    };
  }

  async *chatStream(messages: ChatMessage[], options?: ChatOptions): AsyncIterable<string> {
    const response = await fetch(`${this.baseUrl}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: this.model,
        messages: messages.map((m) => ({
          role: m.role,
          content: m.content,
        })),
        stream: true,
        options: {
          temperature: options?.temperature ?? 0.7,
          num_predict: options?.maxTokens ?? 2048,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Ollama request failed: ${response.statusText}`);
    }

    const reader = response.body?.getReader();
    if (!reader) {
      throw new Error('No response body');
    }

    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        if (line.trim()) {
          try {
            const data = JSON.parse(line);
            if (data.message?.content) {
              yield data.message.content;
            }
          } catch {
            // Expected: streaming lines may contain partial JSON
          }
        }
      }
    }
  }

  countTokens(text: string): number {
    // Rough estimation: ~4 characters per token
    return Math.ceil(text.length / 4);
  }

  getMaxContextLength(): number {
    return this.contextLength;
  }

  async isAvailable(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/api/tags`, {
        method: 'GET',
      });
      return response.ok;
    } catch (error) {
      console.debug('[Ollama] Availability check failed:', (error as Error).message);
      return false;
    }
  }

  async listModels(): Promise<string[]> {
    try {
      const response = await fetch(`${this.baseUrl}/api/tags`);
      if (!response.ok) return [];

      const data = await response.json();
      return (data.models || []).map((m: { name: string }) => m.name);
    } catch (error) {
      console.debug('[Ollama] Failed to list models:', (error as Error).message);
      return [];
    }
  }
}
