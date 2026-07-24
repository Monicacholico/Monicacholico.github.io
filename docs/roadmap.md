# Career & Projects Roadmap

*Last updated: July 15, 2026*

## Completed

### Portfolio Bug Fix
- Fixed the scroll "dead zone" in the portfolio site (`index.html`) where users had to scroll excessively before projects appeared

### Slack-Jira Agent Prototype
- Location: `/Users/monicacholico/Documents/Personal/Portfolio/slack-jira-agent/`
- Working 4-step agentic pipeline: classify, extract, enrich, validate
- `--create` mode tested and confirmed working — real Jira ticket created on the board
- Web UI built for manager demo (separate agent project)
- Active work continues in separate Cursor agent on the slack-jira-agent project

### Interview Prep (June 2026)
- Completed practice problems: Dedupe, Two Sum, Unique Emails, Filter & Transform, Bylines (x2), Parentheses, Brackets
- Practice files at: `interview-prep/practice-problems.js`, `interview-prep/bylines-real.js`, `interview-prep/parentheses.js`, `interview-prep/js-quick-reference.js`
- Key concepts mastered: hash maps (Map), Sets, .filter(), .map(), .sort(), .join(), .slice(), destructuring, optional chaining, filter(Boolean), time complexity (O(n) vs O(n²) vs O(1))

---

## Job Applications — Status (Updated July 15, 2026)

### Editorial Positions

**The Upshot — Data Graphics/Multimedia Editor**
- Resume: `resume/index.html` — "Creative Developer & Visual Storyteller"
- Cover letter: `resume/cover-letter.html` — addressed to Jonathan Ellis
- PDFs: `assets/resume.pdf`, `assets/cover-letter.pdf`
- Status: SUBMITTED — No response

**Investigations — Graphics/Multimedia Editor**
- Cover letter: `resume/cover-letter-investigations.html` — addressed to Gabriel Dance
- PDF: `assets/cover-letter-investigations.pdf`
- Status: SUBMITTED — No response

**Graphics — Graphics Multimedia Editor**
- Cover letter: `resume/cover-letter-graphics.html` — addressed to Simone Landon
- PDF: `assets/cover-letter-graphics.pdf`
- Same editorial resume
- Recruiter: Whitney Warner-Rivera
- Status: NOT SELECTED — Received automated rejection email (confirmed July 23, 2026). Applied May 13, 2026. Same role re-posted as REQ-020087 (now lists DC + NY); not pursuing again — reporting/visual-journalism experience gap unchanged.

### Engineering Positions

Engineering resume: `resume/index-engineering.html` — "Front-End Software Engineer"
Resume PDF: `assets/resume-engineering.pdf`

**Messaging Platforms — Senior Software Engineer**
- Status: CLOSED — Role required Senior title; internal policy doesn't allow promotion during transfer

**Programming — Software Engineer**
- Status: CLOSED — Hiring manager required in-office

**Games - Web Platform — Software Engineer**
- Status: CLOSED — Position filled

**News Stories — Software Engineer** ⭐ INTERVIEWED
- Cover letter: `resume/cover-letter-news-stories.html` — addressed to Griselle Astrid Ong
- PDF: `assets/cover-letter-news-stories.pdf`
- Recruiter: Nadia Tiwari
- Hiring manager: Griselle Astrid Ong
- Status: NOT SELECTED (July 2026) — Interviewed June 2, went well, but they continued with other candidates
- Feedback from hiring manager (Griselle): looking for someone with more experience shipping deliveries via CI/CD and with daily React experience. Recommended going below current seniority to apply for junior/associate roles to gain the experience — Monica has decided NOT to do this (would not step down in level).
- Interview details:
  - 30 min behavioral with hiring manager (Griselle): questions about team process, cross-functional collaboration, rollback experience, handling disagreements, ambiguous projects
  - 30 min technical assessment with Gemma Grover (engineer): Dedupe problem in CoderPad — solved correctly with loop + Set approach. Struggled with time complexity terminology (said O(1) instead of O(n)) and with converting Set back to array for the one-liner. Engineer guided her to `[...new Set(arr)]`.
  - Manager observed during technical portion
- Interview takeaways for future prep: practice STAR method (Situation, Task, Action, Result) for shorter behavioral answers; review time complexity vocabulary; get comfortable with CoderPad/Mocha testing interface
- KEY THEME: two rejections now cite the same gap — daily React + CI/CD shipping experience. This is the skill area to close (see React Practice Project below).

**AI Platforms and Products — Software Engineer**
- Status: NOT SELECTED (July 2026) — They decided to no longer move forward with the application

**Games SUB Squad — Software Engineer** ⭐ APPLIED
- Cover letter: `resume/cover-letter-games-sub.html` — addressed to Steven Speicher
- PDF: `assets/cover-letter-games-sub.pdf`
- Recruiter: Taylor Gillhouse
- Status: SUBMITTED — No updates yet (still open)
- Strong fit: mid-level role, FlexSuite experience with Crossword/Wordle/Connections, growth-oriented team

