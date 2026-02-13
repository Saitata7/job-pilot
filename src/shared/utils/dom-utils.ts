/**
 * Shared DOM utilities for content scripts
 */

/**
 * Escape HTML special characters to prevent XSS when inserting into innerHTML.
 * Uses string replacement (no DOM dependency) so it works in any context.
 */
export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
