# SaasCode Kit — Audit Report for Jobs Pilot

**Date**: 2026-02-12
**Project**: Jobs Pilot (Chrome Extension, Manifest V3)
**Kit Version**: github:Saitata7/saascode-kit (latest)
**Files Installed**: 37

---

## Executive Summary

SaasCode Kit was designed for **NestJS + Prisma + PostgreSQL multi-tenant SaaS applications**. Jobs Pilot is a **local-first Chrome Extension** with React + Vite + IndexedDB + Chrome Storage. This architectural mismatch means **~80% of the generated tooling is broken, irrelevant, or actively misleading** for this project.

| Category | Total Files | Working | Broken/Irrelevant |
|----------|-------------|---------|-------------------|
| CLAUDE.md | 1 | 0 | 1 (template not rendered) |
| Skills (.claude/skills/) | 14 | 1 | 13 |
| Scripts (.saascode/scripts/) | 12 | 2 | 10 |
| Semgrep Rules (.saascode/rules/) | 5 | 0 | 5 (partial overlap) |
| Checklists (.saascode/checklists/) | 3 | 0 | 3 |
| CI Pipeline (.github/workflows/) | 1 | 0 | 1 |
| Hooks (.claude/settings.json) | 1 | 0 | 1 (runs broken script) |
| .gitignore entries | 8 | 7 | 1 |

---

## Bug 1: Template Engine Did Not Render — CLAUDE.md is Raw Handlebars

The generated `CLAUDE.md` contains **15+ unresolved Handlebars expressions** that were never rendered. The template engine failed silently, outputting raw template syntax as content.

**Examples:**

| Line | Raw Output |
|------|-----------|
| 4 | `> Last updated: {{generated_date}}` |
| 15 | `- **Auth**: none{{#if auth.multi_tenant}} (multi-tenant){{/if}}` |
| 16 | `- **Billing**: {{#if billing.enabled}}none (none){{else}}None{{/if}}` |
| 17 | `{{#if ai.enabled}}- **AI**: {{ai.providers}} ({{ai.features}}){{/if}}` |
| 27 | `{{schema_relative_path}}` |
| 35 | `{{#if paths.shared}}src/shared/  # Shared types{{/if}}` |
| 43-45 | `{{#each auth.roles}}` block never iterated |
| 47-68 | `{{#if_eq auth.guard_pattern "decorator"}}` block never evaluated |
| 81-102 | `{{#if tenancy.enabled}}` block never evaluated |
| 132-140 | `{{#if billing.enabled}}` block never evaluated |
| 142-154 | `{{#if ai.enabled}}` with unresolved `{{ai.providers}}` |
| 158-163 | `{{#each patterns.critical}}` never iterated |
| 167-169 | `{{#each patterns.anti_patterns}}` never iterated |

**Root Cause**: The init command appears to copy the template file without running it through a Handlebars renderer. The `saascode-kit.yaml` values are parsed and logged ("Parsed from manifest: Project: Jobs Pilot...") but never injected into the template.

**Severity**: HIGH — This is the primary output of the kit. The CLAUDE.md is the file AI tools read to understand the project. It's currently unusable.

---

## Bug 2: Hardcoded SaaS Paths — Kit Assumes NestJS Monorepo Structure

Throughout the generated files, paths are hardcoded to a NestJS monorepo layout that doesn't exist in this project:

| Hardcoded Path | Used In | Actual Path |
|---------------|---------|-------------|
| `apps/api/src/modules/` | ast-review.ts, endpoint-parity.sh, full-audit.sh, saascode.yml | Does not exist |
| `apps/portal/src/` | endpoint-parity.sh, full-audit.sh, snapshot.sh | Does not exist |
| `apps/api/prisma/schema.prisma` | snapshot.sh, deploy.md | Does not exist |
| `src/background/src/modules/[feature]/` | CLAUDE.md, saascode.yml | Does not exist — actual: `src/background/message-handler.ts` |
| `src/options/src/app/` | CLAUDE.md | Does not exist — actual: `src/options/pages/` |
| `[backend]/src/modules/*/*.controller.ts` | saascode.yml, review-pr.md | No controllers exist |

**Root Cause**: The `paths` section in `saascode-kit.yaml` was read (frontend: `src/options`, backend: `src/background`) but the **templates still hardcode** `src/modules/`, `src/app/`, `dto/`, `*.controller.ts`, `*.service.ts` NestJS patterns inside those paths, ignoring the actual project structure.

