# Feature: Smart Autofill

## Status: Active

## Overview

Detects job application forms on any page and auto-fills them using data from the user's MasterProfile and AI-generated answers.

## Components

| Component | File | Purpose |
|-----------|------|---------|
| Form Detector | `src/content/autofill/form-detector.ts` | Identifies form fields on page |
| Filler | `src/content/autofill/filler.ts` | Maps profile data to form fields |
| Sidebar | `src/content/autofill/autofill-sidebar.ts` | Preview & control UI |
| Content Script | `src/content/autofill-content.ts` | Entry point (all frames) |
| Answer Bank | `src/core/autofill/answer-bank.ts` | Q&A storage and matching |

## Answer Sources

1. **MasterProfile autofillData** — Direct mappings (name, email, phone, address, work auth)
2. **Answer Bank** — Previously saved answers matched by question pattern
3. **AI Generation** — On-demand AI answers for new questions (uses company/role context)

## Message Types

| Type | Purpose |
|------|---------|
| `START_AUTOFILL` | Begin filling forms |
| `DETECT_FORM` | Identify form fields |
| `SAVE_ANSWER` | Store a Q&A pair |
| `GET_ANSWER_SUGGESTION` | Find matching saved answer |
| `GENERATE_AI_ANSWER` | AI-generate an answer |
| `PREVIEW_AUTOFILL` | Preview before filling |

## Key Files

| File | Purpose |
|------|---------|
| `src/content/autofill-content.ts` | Content script entry point |
| `src/content/autofill/form-detector.ts` | Field detection logic |
| `src/content/autofill/filler.ts` | Data → form field mapping |
| `src/content/autofill/autofill-sidebar.ts` | Sidebar UI |
| `src/core/autofill/answer-bank.ts` | Answer storage & matching |
| `src/options/components/AutofillSettings.tsx` | Settings UI |
