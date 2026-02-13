/**
 * Safe JSON parsing utilities
 */

/**
 * Find balanced JSON in a string (handles nested structures properly)
 */
export function findBalancedJSON(content: string, type: 'object' | 'array' = 'object'): string | null {
  const startChar = type === 'object' ? '{' : '[';
  const endChar = type === 'object' ? '}' : ']';

  let startIndex = content.indexOf(startChar);
  if (startIndex === -1) {
    return null;
  }

  // Now find the matching closing bracket, accounting for strings
  let depth = 0;
  let inString = false;
  let escapeNext = false;

  for (let i = startIndex; i < content.length; i++) {
    const char = content[i];

    if (escapeNext) {
      escapeNext = false;
      continue;
    }

    if (char === '\\') {
      escapeNext = true;
      continue;
    }

    if (char === '"') {
      inString = !inString;
      continue;
    }

    if (inString) {
      continue;
    }

    if (char === startChar) {
      depth++;
    } else if (char === endChar) {
      depth--;
      if (depth === 0) {
        return content.substring(startIndex, i + 1);
      }
    }
  }

  return null;
}

/**
 * Safely parse JSON with error handling
 * Returns null if parsing fails instead of throwing
 */
export function safeParseJSON<T = unknown>(content: string): T | null {
  try {
    return JSON.parse(content) as T;
  } catch {
    return null;
  }
}

/**
 * Extract and parse JSON from AI response content
 * Uses balanced bracket matching for safety
 */
export function extractJSONFromResponse<T = unknown>(
  content: string,
  type: 'object' | 'array' = 'object'
): T | null {
  const jsonStr = findBalancedJSON(content, type);
  if (!jsonStr) {
    return null;
  }
  return safeParseJSON<T>(jsonStr);
}

/**
 * Extract JSON with fallback to greedy regex (less safe, for backwards compatibility)
 */
export function extractJSONGreedy<T = unknown>(
  content: string,
  type: 'object' | 'array' = 'object'
): T | null {
  // First try balanced extraction
  const balanced = extractJSONFromResponse<T>(content, type);
  if (balanced) {
    return balanced;
  }

  // Fallback to greedy regex
  try {
    const pattern = type === 'object' ? /\{[\s\S]*\}/ : /\[[\s\S]*\]/;
    const match = content.match(pattern);
    if (match) {
      return JSON.parse(match[0]) as T;
    }
  } catch {
    // Ignore parse errors
  }

  return null;
}
