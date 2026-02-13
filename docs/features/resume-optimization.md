# Feature: Resume Optimization

## Status: Active

## Overview

AI-powered 3-step strategic resume optimization that follows a hiring manager mindset, not keyword stuffing.

## The 3-Step Process

Located in `handleOptimizeResumeForJD` (`src/background/message-handler.ts`)

### Step 1: Deep JD Analysis (Temperature: 0.3)

Think like a hiring manager:
- What is the PRIMARY business problem they're solving?
- What are the must-haves vs nice-to-haves?
- What hidden priorities aren't explicitly stated?
- What impact will this person need to deliver?

### Step 2: Strategic Summary Rewriting (Temperature: 0.6)

Tell a STORY, don't stuff keywords:
- Lead with candidate's most relevant strength for THIS role
- Connect experience to employer's business problem
- Weave keywords NATURALLY (they should feel invisible)
- End with value they'll bring

### Step 3: Intelligent Bullet Enhancement (Temperature: 0.5)

Transform generic bullets into compelling narratives:
- Add CONTEXT: team size, company stage, complexity
- Add SCALE: numbers, percentages, user counts
- Add IMPACT: business value, not just technical outcome
- Add OWNERSHIP: show initiative
- NEVER invent metrics — describe complexity instead

## Output Formats

| Format | Library | Features |
|--------|---------|----------|
| PDF | jsPDF | Contact line, categorized skills, projects section |
| DOCX | docx | Same structure, editable format |

### Skills Categories (13)

1. Programming Languages
2. Web Frameworks
3. Frontend Technologies
4. Databases
5. Cloud & DevOps
6. APIs & Architecture
7. Testing & QA
8. AI/ML Technologies
9. Data & Analytics
10. Version Control & PM
11. Design Tools
12. Office & Productivity
13. Technical Skills (catch-all)

## Key Files

| File | Purpose |
|------|---------|
| `src/background/message-handler.ts` | `handleOptimizeResumeForJD` — 3-step pipeline |
| `src/options/components/ResumeGenerator.tsx` | PDF/DOCX generation UI |
| `src/core/profile/context-engine.ts` | 5-stage AI pipeline for resume analysis |
