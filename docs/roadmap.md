# Career & Projects Roadmap

*Last updated: August 26, 2026*

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
- Feedback from hiring manager (Griselle): looking for someone with more experience shipping deliveries via CI/CD and with daily React experience. Recommended stepping down to associate level to gain the experience — Monica is now acting on this advice (see Interactive News application below).
- Interview details:
  - 30 min behavioral with hiring manager (Griselle): questions about team process, cross-functional collaboration, rollback experience, handling disagreements, ambiguous projects
  - 30 min technical assessment with Gemma Grover (engineer): Dedupe problem in CoderPad — solved correctly with loop + Set approach. Struggled with time complexity terminology (said O(1) instead of O(n)) and with converting Set back to array for the one-liner. Engineer guided her to `[...new Set(arr)]`.
  - Manager observed during technical portion
- Interview takeaways for future prep: practice STAR method (Situation, Task, Action, Result) for shorter behavioral answers; review time complexity vocabulary; get comfortable with CoderPad/Mocha testing interface
- KEY THEME: two rejections now cite the same gap — daily React + CI/CD shipping experience. This is the skill area to close (see React Practice Project below).

**AI Platforms and Products — Software Engineer**
- Status: NOT SELECTED (July 2026) — They decided to no longer move forward with the application

**Games SUB Squad — Software Engineer**
- Cover letter: `resume/cover-letter-games-sub.html` — addressed to Steven Speicher
- PDF: `assets/cover-letter-games-sub.pdf`
- Recruiter: Taylor Gillhouse
- Status: NOT SELECTED (Aug 20, 2026 rejection from Taylor — likely covers both Games roles; confirming scope). Strong Games-domain fit but screened out.

**Games CASH Squad — Software Engineer** (opened July 2026, REQ-020318)
- Status: NOT SELECTED (Aug 20, 2026 rejection from Taylor). Screened out at application stage.
- Hiring manager: Nicole Zhu
- Recruiter: Taylor Gillhouse (same recruiter as Games SUB Squad)
- Resume: `resume/index-engineering.html` → `assets/resume-engineering.pdf` (freshness-fixed July 23, 2026: education reordered, Feel Like Dancing → "Present")
- Cover letter: `resume/cover-letter-games-cash.html` → `assets/cover-letter-games-cash.pdf` — addressed to Nicole Zhu (adapted from games-sub; retargeted to CASH conversion/growth focus; added FlexSuite→landing-page hook and Feel Like Dancing e-commerce/sales hook)
- Focus: conversion surfaces — Games Sales, free trial, marketing landing page, driving players to higher-value app surfaces. Stack: React + TypeScript, Node.js, Go APIs on AWS.
- Salary posted: $110K–$130K (external range; internal comp transfers)
- CAUTION: posting body says hybrid NYC — conflicts with Monica's non-negotiable remote requirement. Ideally confirm remote flexibility with Taylor. Applying anyway for radar/exposure ("no downside" policy).
- Basic qual repeats the React/TS gap flagged in prior rejections. But strong Games-domain fit (FlexSuite Crossword/Wordle/Connections).

**Interactive News Technology — Associate Newsroom Software Engineer** ⭐ APPLIED
- Cover letter: written in Google Docs (no AI assistance, per application requirements) — addressed to Amy Hughes
- PDF: uploaded directly from Google Docs
- Status: SUBMITTED (Aug 21, 2026) — awaiting response
- Recruiter: TBD
- This is a strategic move: Griselle (News Stories HM) explicitly recommended stepping down to associate level to gain newsroom engineering experience. Interactive News sits inside the newsroom and works with Data Journalism, Graphics, and A.I. Initiatives — ideal positioning for eventual move to Graphics editorial roles.
- Stack: JavaScript, TypeScript, React, Svelte, Node.js, PostgreSQL, GCP
- Team focus: newsroom tools, election data, AI products, document research, quizzes/games, WordleBot
- Key risk: Associate title = lower level than current Web Engineer; would need to promote back up. Compensation impact TBD.
- Key reward: newsroom positioning, daily React/TypeScript, CI/CD shipping, editorial adjacency — addresses every gap flagged in prior rejections
- Competition: 96 applicants as of Aug 20

### Key Learnings from Internal Mobility
- All IC transfers are lateral (same title) — no promotions during transfer
- Compensation transfers with you (posted salary ranges are for external candidates)
- Must tell current manager when submitting formal application in Workday
- Portfolio-heavy evaluation for lateral moves in same skillset
- "No downside to submitting" per policy — apply even if you meet only some requirements
- Future strategy: apply only to Software Engineer level (not Senior)
- New factor: current team is in "limbo" — added to Ad Mission in some aspects but not officially part of Technology/X-fun, missing benefits/programs/events. No plan to change this. Prioritize positions on properly integrated Technology teams.
- PATTERN (as of Aug 2026): repeatedly screened out at the resume/first-filter stage for mid-level SWE roles. Consistent implied gap = recent daily React + production-shipping experience. Cold applications are the hardest path in.
- STRATEGIC PIVOT: (1) FlexFactory (Next.js/React app Monica now leads, launching soon) is the key resume-changer — in a few months it becomes substantial recent React + production experience that addresses the filter. (2) Recruiter Taylor Gillhouse explicitly offered to keep collaborating on internal moves — cultivate this advocate relationship; a recruiter/HM warm intro or referral beats the resume screen. (3) Stop relying on cold apps; work relationships + build the FlexFactory track record before the next push.