**Games CASH Squad — Software Engineer** ⭐ APPLYING (opened July 2026, REQ-020318)
- Hiring manager: Nicole Zhu
- Recruiter: Taylor Gillhouse (same recruiter as Games SUB Squad)
- Resume: `resume/index-engineering.html` → `assets/resume-engineering.pdf` (freshness-fixed July 23, 2026: education reordered, Feel Like Dancing → "Present")
- Cover letter: `resume/cover-letter-games-cash.html` → `assets/cover-letter-games-cash.pdf` — addressed to Nicole Zhu (adapted from games-sub; retargeted to CASH conversion/growth focus; added FlexSuite→landing-page hook and Feel Like Dancing e-commerce/sales hook)
- Focus: conversion surfaces — Games Sales, free trial, marketing landing page, driving players to higher-value app surfaces. Stack: React + TypeScript, Node.js, Go APIs on AWS.
- Salary posted: $110K–$130K (external range; internal comp transfers)
- CAUTION: posting body says hybrid NYC — conflicts with Monica's non-negotiable remote requirement. Ideally confirm remote flexibility with Taylor. Applying anyway for radar/exposure ("no downside" policy).
- Basic qual repeats the React/TS gap flagged in prior rejections. But strong Games-domain fit (FlexSuite Crossword/Wordle/Connections).

### Key Learnings from Internal Mobility
- All IC transfers are lateral (same title) — no promotions during transfer
- Compensation transfers with you (posted salary ranges are for external candidates)
- Must tell current manager when submitting formal application in Workday
- Portfolio-heavy evaluation for lateral moves in same skillset
- "No downside to submitting" per policy — apply even if you meet only some requirements
- Future strategy: apply only to Software Engineer level (not Senior)
- New factor: current team is in "limbo" — added to Ad Mission in some aspects but not officially part of Technology/X-fun, missing benefits/programs/events. No plan to change this. Prioritize positions on properly integrated Technology teams.

### Interview Prep Notes
- NYT internal question bank includes: Bylines, Parentheses (+Brackets extension), Weather, Code Review
- CoderPad uses Mocha for test framework — need to modify expected values in test cases yourself
- Format: 5 min intro, 5 min focus time (alone), ~20 min coding, 5 min candidate questions
- Open-note: can Google syntax during the interview
- Behavioral questions focus on: collaboration, rollbacks/production issues, disagreements, ambiguous projects, cross-functional work
- For future behavioral answers: use STAR method, give ONE example, state outcome, stop. Avoid over-explaining.

---

## Next Steps

### 1. Immediate — Wait for News Stories response
- Nothing to do but wait
- If they move forward: likely panel interviews (system design + behavioral + code review based on internal docs)
- If not: keep applying, keep building

### 2. React Practice Project — Article Explorer for Feel Like Dancing
- Repo at: `/Users/monicacholico/Documents/Personal/Portfolio/feel-like-dancing/`
- React + TypeScript already configured in Astro
- Build an Article Explorer component exercising key hooks
- Important for future interviews — React is the primary framework for most NYT engineering teams

### 3. English Writing/Composition Improvement
- Goal: improve professional writing for journalism applications
- After diplomado finishes (June 28): look into composition courses
- Read AP Stylebook, study NYT Graphics/Upshot writing style
- Practice writing narratives for Planeta Mujer visualizations in English
- Consider IELTS Academic or Cambridge C2 for formal assessment

### 4. Reporting Experience (Long-term, post-diplomado)
- Turn Planeta Mujer visualizations into reported stories with narrative
- Look into freelance pitching to smaller outlets (The Pudding, ProPublica Local, bilingual publications)
- Connect with data journalism community (IRE/NICAR, OpenNews)
- Bilingual advantage: pitch Spanish/English data stories

### 5. Slack-Jira Agent — Remaining Phases
- Managed by separate Cursor agent on the slack-jira-agent project

### 6. Planeta Mujer — Ongoing
- Phase 5 of Modern Slavery visualization (world map finale)
- Fertility Rate Phase 3 (scroll-driven zoom + horizontal panning)
- og:image preview images for social sharing
- Frontend Masters D3 course — second class started

### 7. Diplomado
- "Creación de Experiencias, Marketing y Ecosistemas Digitales"
- Finishes June 28, 2026
- Priority: complete this before taking on new learning commitments

## Full Conversation Transcript
The complete conversation history for this chat is at:
`/Users/monicacholico/.cursor/projects/Users-monicacholico-Documents-Personal-Portfolio-Monicacholico-github-io/agent-transcripts/14ea3a02-00b7-4ae6-85f6-099c1c6b8dc0/14ea3a02-00b7-4ae6-85f6-099c1c6b8dc0.jsonl`

Use `Grep` to search for relevant keywords when you need deep context on any decision.