**Severity**: HIGH — Scripts and CI will fail or produce meaningless output.

---

## Bug 3: manifest.yaml vs saascode-kit.yaml Naming Mismatch

The `init` command creates `saascode-kit.yaml`, but **every script reads `manifest.yaml`**:

| Script | Reads From |
|--------|-----------|
| `lib.sh` | `manifest.yaml` (line ~20) |
| `check-file.sh` | `manifest.yaml` via lib.sh |
| `ai-review.sh` | `manifest.yaml` via lib.sh |
| `full-audit.sh` | `manifest.yaml` via lib.sh |
| `pre-deploy.sh` | `manifest.yaml` via lib.sh |

Since no `manifest.yaml` exists, all scripts fall back to **hardcoded defaults** that enable NestJS tenancy/backend checks:

```bash
# check-file.sh defaults when manifest.yaml not found:
HAS_TENANCY=true    # Enables tenant isolation checks
HAS_BACKEND=true    # Enables NestJS controller checks
HAS_FRONTEND=true   # Enables apiClient checks
```

This means every time Claude Code edits a file, the `check-file.sh` hook runs **NestJS tenant isolation checks** against Chrome extension TypeScript files.

**Severity**: HIGH — The hooks are actively running wrong checks on every file edit.

---

## Bug 4: .gitignore Contains Broken Absolute Path

The init added this entry to `.gitignore`:

```
../../../../.npm/_npx/3f5972881ed2733a/node_modules/saascode-kit/
```

This is a **machine-specific absolute relative path** to the npx cache. It:
- Contains a hash (`3f5972881ed2733a`) unique to this machine's npx cache
- Won't match on any other developer's machine
- Is not a valid gitignore pattern for portability

**Severity**: LOW — Harmless but wrong. Should be removed.

---

## Bug 5: CI Pipeline Will Fail on Every Run

`.github/workflows/saascode.yml` issues:

| Line | Command | Problem |
|------|---------|---------|
| 38 | `npm --prefix src/background run build` | `src/background/` has no `package.json` — will fail |
| 40 | `npm --prefix src/options run build` | `src/options/` has no `package.json` — will fail |
| 57 | `npm --prefix src/background run test` | Same — no `package.json` |
| 91-95 | Endpoint parity grep | Looks for `apiClient` and `@Get/@Post` — neither exist |
| 100-117 | Auth guard check | Looks for `@Roles` in `src/background/src/modules/` — path doesn't exist |
| 119-129 | Tenant isolation check | Looks for unscoped `findMany()` — no Prisma |

The workflow would fail at step 1 (build) and never reach the later checks.

**Severity**: HIGH — CI pipeline is completely non-functional.

---

## Bug 6: PostToolUse Hook Runs Broken Validator

`.claude/settings.json` configures a hook that runs on every `Edit` or `Write`:

```json
{
  "command": "check-file.sh {}",
  "timeout": 10
}
```

Since `manifest.yaml` doesn't exist, `check-file.sh` defaults to `HAS_TENANCY=true`, `HAS_BACKEND=true`, running NestJS-specific checks (guard chains, tenant scoping, DTO validation) against Chrome extension files on every edit.

**Severity**: MEDIUM — Will produce false positives or noise on every file edit.

---

## Scripts Analysis (12 files)

| Script | Status | Issue |
|--------|--------|-------|
| `ast-review.sh` + `.ts` | BROKEN | Scans for NestJS `*.controller.ts`, `*.service.ts`, `@UseGuards`, Prisma queries — none exist |
| `endpoint-parity.sh` | BROKEN | Compares REST endpoints vs apiClient calls — no REST API in project |
| `full-audit.sh` | BROKEN | Checks `apps/api`, `@Roles`, `findMany()` without tenantId — all NestJS/Prisma |
| `pre-deploy.sh` | BROKEN | Runs `npm --prefix apps/api`, checks `/health` endpoint, `prisma migrate` |
| `snapshot.sh` | BROKEN | Maps Prisma models, NestJS controllers, Next.js pages — none exist |
| `check-file.sh` | PARTIAL | Universal checks (secrets, eval) work; backend/frontend/tenancy checks wrong |
| `ai-review.sh` | PARTIAL | AI infrastructure works; review prompt injects NestJS-specific rules |
| `intent-log.sh` | PARTIAL | Logging works but calls broken check-file.sh |
| `intent-cli.sh` | OK | Generic intent viewer — project-agnostic |
| `saascode.sh` | PARTIAL | CLI router — most commands route to broken scripts |
| `lib.sh` | PARTIAL | Reads non-existent manifest.yaml, returns empty defaults |

