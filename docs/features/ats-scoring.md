# Feature: ATS Scoring Engine

## Status: Active

## Overview

Multi-layer ATS (Applicant Tracking System) scoring that evaluates how well a resume matches a job description. Uses both instant keyword analysis and AI-powered deep analysis.

## Scoring Modes

### Quick Score (Instant, No AI)

Location: `src/core/ats/hybrid-scorer.ts`

- Frequency-weighted keyword extraction from JD
- Position-based weighting (requirements section = higher weight)
- Seniority level matching (entry → mid → senior → lead → principal)
- Years of experience detection
- Background mismatch detection with score penalty

### Layered Score (4-Layer Architecture)

Location: `src/core/ats/layered-scorer.ts`

```
Background (11 types) → Role → Skill Areas → Keywords
```

### Deep Score (AI, On-Demand)

- Hiring manager persona evaluation
- Real fit assessment beyond keywords
- Experience depth and scale analysis
- Competitive positioning

## Supported Backgrounds

| Background | Roles | Skill Areas | Keywords |
|------------|-------|-------------|----------|
| Computer Science | 6 | 8 | ~200 |
| Data Analytics | 5 | 6 | ~150 |
| MBA/Business | 5 | 6 | ~144 |
| Engineering | 5 | 6 | ~134 |
| Design/Creative | 4 | 5 | ~110 |
| Marketing | 5 | 6 | ~138 |
| Healthcare | — | — | ~25 |
| Finance | — | — | ~29 |
| Legal | — | — | ~21 |
| Education | — | — | ~22 |
| Common/Soft Skills | — | — | ~109 |

Keyword definitions: `src/core/ats/keywords/` (11 files, ~200KB total)

## Key Files

| File | Purpose |
|------|---------|
| `src/core/ats/hybrid-scorer.ts` | Quick + Deep scoring |
| `src/core/ats/layered-scorer.ts` | 4-layer architecture |
| `src/core/ats/matcher.ts` | Keyword matching algorithms |
| `src/core/ats/requirement-scanner.ts` | JD requirement extraction |
| `src/core/ats/platform-strategies.ts` | Platform-specific strategies |
| `src/core/ats/keywords/` | Background keyword definitions |
| `src/shared/types/background.types.ts` | Background/role/skill type definitions |