### Interview Prep Notes
- NYT internal question bank includes: Bylines, Parentheses (+Brackets extension), Weather, Code Review
- CoderPad uses Mocha for test framework — need to modify expected values in test cases yourself
- Format: 5 min intro, 5 min focus time (alone), ~20 min coding, 5 min candidate questions
- Open-note: can Google syntax during the interview
- Behavioral questions focus on: collaboration, rollbacks/production issues, disagreements, ambiguous projects, cross-functional work
- For future behavioral answers: use STAR method, give ONE example, state outcome, stop. Avoid over-explaining.

---

## Next Steps

### 1. Immediate — Wait for Interactive News response
- Applied Aug 21, 2026
- If they move forward: expect similar format to News Stories (behavioral + technical assessment)
- Meanwhile: continue building React experience through FlexFactory project

### 2. React Practice Project — Article Explorer for Feel Like Dancing
- Repo at: `/Users/monicacholico/Documents/Personal/Portfolio/feel-like-dancing/`
- React + TypeScript already configured in Astro
- Build an Article Explorer component exercising key hooks
- Important for future interviews — React is the primary framework for most NYT engineering teams

### 3. Creative Technologist Track — Design Portfolio & Skills (NEW — Aug 2026)
- **Identity:** Building toward Creative Technologist / Creative Developer / Design Engineer roles — bridging engineering and design
- **Full skills inventory:** `docs/skills-inventory.md` — maps every skill from job postings to have / doing-but-not-documenting / need-to-develop
- **Cursor rule created:** `.cursor/rules/design-vocabulary-coaching.mdc` — all agents now flag design activities and teach professional vocabulary as Monica works
- **Documentation system:** For each project/feature, capture: Before (problem, sketches, ideas), During (decisions, iterations, tradeoffs), After (shipped result, reflection, what you'd change)
- **First case study candidates:**
  - FLD Astro migration (design system setup, component architecture, visual design decisions)
  - Next Planeta Mujer visualization (full process from data question to shipped piece)
  - FlexFactory at work (if shareable — React component architecture, template system design)
- **Learning path:**
  - Priority 1: Document everything + Google UX Design Certificate + Figma interactive prototyping
  - Priority 2: Typography course + Color theory + Write 2-3 case studies
  - Priority 3: Motion design basics + Design systems deep dive + Informal user testing
- **Long-term target:** Creative Technologist → Design Engineer / UX Engineer → Product Designer
- **Key insight:** Most design skills are already being practiced (🔶) — the gap is documentation, vocabulary, and formal portfolio presentation

### 4. English Writing/Composition Improvement
- Goal: improve professional writing for journalism applications
- After diplomado finishes (June 28): look into composition courses
- Read AP Stylebook, study NYT Graphics/Upshot writing style
- Practice writing narratives for Planeta Mujer visualizations in English
- Consider IELTS Academic or Cambridge C2 for formal assessment

### 5. Reporting Experience (Long-term)
- Turn Planeta Mujer visualizations into reported stories with narrative
- Look into freelance pitching to smaller outlets (The Pudding, ProPublica Local, bilingual publications)
- Connect with data journalism community (IRE/NICAR, OpenNews)
- Bilingual advantage: pitch Spanish/English data stories

### 6. Slack-Jira Agent — Remaining Phases
- Managed by separate Cursor agent on the slack-jira-agent project

### 7. Planeta Mujer — Ongoing
- Phase 5 of Modern Slavery visualization (world map finale)
- Fertility Rate Phase 3 (scroll-driven zoom + horizontal panning)
- og:image preview images for social sharing
- Frontend Masters D3 course — second class started

### 8. Diplomado ✅
- "Creación de Experiencias, Marketing y Ecosistemas Digitales" — COMPLETED (UNAM Faculty of Arts and Design)
- Added to both resumes and referenced in cover letters

## Full Conversation Transcript
The complete conversation history for this chat is at:
`/Users/monicacholico/.cursor/projects/Users-monicacholico-Documents-Personal-Portfolio-Monicacholico-github-io/agent-transcripts/14ea3a02-00b7-4ae6-85f6-099c1c6b8dc0/14ea3a02-00b7-4ae6-85f6-099c1c6b8dc0.jsonl`

Use `Grep` to search for relevant keywords when you need deep context on any decision.