---

## Semgrep Rules Analysis (5 files)

| Rule File | Rules | Relevant | Issue |
|-----------|-------|----------|-------|
| `auth-guards.yaml` | 4 | 0/4 | All target NestJS `@UseGuards`, `@Controller`, `@Roles` decorators |
| `tenant-isolation.yaml` | 5 | 0/5 | All target Prisma `findMany/findUnique/deleteMany` with `tenantId` |
| `input-validation.yaml` | 4 | 0/4 | All target NestJS DTOs with `class-validator` decorators |
| `security.yaml` | ~20 | 8-10/20 | `dangerouslySetInnerHTML`, hardcoded keys, prompt injection are relevant; `$queryRaw`, `@Throttle`, webhook checks are not |
| `ui-consistency.yaml` | ~6 | 4/6 | React rules OK; tenant color system rule irrelevant |

---

## Skills Analysis (14 files)

| # | Skill | Relevant? | Primary Issue |
|---|-------|-----------|---------------|
| 1 | `api.md` | NO | Documents REST API endpoints — project uses Chrome message passing |
| 2 | `audit.md` | PARTIAL | Security concept valid; all checks target NestJS/Prisma/tenancy |
| 3 | `build-feature.md` | PARTIAL | Process good; steps assume Schema→DTO→Service→Controller→Module |
| 4 | `changelog.md` | YES | Git-based, project-agnostic |
| 5 | `debug.md` | PARTIAL | Systematic approach good; traces assume HTTP 404/500 + Prisma |
| 6 | `deploy.md` | NO | Server deployment (Vercel/Railway/Docker/pg_dump) — extension needs Chrome Web Store |
| 7 | `docs.md` | PARTIAL | Structure good; code scanning targets `*.controller.ts`, `schema.prisma` |
| 8 | `learn.md` | PARTIAL | Concept good; examples reference tenant scoping and guard patterns |
| 9 | `migrate.md` | NO | Database migrations (Prisma/PostgreSQL) — no database server |
| 10 | `onboard.md` | PARTIAL | Structure useful; checks assume PostgreSQL + Prisma + monorepo |
| 11 | `preflight.md` | PARTIAL | Build gates good; most gates target NestJS backend + webhooks |
| 12 | `recipe.md` | NO | All recipes assume NestJS CRUD with tenancy and roles |
| 13 | `review-pr.md` | PARTIAL | Review framework good; checks target NestJS guards/tenancy |
| 14 | `test.md` | PARTIAL | General approach fine; test patterns assume NestJS + Prisma mocking |

**Summary**: 4 completely irrelevant, 1 fine, 9 partially useful but contain deeply wrong assumptions.

---

## Checklists Analysis (3 files)

| Checklist | Relevant Items | Irrelevant Items |
|-----------|---------------|-----------------|
| `feature-complete.md` | Loading/error states, tests, TypeScript | `tenantId`, guard chain, DTOs, NestJS modules, apiClient parity |
| `deploy-ready.md` | `npm run typecheck` | Backend/frontend separate builds, Prisma migrations, `/health` endpoint, role-based login tests |
| `security-review.md` | Secrets, dependency scanning | `TenantGuard`, `@Roles`, `findMany()` scoping, webhook signatures, failed auth logging |

---

## Recommendations for SaasCode Kit

### Template Engine (Bug 1)
The Handlebars template engine is not executing. The `CLAUDE.md` template is being **copied** instead of **rendered**. This appears to be the most critical bug — without a working template engine, the entire value proposition of "define once, generate everything" breaks down.

### Project Type Awareness (Bugs 2, 5, 6)
The kit needs a `project.type` discriminator that changes the template set entirely. A Chrome Extension should NOT receive:
- NestJS controller/service/module patterns
- Prisma/ORM patterns
- REST API endpoint parity checks
- Multi-tenancy guard chains
- Server deployment pipelines

Suggested project types: `saas-backend`, `chrome-extension`, `cli-tool`, `library`, `static-site`

