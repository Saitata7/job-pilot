# SaasCode Kit — Bug Report

**Date**: 2026-02-12
**Project**: Jobs Pilot (Chrome Extension, Manifest V3)
**Kit Version**: github:Saitata7/saascode-kit (latest, updated 2026-02-12)

---

## Current AST Review Results

| Metric | Count |
|--------|-------|
| Files scanned | 95 (81 .ts + 14 .tsx) |
| Critical | 52 |
| Warnings | 44 |

### Breakdown

| Category | Type | Count | Notes |
|----------|------|-------|-------|
| innerHTML XSS | Critical | 52 | ~20 are false positives (reads, not writes) — see Bug 5 |
| Hardcoded model names | Warning | 20+ | All in `models.ts` constants file — see Bug 3 |
| Empty catch (comment-only) | Warning | ~6 | Catches with only comments, no code — see Bug 4 |
| Excessive console | Warning | ~10 | Files with >10 console statements |
| Switch without default | Warning | ~7 | Message handler switches |

### Audit Results

0 critical, 1 warning (npm audit vulnerabilities), 9 passed.

---

## Open Bugs

### Bug 1: Template Engine Doesn't Render CLAUDE.md

The generated `CLAUDE.md` contains raw Handlebars expressions (`{{generated_date}}`, `{{#if auth.multi_tenant}}`, etc.) that were never rendered. The init command copies the template without running it through the template engine.

**Severity**: HIGH

### Bug 2: Hardcoded NestJS Monorepo Paths

Scripts, CI, skills, and checklists hardcode `apps/api/src`, `apps/portal/src`, `*.controller.ts`, `*.service.ts`, Prisma patterns. None exist in a Chrome extension.

Affected: `ast-review.ts` (source scan path), `endpoint-parity.sh`, `full-audit.sh`, `pre-deploy.sh`, `snapshot.sh`, `saascode.yml` CI pipeline, 10+ skills.

**Severity**: HIGH

### Bug 3: AST Review Flags Constants File as "Hardcoded Model Names"

After centralizing model names into `src/shared/constants/models.ts` (the standard fix), the AST review flags every line in that file as a warning. The `as const` skip doesn't help since individual model strings aren't on `as const` lines.

The warning category can never reach 0 — warnings just move from scattered files to the centralized file.

**Severity**: MEDIUM

### Bug 4: AST Review Flags Catches With Comment-Only Bodies as "Empty"

The new AST-based detection uses `statements.length === 0`. Comments aren't AST statements, so catches with intentional comments (explaining why the catch is empty) are still flagged. ~6 false positives remain.

**Severity**: MEDIUM

### Bug 5: AST Review Flags innerHTML Reads as XSS Writes

The detector flags any line containing `.innerHTML` — including reads like `return el.innerHTML` and `if (el?.innerHTML)`. ~20 of the 52 criticals are false positives (reads in detector `getHtml()` helpers).

Has `// safe` escape hatch, but requires manually annotating every read line.

**Severity**: HIGH

### Bug 6: Config Naming Mismatch (`saascode-kit.yaml` vs `manifest.yaml`)

Init creates `saascode-kit.yaml`, but all scripts read `manifest.yaml`. Scripts fall back to hardcoded defaults that enable NestJS tenancy/backend checks.

**Severity**: HIGH

### Bug 7: CLI Router Ignores Manifest Paths

`saascode.sh` router doesn't pass manifest-configured paths to scripts. `audit` defaults to `apps/api` and `apps/portal` instead of reading `src/background` and `src/options` from config.

**Severity**: HIGH

### Bug 8: `echo "\n"` Instead of `echo -e "\n"` in Audit Script

Output contains literal `\n\033[0;36m` escape sequences instead of rendered colors/newlines.

**Severity**: LOW

### Bug 9: YAML Parser Includes Inline Comments in Path Values

Schema path in `saascode-kit.yaml`:
```yaml
schema: "src/storage/schemas"          # IndexedDB schemas
```
Gets parsed as `src/storage/schemas"          # IndexedDB schemas` — quote and comment included.

**Severity**: MEDIUM

### Bug 10: `verify` Checks for PostgreSQL Regardless of Database Config

Reports "PostgreSQL installed" as a pass for a Chrome extension with no PostgreSQL dependency.

**Severity**: LOW

### Bug 11: `/docs` Skill Scan Commands Are NestJS-Focused

Scans for `schema.prisma`, `*.controller.ts`, `*.module.ts` — none exist in Chrome extension.

**Severity**: MEDIUM

### Bug 12: `.claude/context/` Empty — Skills Depend on Missing Files

`snapshot` produces nothing for non-NestJS projects. `golden-reference.md` is never generated. 4 skills (`build-feature`, `review-pr`, `recipe`, `changelog`) depend on these missing files.

**Severity**: MEDIUM

### Bug 13: `console.debug` Counted in Excessive Console Check

Creates catch-22: fix empty catches by adding `console.debug` logging → get warned about too many console statements. Not currently triggering but could for files near the threshold (>10).

**Severity**: LOW

### Bug 14: Machine-Specific npx Hash in .gitignore

Entry `../../../../.npm/_npx/3f5972881ed2733a/node_modules/saascode-kit/` is machine-specific.

**Severity**: LOW

---

## Summary

| Severity | Count |
|----------|-------|
| HIGH | 5 |
| MEDIUM | 5 |
| LOW | 4 |
| **Total** | **14 open bugs** |

### Previously Fixed

- `ast-review.ts` crashes without git repo — **FIXED** (falls back to `process.cwd()`)
- Catch blocks with logging flagged as empty — **PARTIALLY FIXED** (AST-based detection, only comment-only bodies still flagged)
- `audit` and `review` disagree on empty catches — **PARTIALLY FIXED** (both use `statements.length === 0` now)
- `ast-review.sh` hardcodes submodule path — **FIXED** (paths updated)
- Original `ast-review.ts` was NestJS-only — **FIXED** (now scans all .ts/.tsx)
- PostToolUse hook runs broken validator — **REMOVED** (hook disabled)
