# SaasCode Kit — Bug Report (New Version)

**Date**: 2026-02-13
**Project**: Jobs Pilot (Chrome Extension, Manifest V3)
**Kit Version**: github:Saitata7/saascode-kit (latest, re-installed 2026-02-13)
**New features**: `report`, `report --github`, `report --summary`, `sweep`, `cloak/uncloak`, `docs`

---

## Current Review Results

| Metric | Count |
|--------|-------|
| Files scanned | 95 (81 .ts + 14 .tsx) |
| Critical | 40 |
| Warnings | 206 |

### Breakdown

| Category | Type | Count | Notes |
|----------|------|-------|-------|
| innerHTML XSS | Critical | 40 | Still flags reads as writes |
| console.log() in production | Warning | 175 | NEW: flags every individual statement, not just files with >10 |
| console.debug() in production | Warning | 23 | NEW: flags every individual statement |
| switch without default | Warning | 4 | |
| Hardcoded model names | Warning | 4 | Down from 20+ (only `ml-ai.ts` keyword file, not constants file) |

### Audit Results

0 critical, 1 warning (npm audit), 12 passed. Audit now properly reads manifest paths and skips non-applicable checks.

### Improvements Over Previous Version

- Audit reads correct paths (`src/background`, `src/options`) instead of `apps/api`
- Audit properly skips NestJS-only checks with "(skipped — unknown framework: chrome-service-worker)"
- Model name check no longer flags constants file (`models.ts` clean)
- innerHTML criticals reduced from 52 to 40
- Audit passes increased from 9 to 12 (new skip-aware checks)
- New `docs` command generates useful project-overview.md
- Issue logging: `sweep`/`audit` write to `.saascode/logs/issues-YYYY-MM-DD.jsonl`

---

## New Bugs Found

### Bug 1: `cloak` Command Corrupts All Scripts — Destructive and Non-Reversible

**Severity**: CRITICAL

Running `saascode cloak` then `saascode uncloak` **permanently corrupts** the project:

1. **All `.sh` scripts get path corruption**: `/.saascode` becomes `.saascode` (leading `/` stripped). After cloak+uncloak, 4 of 14 scripts fail `bash -n` syntax check.
2. **CLAUDE.md overwritten**: Replaced with kit's unrendered template. Since CLAUDE.md is in `.gitignore`, the original is **permanently lost** (not recoverable from git).
3. **`saascode-kit.yaml` deleted, replaced with `manifest.yaml`**: Uncloak says "manifest.yaml left as-is" — doesn't restore original filename.
4. **`.gitignore` corrupted**: npx cache path becomes `node_modules.saascode/` (missing `/`) and entry ordering changed.

**Specific script corruption after cloak+uncloak:**

| Script | Syntax Error | Cause |
|--------|-------------|-------|
| `saascode.sh:733` | `unexpected token '}'` | `/.saascode` → `.saascode` throughout, breaks paths in heredocs |
| `report-cli.sh:239` | `unexpected token '('` | `[saascode]` → `.saascode]` (bracket stripped from title string) |
| `sweep-cli.sh:236` | `unexpected EOF` | Same bracket/path corruption |
| `intent-cli.sh:215` | `unexpected EOF` | Same pattern |

**Root cause**: The cloak replacement regex strips `[saascode` and `/saascode` patterns too aggressively. It doesn't escape the `[` bracket in strings like `[saascode]`, and it strips the `/` from path references like `/.saascode/`.

**Impact**: Running `cloak` on a project with spaces in the path or custom CLAUDE.md will cause data loss. The uncloak doesn't properly reverse the damage.

### Bug 2: `report` Command Breaks on Paths With Spaces

**Severity**: HIGH

`report-cli.sh` line 146 uses `for F in $LOG_FILES` where `$LOG_FILES` is an unquoted space-separated string. If the project path contains a space (e.g., `Jobs pilot`), the path gets split:

```
cat: /Users/saitata/Desktop/MINE/Projects/Jobs: No such file or directory
cat: pilot/.saascode/logs/issues-2026-02-13.jsonl: No such file or directory
```

This makes `report`, `report --summary`, and `report --github` completely non-functional for any project with spaces in its path.

**Fix**: Use an array instead of a space-separated string, or use `while IFS= read` loop.

### Bug 3: `lib.sh` Export Errors on Dotted Variable Names

**Severity**: MEDIUM

`lib.sh` line 144-152 tries to `export` variables with dots in their names:

```
export: `TMPL_auth.guard_pattern=none': not a valid identifier
export: `TMPL_auth.multi_tenant=false': not a valid identifier
export: `TMPL_tenancy.enabled=false': not a valid identifier
...
```

Bash doesn't allow dots in variable names. This produces 9 error messages every time any script sources `lib.sh`. The variables are silently not set, which means scripts that depend on these template values will get empty strings.

### Bug 4: `init` Fails Due to lib.sh Export Error

**Severity**: HIGH

`npx github:Saitata7/saascode-kit init` fails with `export: TMPL_auth.guard_pattern=none: not a valid identifier` from lib.sh. The init stops before copying any files, requiring manual sync (`cp`) of scripts/skills/rules.

### Bug 5: AST Review Now Flags Every Individual `console.log` Statement

**Severity**: MEDIUM

Previous version flagged files with >10 console statements (aggregate check). New version flags **every single `console.log()` and `console.debug()` as a WARNING** at the individual line level — 198 warnings total.

This makes the warning count extremely noisy (206 warnings, 96% are console statements) and buries the actual meaningful warnings (4 switch-without-default, 4 hardcoded model names).

### Bug 6: `echo "\n"` Still Not Fixed in Audit Summary

**Severity**: LOW

Audit summary still outputs literal escape sequences:
```
\033[0;31mCritical: 0\033[0m
\033[1;33mWarnings: 1\033[0m
\033[0;32mPassed:   12\033[0m
```

The rest of the audit output uses `echo -e` correctly. Only the summary section uses plain `echo`.

---

## Summary

| Severity | Count |
|----------|-------|
| CRITICAL | 1 |
| HIGH | 2 |
| MEDIUM | 2 |
| LOW | 1 |
| **Total** | **6 new bugs** |

### What's Fixed From Previous Report

- Audit now reads manifest paths (was Bug 7: CLI router ignores paths)
- Model name check skips constants files (was Bug 3: flags constants file)
- AST review works on all TS/TSX files (was Bug 13: NestJS-only)
- `ast-review.ts` no longer crashes without git (was Bug 8)
- `ast-review.sh` uses correct script path (was Bug 7)
- Audit properly skips non-applicable checks with skip messages

### What's Still Present

- innerHTML reads flagged as writes (40 criticals, many false positives)
- Catches with comment-only bodies flagged as empty (~6 warnings, hidden in console noise)
- Template engine doesn't render CLAUDE.md (still raw Handlebars)