### Config File Naming (Bug 3)
The `init` command creates `saascode-kit.yaml` but scripts read `manifest.yaml`. These need to be consistent — either the init should create `manifest.yaml` or the scripts should read `saascode-kit.yaml`.

### Portable .gitignore (Bug 4)
The npx cache path `../../../../.npm/_npx/3f5972881ed2733a/node_modules/saascode-kit/` is machine-specific. Should either be omitted or use a portable pattern.

### Conditional Script Generation
Scripts like `ast-review.sh`, `endpoint-parity.sh`, and `tenant-isolation.yaml` should only be generated when the manifest enables those features (e.g., `auth.provider != "none"`, `tenancy.enabled == true`, `stack.backend.orm != "none"`).

---

## What IS Useful from This Install

Despite the issues, some pieces have value:

1. **intent-cli.sh** — generic AI edit intent viewer
2. **changelog.md skill** — git-based, project-agnostic
3. **Security rules (partial)** — `dangerouslySetInnerHTML`, hardcoded secrets, prompt injection detection
4. **React UI rules (partial)** — `useEffect` without loading state, async without error handling
5. **Pre-commit concept** — secret scanning, .env blocking, merge marker detection (if git hooks were installed)
6. **The manifest-driven approach itself** — the idea is sound; the execution needs project-type awareness

---

## Impact on Existing Project

The original `CLAUDE.md` was **overwritten** by the kit's unrendered template. The original contained:
- Detailed architecture documentation specific to this Chrome extension
- Correct file paths and directory structure
- AI prompt temperature guide
- ATS scoring documentation
- Platform detector list
- Error handling standards
- Resume generation specs

