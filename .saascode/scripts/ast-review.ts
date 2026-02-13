#!/usr/bin/env npx tsx
/**
 * SaasCode Kit — AST-Based Code Review (Chrome Extension)
 * Uses ts-morph to parse all TypeScript source files for:
 *   - Empty catch blocks
 *   - Console.log in production code
 *   - Hardcoded secrets / API keys
 *   - Hardcoded AI model names
 *   - Unsafe innerHTML / dangerouslySetInnerHTML
 *   - AI prompt injection risks (user input in template literals)
 *   - Switch without default case
 *   - Async functions without try/catch
 *   - eval() usage
 *
 * Usage: npx tsx .saascode/scripts/ast-review.ts [--changed-only]
 */

import { Project, SyntaxKind, SourceFile, Node } from 'ts-morph';
import * as path from 'path';
import { execSync } from 'child_process';

// ─── Config ───

let PROJECT_ROOT: string;
try {
  PROJECT_ROOT = execSync('git rev-parse --show-toplevel', { encoding: 'utf-8' }).trim();
} catch {
  PROJECT_ROOT = process.cwd();
}

const SRC_DIR = path.join(PROJECT_ROOT, 'src');
const TSCONFIG = path.join(PROJECT_ROOT, 'tsconfig.json');

const COLORS = {
  red: '\x1b[0;31m',
  green: '\x1b[0;32m',
  yellow: '\x1b[1;33m',
  cyan: '\x1b[0;36m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  nc: '\x1b[0m',
};

interface Finding {
  file: string;
  line: number;
  severity: 'CRITICAL' | 'WARNING';
  confidence: number;
  issue: string;
  fix: string;
}

function relativePath(filePath: string): string {
  return filePath.replace(PROJECT_ROOT + '/', '');
}

// ─── Checks ───

function checkEmptyCatchBlocks(sourceFile: SourceFile, findings: Finding[]): void {
  const filePath = sourceFile.getFilePath();

  sourceFile.getDescendantsOfKind(SyntaxKind.CatchClause).forEach(catchClause => {
    const block = catchClause.getBlock();
    const statements = block.getStatements();

    if (statements.length === 0) {
      findings.push({
        file: relativePath(filePath),
        line: catchClause.getStartLineNumber(),
        severity: 'WARNING',
        confidence: 85,
        issue: 'Empty catch block swallows errors silently',
        fix: 'Add error logging: console.error("[Module]:", error)',
      });
    }
  });
}

function checkConsoleLog(sourceFile: SourceFile, findings: Finding[]): void {
  const filePath = sourceFile.getFilePath();

  // Skip test files
  if (filePath.includes('.spec.') || filePath.includes('.test.')) return;

  let count = 0;
  sourceFile.getDescendantsOfKind(SyntaxKind.CallExpression).forEach(call => {
    const text = call.getExpression().getText();
    if (text === 'console.log' || text === 'console.debug') {
      count++;
    }
  });

  if (count > 10) {
    findings.push({
      file: relativePath(filePath),
      line: 1,
      severity: 'WARNING',
      confidence: 70,
      issue: `Excessive console.log/debug (${count} occurrences)`,
      fix: 'Use console.warn/error for important messages, remove debug logs',
    });
  }
}

function checkHardcodedSecrets(sourceFile: SourceFile, findings: Finding[]): void {
  const filePath = sourceFile.getFilePath();

  if (filePath.includes('.spec.') || filePath.includes('.test.') || filePath.includes('.env'))
    return;

  const secretPatterns = [
    { pattern: /(?:api[_-]?key|secret|password|token|auth)\s*[:=]\s*['"][a-zA-Z0-9]{16,}['"]/i, label: 'Potential hardcoded secret or API key' },
    { pattern: /sk[-_](?:live|test)_[a-zA-Z0-9]{20,}/, label: 'Stripe-style secret key' },
    { pattern: /Bearer\s+[a-zA-Z0-9._-]{20,}/, label: 'Hardcoded Bearer token' },
    { pattern: /gsk_[a-zA-Z0-9]{20,}/, label: 'Groq API key' },
    { pattern: /sk-[a-zA-Z0-9]{20,}/, label: 'OpenAI-style API key' },
  ];

  const text = sourceFile.getFullText();
  const lines = text.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (const { pattern, label } of secretPatterns) {
      if (pattern.test(line)) {
        if (
          line.includes('process.env') ||
          line.includes('chrome.storage') ||
          line.includes('// example') ||
          line.includes('// test') ||
          line.includes('interface ') ||
          line.includes('type ')
        )
          continue;

        findings.push({
          file: relativePath(filePath),
          line: i + 1,
          severity: 'CRITICAL',
          confidence: 90,
          issue: label,
          fix: 'Store in chrome.storage.local via settings, never hardcode',
        });
      }
    }
  }
}

function checkHardcodedModelNames(sourceFile: SourceFile, findings: Finding[]): void {
  const filePath = sourceFile.getFilePath();
  if (filePath.includes('.spec.') || filePath.includes('.test.') || filePath.includes('.types.'))
    return;

  const modelPatterns = [
    /['"]gpt-[34][a-z0-9.-]*['"]/,
    /['"]claude-[a-z0-9.-]*['"]/,
    /['"]llama[a-z0-9.-]*['"]/,
    /['"]mixtral[a-z0-9.-]*['"]/,
    /['"]gemma[a-z0-9.-]*['"]/,
  ];

  const text = sourceFile.getFullText();
  const lines = text.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Skip comments, type definitions, config defaults
    if (line.trim().startsWith('//') || line.trim().startsWith('*')) continue;
    if (line.includes('interface ') || line.includes('type ') || line.includes('as const')) continue;

    for (const pattern of modelPatterns) {
      if (pattern.test(line)) {
        findings.push({
          file: relativePath(filePath),
          line: i + 1,
          severity: 'WARNING',
          confidence: 75,
          issue: 'Hardcoded AI model name',
          fix: 'Use config/settings for model names so users can change them',
        });
        break;
      }
    }
  }
}

function checkDangerousHTML(sourceFile: SourceFile, findings: Finding[]): void {
  const filePath = sourceFile.getFilePath();
  const text = sourceFile.getFullText();
  const lines = text.split('\n');

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('dangerouslySetInnerHTML')) {
      findings.push({
        file: relativePath(filePath),
        line: i + 1,
        severity: 'CRITICAL',
        confidence: 95,
        issue: 'dangerouslySetInnerHTML — XSS risk',
        fix: 'Sanitize HTML or use React text rendering instead',
      });
    }
    if (lines[i].includes('.innerHTML') && !lines[i].includes('// safe')) {
      findings.push({
        file: relativePath(filePath),
        line: i + 1,
        severity: 'CRITICAL',
        confidence: 90,
        issue: 'Direct innerHTML assignment — XSS risk in content script',
        fix: 'Use DOM APIs (createElement, textContent) or sanitize first',
      });
    }
  }
}

function checkPromptInjection(sourceFile: SourceFile, findings: Finding[]): void {
  const filePath = sourceFile.getFilePath();
  const text = sourceFile.getFullText();
  const lines = text.split('\n');

  // Look for template literals that mix user input into AI prompts
  let inPromptContext = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Detect prompt construction context
    if (line.includes('prompt') || line.includes('system') || line.includes('content:')) {
      inPromptContext = true;
    }
    if (inPromptContext && line.includes('${') &&
        (line.includes('jobDescription') || line.includes('userInput') || line.includes('jdText') || line.includes('resumeText'))) {
      // Only flag if it looks like raw interpolation without sanitization
      if (!line.includes('sanitize') && !line.includes('escape') && !line.includes('clean')) {
        findings.push({
          file: relativePath(filePath),
          line: i + 1,
          severity: 'WARNING',
          confidence: 65,
          issue: 'User input interpolated into AI prompt — prompt injection risk',
          fix: 'Consider sanitizing user input or using structured message format',
        });
      }
    }
    if (line.includes(';') || line.includes('}') || line.trim() === '') {
      inPromptContext = false;
    }
  }
}

function checkSwitchDefault(sourceFile: SourceFile, findings: Finding[]): void {
  const filePath = sourceFile.getFilePath();

  sourceFile.getDescendantsOfKind(SyntaxKind.SwitchStatement).forEach(switchStmt => {
    const clauses = switchStmt.getClauses();
    const hasDefault = clauses.some(c => c.getKind() === SyntaxKind.DefaultClause);

    if (!hasDefault) {
      findings.push({
        file: relativePath(filePath),
        line: switchStmt.getStartLineNumber(),
        severity: 'WARNING',
        confidence: 70,
        issue: 'Switch statement without default case',
        fix: 'Add default case to handle unexpected values',
      });
    }
  });
}

function checkEval(sourceFile: SourceFile, findings: Finding[]): void {
  const filePath = sourceFile.getFilePath();

  sourceFile.getDescendantsOfKind(SyntaxKind.CallExpression).forEach(call => {
    const text = call.getExpression().getText();
    if (text === 'eval' || text === 'Function') {
      findings.push({
        file: relativePath(filePath),
        line: call.getStartLineNumber(),
        severity: 'CRITICAL',
        confidence: 95,
        issue: `${text}() usage — code injection risk`,
        fix: 'Remove eval/Function and use safe alternatives',
      });
    }
  });
}

function checkAsyncWithoutTryCatch(sourceFile: SourceFile, findings: Finding[]): void {
  const filePath = sourceFile.getFilePath();

  // Only check files that make AI/chrome calls
  const text = sourceFile.getFullText();
  if (!text.includes('chrome.') && !text.includes('aiService') && !text.includes('fetch(')) return;

  const classes = sourceFile.getClasses();
  for (const cls of classes) {
    for (const method of cls.getMethods()) {
      if (!method.isAsync()) continue;
      const body = method.getBody()?.getText() || '';
      if (
        (body.includes('chrome.storage') || body.includes('chrome.runtime') || body.includes('aiService') || body.includes('fetch(')) &&
        !body.includes('try') &&
        !body.includes('catch')
      ) {
        findings.push({
          file: relativePath(filePath),
          line: method.getStartLineNumber(),
          severity: 'WARNING',
          confidence: 75,
          issue: `Async method ${method.getName()}() has chrome/AI calls without try-catch`,
          fix: 'Wrap in try-catch with fallback for extension context invalidation',
        });
      }
    }
  }
}

function checkMessageHandlerCoverage(sourceFile: SourceFile, findings: Finding[]): void {
  const filePath = sourceFile.getFilePath();
  if (!filePath.includes('message-handler')) return;

  // Check that all message types in the switch have proper error handling
  const text = sourceFile.getFullText();

  // Count message types handled
  const caseMatches = text.match(/case\s+['"][A-Z_]+['"]/g);
  if (caseMatches && caseMatches.length > 0) {
    // Check for switch without default
    if (!text.includes('default:')) {
      findings.push({
        file: relativePath(filePath),
        line: 1,
        severity: 'WARNING',
        confidence: 80,
        issue: `Message handler has ${caseMatches.length} cases but no default — unknown messages silently ignored`,
        fix: 'Add default case to log or respond to unknown message types',
      });
    }
  }
}

// ─── Main ───

async function main() {
  const changedOnly = process.argv.includes('--changed-only');

  console.log(`${COLORS.bold}AST Code Review — Chrome Extension${COLORS.nc}`);
  console.log('================================');
  console.log('');

  console.log(`${COLORS.cyan}[1/4] Loading TypeScript project...${COLORS.nc}`);

  const project = new Project({
    tsConfigFilePath: TSCONFIG,
    skipAddingFilesFromTsConfig: true,
    skipFileDependencyResolution: true,
  });

  // Determine files to scan
  if (changedOnly) {
    try {
      const diffFiles = execSync('git diff --name-only HEAD~1', { encoding: 'utf-8' })
        .trim()
        .split('\n')
        .filter(f => f.startsWith('src/') && f.endsWith('.ts') || f.endsWith('.tsx'))
        .map(f => path.join(PROJECT_ROOT, f));

      for (const file of diffFiles) {
        try {
          project.addSourceFileAtPath(file);
        } catch {
          // File might not exist (deleted)
        }
      }
      console.log(`  Scanning ${COLORS.green}${diffFiles.length}${COLORS.nc} changed files`);
    } catch {
      console.log(`  ${COLORS.yellow}Could not get git diff, scanning all files${COLORS.nc}`);
      project.addSourceFilesAtPaths([`${SRC_DIR}/**/*.ts`, `${SRC_DIR}/**/*.tsx`]);
    }
  } else {
    project.addSourceFilesAtPaths([`${SRC_DIR}/**/*.ts`, `${SRC_DIR}/**/*.tsx`]);
  }

  const sourceFiles = project.getSourceFiles();
  const tsFiles = sourceFiles.filter(f => f.getFilePath().endsWith('.ts'));
  const tsxFiles = sourceFiles.filter(f => f.getFilePath().endsWith('.tsx'));

  console.log(
    `  Found ${COLORS.green}${tsFiles.length}${COLORS.nc} .ts files, ${COLORS.green}${tsxFiles.length}${COLORS.nc} .tsx files`,
  );
  console.log('');

  const findings: Finding[] = [];

  // ─── Run All Checks ───
  console.log(`${COLORS.cyan}[2/4] Scanning for security issues...${COLORS.nc}`);

  for (const sourceFile of sourceFiles) {
    checkHardcodedSecrets(sourceFile, findings);
    checkDangerousHTML(sourceFile, findings);
    checkEval(sourceFile, findings);
    checkPromptInjection(sourceFile, findings);
  }

  console.log(`${COLORS.cyan}[3/4] Scanning for code quality issues...${COLORS.nc}`);

  for (const sourceFile of sourceFiles) {
    checkEmptyCatchBlocks(sourceFile, findings);
    checkConsoleLog(sourceFile, findings);
    checkHardcodedModelNames(sourceFile, findings);
    checkSwitchDefault(sourceFile, findings);
    checkAsyncWithoutTryCatch(sourceFile, findings);
    checkMessageHandlerCoverage(sourceFile, findings);
  }

  // ─── Report ───
  console.log(`${COLORS.cyan}[4/4] Generating report...${COLORS.nc}`);
  console.log('');

  // Sort by severity then confidence
  findings.sort((a, b) => {
    if (a.severity !== b.severity) return a.severity === 'CRITICAL' ? -1 : 1;
    return b.confidence - a.confidence;
  });

  const criticals = findings.filter(f => f.severity === 'CRITICAL');
  const warnings = findings.filter(f => f.severity === 'WARNING');

  if (findings.length === 0) {
    console.log(`${COLORS.green}No issues found. All checks passed.${COLORS.nc}`);
  } else {
    for (const f of findings) {
      const sevColor = f.severity === 'CRITICAL' ? COLORS.red : COLORS.yellow;
      console.log(
        `${sevColor}[${f.severity}]${COLORS.nc} ${f.file}:${f.line}`,
      );
      console.log(`  ${f.issue}`);
      console.log(`  ${COLORS.dim}Fix: ${f.fix}${COLORS.nc}`);
      console.log('');
    }
  }

  console.log('================================');
  console.log(
    `  Files scanned:  ${COLORS.bold}${sourceFiles.length}${COLORS.nc}`,
  );
  console.log(
    `  Findings:       ${COLORS.red}${criticals.length} critical${COLORS.nc}, ${COLORS.yellow}${warnings.length} warnings${COLORS.nc}`,
  );

  // Clean files
  const filesWithIssues = new Set(findings.map(f => f.file));
  const allFiles = sourceFiles.map(f => relativePath(f.getFilePath()));
  const cleanFiles = allFiles.filter(f => !filesWithIssues.has(f));

  if (cleanFiles.length > 0) {
    console.log('');
    console.log(`${COLORS.bold}Clean files (${cleanFiles.length}):${COLORS.nc}`);
    cleanFiles.forEach(f => {
      console.log(`  ${COLORS.green}✓${COLORS.nc} ${f.replace('src/', '')}`);
    });
  }

  console.log('');

  if (criticals.length > 0) {
    console.log(`${COLORS.red}VERDICT: ${criticals.length} critical issue(s) found${COLORS.nc}`);
    process.exit(1);
  } else if (warnings.length > 0) {
    console.log(`${COLORS.yellow}VERDICT: ${warnings.length} warning(s) to review${COLORS.nc}`);
    process.exit(0);
  } else {
    console.log(`${COLORS.green}VERDICT: All checks passed${COLORS.nc}`);
    process.exit(0);
  }
}

main().catch(err => {
  console.error(`${COLORS.red}AST Review failed:${COLORS.nc}`, err.message);
  process.exit(2);
});