This content is now lost from `CLAUDE.md` (though it exists in git history or the user's knowledge).

**Immediate action needed**: Restore the original `CLAUDE.md` or merge the two.

---

## Runtime Test Results (2026-02-12)

Ran all available `saascode` CLI commands against the project. Results below.

### `saascode review` — AST Code Review

**Status**: CRASHED

| Attempt | Error | Root Cause |
|---------|-------|-----------|
| 1 | `ts-morph not installed` | Missing dependency — not in kit's install step |
| 2 | `ERR_MODULE_NOT_FOUND: saascode-kit/scripts/ast-review.ts` | **Bug 7**: `ast-review.sh` line 12 hardcodes path `$PROJECT_ROOT/saascode-kit/scripts/ast-review.ts` (git submodule layout), but npx install puts the file at `.saascode/scripts/ast-review.ts` |
| 3 | `fatal: not a git repository` | **Bug 8**: `ast-review.ts` line 22 uses `execSync('git rev-parse --show-toplevel')` with no fallback — crashes if project has no `.git` directory |

Even if these crashes were fixed, the script would find **0 controllers, 0 services** because it scans for NestJS `*.controller.ts` and `*.service.ts` files (line 23-24 hardcodes `apps/api/src` and `apps/api/tsconfig.json`).

### `saascode audit` — Full Security Audit

**Status**: RAN (with correct paths: `src/background src/options`)

**Result**: 0 Critical, 1 Warning, 9 Passed

| Check | Result | Accurate? |
|-------|--------|-----------|
| @Roles without RolesGuard | PASS | **FALSE PASS** — no `@Roles` decorators exist to check |
| Unscoped findMany() | PASS | **FALSE PASS** — no Prisma `findMany()` exists |
| dangerouslySetInnerHTML | PASS | Legitimate pass |
| Raw SQL with interpolation | PASS | **FALSE PASS** — no `$queryRaw` exists |
| Hardcoded secrets | PASS | Possibly legitimate — needs manual verification |
| Sensitive data in console.log | PASS | **FALSE PASS** — only checks `*.service.ts` which don't exist |
| .env files in git | PASS | **FALSE PASS** — no `.git` directory, so `git ls-files` returns nothing |
| console.log in services | PASS | **FALSE PASS** — only checks `*.service.ts` and `*.controller.ts` |
| Empty catch blocks | PASS | **FALSE PASS** — only checks paths that may not match actual files |
| npm audit | WARNING | **Legitimate** — found 10 vulnerabilities (5 moderate, 4 high, 1 critical) |

**9 of 10 checks are false positives** — they pass because they search for NestJS/Prisma patterns that structurally cannot exist in a Chrome extension. Only the npm audit warning is real.

**Bug 9**: `echo "\n"` used throughout `full-audit.sh` instead of `echo -e "\n"` or `printf "\n"`. Output contains literal `\n\033[0;36m` escape sequences instead of rendered colors/newlines.

### `saascode parity` — Endpoint Parity Check

**Status**: RAN

**Result**: 0 backend endpoints, 0 frontend API calls → "PASS"

This is a **false pass**. The project has **20+ Chrome message types** in `src/shared/utils/messaging.ts` that route through `src/background/message-handler.ts`. The parity checker looks for REST `@Get/@Post` decorators and `apiClient.get/post` calls — neither exist. The actual message-passing system is completely invisible to this tool.

### `saascode snapshot` — Project Map Generation

**Status**: RAN

**Result**: Generated `.claude/context/project-map.md` with:
- Models: 0
- Enums: 0
- Controllers: 0
- Pages: 0

The generated map is **completely empty** because it scans for Prisma schema models, NestJS controllers, and Next.js pages — none of which exist.

**Bug 10**: The snapshot YAML parser includes inline comments in path values. The schema path in `saascode-kit.yaml` is:
```yaml
schema: "src/storage/schemas"          # IndexedDB schemas
```
But the generated project-map.md contains:
```
(schema not found at src/storage/schemas"          # IndexedDB schemas)
```
The `"` and inline comment `# IndexedDB schemas` were included as part of the path string instead of being stripped.

### `saascode status` — Installation Status

**Status**: RAN (works correctly)

Reports installed file counts. This is the only command that works as expected since it just counts files.

---

## Updated Bug Summary

| # | Bug | Severity | Found During |
|---|-----|----------|-------------|
| 1 | Template engine doesn't render CLAUDE.md | HIGH | Static analysis |
| 2 | Hardcoded NestJS monorepo paths in templates | HIGH | Static analysis |
| 3 | Config naming: `saascode-kit.yaml` vs `manifest.yaml` | HIGH | Static analysis |
| 4 | Machine-specific npx hash in .gitignore | LOW | Static analysis |
| 5 | CI pipeline will fail (wrong build commands) | HIGH | Static analysis |
| 6 | PostToolUse hook runs broken validator | MEDIUM | Static analysis |
| 7 | `ast-review.sh` hardcodes submodule path, breaks with npx install | HIGH | Runtime — `saascode review` |
| 8 | `ast-review.ts` crashes without git repo (no fallback for `git rev-parse`) | MEDIUM | Runtime — `saascode review` |
| 9 | `echo "\n"` instead of `echo -e "\n"` — literal escape sequences in output | LOW | Runtime — `saascode audit` |
| 10 | YAML parser includes inline comments in path values | MEDIUM | Runtime — `saascode snapshot` |

**Total: 10 bugs found, 5 HIGH / 3 MEDIUM / 2 LOW**

---

## Full Runtime Test (2026-02-12, Run 2 — with git initialized)

Initialized git repo to unblock git-dependent commands. Ran all 8 CLI commands.

### Results Summary

| Command | Status | Exit Code | Useful Output? |
|---------|--------|-----------|----------------|
| `saascode review` | CRASHED | 2 | No — `apps/api/tsconfig.json` not found (Bug 2: hardcoded NestJS path) |
| `saascode audit` | RAN | 0 | No — 9/10 checks are false passes (scanning wrong patterns). **Bug 11**: CLI router ignores manifest paths, defaults to `apps/api` and `apps/portal` |
| `saascode parity` | RAN | 0 | No — 0 vs 0 = false "PASS" (no REST endpoints exist) |
| `saascode predeploy` | RAN | 1 | Partially — TypeScript check + secrets check passed legitimately. **5 of 7 gates failed for wrong reasons** |
| `saascode verify` | RAN | 0 | Partially — **Bug 12**: Reports "PostgreSQL installed ✓" as a pass for a Chrome extension that has no PostgreSQL dependency |
| `saascode snapshot` | RAN | 0 | No — 0 models, 0 enums, 0 controllers, 0 pages (empty project map) |
| `saascode check-file` | RAN | 0 | **YES — most useful command.** Found 5 real warnings (see below) |
| `saascode review --ai` | FAILED | 1 | No — needs API key in `.env` file. Supports Groq (free), OpenAI, Anthropic, Gemini, DeepSeek, Moonshot, DashScope |

### `saascode review` — AST Review (Still Crashed)

Even with git repo initialized, crashes because `ast-review.ts` line 23-24 hardcodes:
```typescript
const API_SRC = path.join(PROJECT_ROOT, 'apps/api/src');
const TSCONFIG = path.join(PROJECT_ROOT, 'apps/api/tsconfig.json');
```
Neither path exists. The manifest `paths.backend: "src/background"` is ignored.

### `saascode audit` — Bug 11: CLI Router Ignores Manifest Paths

When run via `saascode.sh audit`, it defaults to `apps/api` and `apps/portal` instead of reading the manifest paths (`src/background` and `src/options`). Previous run worked only because we passed paths manually: `full-audit.sh src/background src/options`.

**Bug 11**: `saascode.sh` CLI router does not pass manifest-configured paths to `full-audit.sh`.

### `saascode predeploy` — Pre-Deploy Gates

| Gate | Result | Accurate? |
|------|--------|-----------|
| TypeScript Check | PASS | **Legitimate** |
| Backend Build (`npm --prefix apps/api run build`) | FAIL | **Wrong** — no `apps/api/package.json`. Correct command: `npm run build` |
| Frontend Build (`npm --prefix apps/portal run build`) | FAIL | **Wrong** — no `apps/portal/package.json`. Correct command: `npm run build` |
| Backend Tests (`npm --prefix apps/api run test`) | FAIL | **Wrong** — same path issue. Correct: `npm test` |
| Security Audit | FAIL | **Legitimate** — npm audit found vulnerabilities |
| No Hardcoded Secrets | PASS | **Legitimate** |
| API Health Check (`curl localhost:4000/health`) | FAIL | **Wrong** — Chrome extensions have no HTTP health endpoint |

2 of 7 passes are legitimate. 5 of 7 failures are false (wrong commands/wrong assumptions).

### `saascode verify` — Environment Check

| Check | Result | Accurate? |
|-------|--------|-----------|
| Node.js v20.5.0 | PASS | Legitimate |
| npm 10.5.2 | PASS | Legitimate |
| PostgreSQL installed | PASS | **Bug 12: FALSE PASS** — This project has no PostgreSQL dependency. The kit checks for PostgreSQL regardless of `stack.backend.database` setting. |
| Dependencies installed | PASS | Legitimate |
| No root .env | SKIP | Legitimate (Chrome extension stores keys in Chrome storage, not .env) |
| Git repository | PASS | Legitimate |

### `saascode check-file` — Single File Validator (MOST USEFUL)

Ran against `src/background/message-handler.ts`. Found **5 real warnings**:

| Warning | Accurate? | Notes |
|---------|-----------|-------|
| `console.log found (24 occurrences)` | **Partially** — Chrome extensions use console for dev inspection, but 24 is excessive for production |
| `User input interpolated into AI prompt — risk of prompt injection (line 1112)` | **YES — Real finding** — JD text going directly into AI prompts |
| `Hardcoded AI model name (line 391)` | **YES — Real finding** — model names should be in config |
| `Hardcoded AI model name (line 392)` | **YES — Real finding** — same |
| `switch statement without default case (line 16)` | **YES — Real finding** — message handler switch should have default |

This is the **only command that produced genuinely useful results** for this project.

### `saascode review --ai` — AI Review

Requires an API key in `.env`. Supports 7 providers: Groq (free), OpenAI, Anthropic, Gemini, DeepSeek, Moonshot, DashScope. Could be useful if configured, but the system prompt would still inject NestJS-specific review rules.

---

## New Bugs Found (Run 2)

| # | Bug | Severity | Found During |
|---|-----|----------|-------------|
| 11 | `saascode.sh` CLI router ignores manifest paths — `audit` defaults to `apps/api` and `apps/portal` | HIGH | Runtime — `saascode audit` (run 2) |
| 12 | `verify` checks for PostgreSQL regardless of `stack.backend.database` config | LOW | Runtime — `saascode verify` |

---

## Cumulative Bug Count

| # | Bug | Severity |
|---|-----|----------|
| 1 | Template engine doesn't render CLAUDE.md | HIGH |
| 2 | Hardcoded NestJS monorepo paths in templates | HIGH |
| 3 | Config naming: `saascode-kit.yaml` vs `manifest.yaml` | HIGH |
| 4 | Machine-specific npx hash in .gitignore | LOW |
| 5 | CI pipeline will fail (wrong build commands) | HIGH |
| 6 | PostToolUse hook runs broken validator | MEDIUM |
| 7 | `ast-review.sh` hardcodes submodule path, breaks with npx install | HIGH |
| 8 | `ast-review.ts` crashes without git repo | MEDIUM |
| 9 | `echo "\n"` instead of `echo -e "\n"` in audit script | LOW |
| 10 | YAML parser includes inline comments in path values | MEDIUM |
| 11 | CLI router ignores manifest paths for audit/predeploy | HIGH |
| 12 | `verify` checks for PostgreSQL regardless of database config | LOW |

**Total: 12 bugs — 6 HIGH / 3 MEDIUM / 3 LOW**

---

## Bug 13: Original `ast-review.ts` Is NestJS-Only — Ignores All Non-NestJS Projects

The original `ast-review.ts` shipped by saascode-kit **only checks NestJS patterns**:

- Scans exclusively for `*.controller.ts` and `*.service.ts` files
- Checks for `@UseGuards`, `@Controller`, `@Roles`, `@Public` decorators
- Checks for `ClerkAuthGuard`, `TenantGuard`, `RolesGuard` guard chains
- Checks for Prisma `findMany/findFirst/findUnique/create/update/delete` with `tenantId` scoping
- Checks for `@CurrentTenant()` parameter decorators
- Checks for `$queryRaw`/`$executeRaw` SQL injection
- Hardcodes `apps/api/src` as the source directory and `apps/api/tsconfig.json` as the TS config

**For any project that is NOT NestJS + Prisma, the AST review will either crash or return 0 findings.** The generic checks (empty catch, console.log, hardcoded secrets) are buried inside controller/service iteration loops, so they only run on `*.controller.ts` and `*.service.ts` files — meaning they are effectively dead code for non-NestJS projects.

**Severity**: HIGH — The primary review tool is framework-locked.

---

## Full Review Results (2026-02-12, Run 3 — with fixed ast-review.ts)

We rewrote `ast-review.ts` to work with any TypeScript project (not just NestJS). The rewritten version scans `src/**/*.ts` and `src/**/*.tsx` with the root `tsconfig.json`, and checks for:
- Hardcoded secrets / API keys
- innerHTML / dangerouslySetInnerHTML (XSS)
- eval() usage
- Prompt injection risks (user input in AI prompts)
- Empty catch blocks
- Excessive console.log
- Hardcoded AI model names
- Switch without default case
- Async methods without try-catch on chrome/AI calls
- Message handler coverage

### AST Review Results

| Metric | Count |
|--------|-------|
| Files scanned | 92 (78 .ts + 14 .tsx) |
| Critical findings | 56 |
| Warnings | 61 |
| Clean files | 61 |

#### Critical Findings (56)

| Category | Count | Files |
|----------|-------|-------|
| **innerHTML XSS** | 44 | `autofill-sidebar.ts` (12), `content/index.ts` (5), `ui/overlay.ts` (7), `ui/sidebar.ts` (8), `detectors/dice.ts` (2), `detectors/greenhouse.ts` (2), `detectors/indeed.ts` (2), `detectors/lever.ts` (2), `popup/App.tsx` (2), `form-detector.ts` (2) |
| **Prompt injection** | 12 | `message-handler.ts` (8), `context-engine.ts` (2), `auto-improver.ts` (1), `humanizer.ts` (1) |

#### Warnings (61)

| Category | Count | Files |
|----------|-------|-------|
| **Hardcoded AI model names** | 26 | `message-handler.ts` (18), `openai.ts` (3), `AISettings.tsx` (4), `ml-ai.ts` (1) |
| **Empty catch blocks** | 14 | Various files |
| **Excessive console.log** | 10 | `context-engine.ts` (39 logs), `generic.ts` (28), `message-handler.ts` (24), `content/index.ts` (19), `ProfileContext.tsx` (13), etc. |
| **Switch without default** | 7 | `message-handler.ts`, `context-menu.ts`, `autofill-content.ts`, `file-parser.ts`, `parser.ts`, etc. |
| **Prompt injection** | 4 | Additional lower-confidence findings |

### check-file Results (Key Files)

| File | Findings |
|------|----------|
| `src/background/message-handler.ts` | 5 warnings: 24x console.log, prompt injection (line 1112), 2x hardcoded model name, switch without default |
| `src/content/index.ts` | 2 warnings: 19x console.log, switch without default |
| `src/core/profile/context-engine.ts` | 1 warning: 39x console.log |
| `src/ai/providers/openai.ts` | 3 warnings: 3x hardcoded model name |
| `src/ai/providers/groq.ts` | 1 warning: 4x console.log |
| `src/options/components/ResumeGenerator.tsx` | 1 warning: 1x console.log |
| `src/content/autofill/autofill-sidebar.ts` | 0 (PASS — check-file doesn't detect innerHTML) |

### Audit Results (with correct paths)

Same as Run 2 — 9/10 false passes, 1 real warning (npm audit vulnerabilities). The audit script still checks NestJS patterns regardless of paths passed.

### Top Priority Issues to Fix

1. **44 innerHTML XSS risks** in content scripts — content scripts inject into third-party pages and must use safe DOM APIs
2. **12 prompt injection risks** — user-supplied JD text goes directly into AI prompts without sanitization
3. **26 hardcoded AI model names** — should be configurable via settings
4. **14 empty catch blocks** — silently swallowing errors
5. **npm vulnerabilities** — 5 moderate, 4 high, 1 critical

---

## Bug 14: `/docs` Skill Is NestJS-Focused — Scan Commands Target Wrong Project Type

The `/docs` skill (`.claude/skills/docs.md`) hardcodes NestJS/Prisma scan commands:

```bash
# From docs.md Step 1: Scan
find . -name "schema.prisma" | grep -v node_modules
grep -rn "@\(Get\|Post\|Put\|Patch\|Delete\|All\)\|@Controller" --include="*.controller.ts"
find . -path "*/src/modules/*" -name "*.module.ts" | grep -v node_modules
```

**None of these exist in a Chrome extension:**
- No `schema.prisma` (uses IndexedDB)
- No `*.controller.ts` (uses Chrome message handlers)
- No `*.module.ts` NestJS modules (flat `src/` structure)

**The generated docs structure is also SaaS-focused:**
- `api-reference.md` — "All endpoints by module" → No REST API, uses Chrome message passing
- `data-model.md` — "DB schema + relations (Mermaid ER)" from Prisma → No Prisma, uses IndexedDB stores
- `security.md` — "Auth model, guard chain" → No auth, no guards
- `features/` — "One per backend module (controller + service + DTOs)" → No NestJS modules

**Feature template includes irrelevant sections:**
- "Roles & Permissions" table → No roles system
- "API Endpoints" table with Method/Route/Description/Roles → No REST endpoints

**For this Chrome extension, the docs scan should target:**
- `src/manifest.json` → Extension permissions, content scripts, service worker
- `src/shared/utils/messaging.ts` → 45+ message types (the "API")
- `src/background/message-handler.ts` → Message routing (the "controller")
- `src/storage/idb-client.ts` → IndexedDB schema (4 stores, 11 indexes)
- `src/shared/types/master-profile.types.ts` → Data model (23+ types)
- `src/content/detectors/` → Platform support (7 job boards)
- `src/ai/` → AI provider abstraction
- `src/options/App.tsx` → Options page navigation (5 tabs)

**Severity**: MEDIUM — Docs can be generated manually, but the skill is misleading.

---

## Updated Cumulative Bug Count

| # | Bug | Severity |
|---|-----|----------|
| 1 | Template engine doesn't render CLAUDE.md | HIGH |
| 2 | Hardcoded NestJS monorepo paths in templates | HIGH |
| 3 | Config naming: `saascode-kit.yaml` vs `manifest.yaml` | HIGH |
| 4 | Machine-specific npx hash in .gitignore | LOW |
| 5 | CI pipeline will fail (wrong build commands) | HIGH |
| 6 | PostToolUse hook runs broken validator | MEDIUM |
| 7 | `ast-review.sh` hardcodes submodule path, breaks with npx install | HIGH |
| 8 | `ast-review.ts` crashes without git repo | MEDIUM |
| 9 | `echo "\n"` instead of `echo -e "\n"` in audit script | LOW |
| 10 | YAML parser includes inline comments in path values | MEDIUM |
| 11 | CLI router ignores manifest paths for audit/predeploy | HIGH |
| 12 | `verify` checks for PostgreSQL regardless of database config | LOW |
| 13 | Original `ast-review.ts` is NestJS-only — ignores all non-NestJS projects | HIGH |
| 14 | `/docs` skill scan commands and structure are NestJS-focused | MEDIUM |

**Total: 14 bugs — 7 HIGH / 4 MEDIUM / 3 LOW**
