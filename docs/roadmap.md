# Career & Projects Roadmap

*Last updated: May 4, 2026*

## Completed

### Portfolio Bug Fix
- Fixed the scroll "dead zone" in the portfolio site (`index.html`) where users had to scroll excessively before projects appeared
- Root cause: `handleScroll` used `currentScroll` (lerped/animated value) for branching instead of `targetScroll` (user intent)
- Fix: Changed branching to use `targetScroll` with a 0.95 threshold buffer for a natural transition feel

### Slack-Jira Agent Prototype
- Location: `/Users/monicacholico/Documents/Personal/Portfolio/slack-jira-agent/`
- Working 4-step agentic pipeline: classify, extract, enrich, validate
- Jira API integration built with preview mode (safe) and `--create` flag (with confirmation prompt)
- Uses Anthropic Claude API ($5 credits purchased)
- Key files: `src/agent.js`, `src/jira-client.js`, `src/index.js`, `src/prompts.js`, `src/env.js`
- **`--create` mode tested and confirmed working — real Jira ticket created on the board**
- Web UI built for manager demo (separate agent project)
- Active work continues in separate Cursor agent on the slack-jira-agent project

---

## Job Applications — Status (Updated May 4, 2026)

### Editorial Positions

**The Upshot — Data Graphics/Multimedia Editor**
- Resume: `resume/index.html` — "Creative Developer & Visual Storyteller"
- Cover letter: `resume/cover-letter.html` — addressed to Jonathan Ellis
- PDFs: `assets/resume.pdf`, `assets/cover-letter.pdf`
- Status: SUBMITTED — No response

**Investigations — Graphics/Multimedia Editor**
- Cover letter: `resume/cover-letter-investigations.html` — addressed to Gabriel Dance
- PDF: `assets/cover-letter-investigations.pdf`
- Same resume as Upshot
- Status: SUBMITTED — No response

### Engineering Positions

Engineering resume: `resume/index-engineering.html` — "Front-End Software Engineer"
Resume PDF: `assets/resume-engineering.pdf`

**Messaging Platforms — Senior Software Engineer**
- Cover letter: `resume/cover-letter-messaging.html` — addressed to Isaac White
- PDF: `assets/cover-letter-messaging.pdf`
- Status: CLOSED — Contacted by HR, but role required Senior title; internal policy doesn't allow promotion during transfer

**Programming — Software Engineer**
- Cover letter: `resume/cover-letter-programming.html` — addressed to Douglas Back
- PDF: `assets/cover-letter-programming.pdf`
- Status: CLOSED — Hiring manager required in-office; remote is non-negotiable

**Games - Web Platform — Software Engineer**
- Cover letter: `resume/cover-letter-games.html` — addressed to Angela Foell & Jamie Smith
- PDF: `assets/cover-letter-games.pdf`
- Status: CLOSED — Position filled

**News Stories — Software Engineer** ⭐ ACTIVE
- Cover letter: `resume/cover-letter-news-stories.html` — addressed to Griselle Astrid Ong
- PDF: `assets/cover-letter-news-stories.pdf`
- Status: APPLYING — Strong fit, full cover letter prepared
- Recruiter: Nadia Tiwari (already in contact)

**AI Platforms and Products — Software Engineer**
- No cover letter (strategic decision — resume-only application for exposure)
- Hiring managers: David Yee, Nkem Modu
- Recruiter: Holly Adams
- Status: APPLYING — Resume only; gaps in LLM production experience and hybrid requirement
- Goal: Get on the AI team's radar for future roles, not expecting this round

### Key Learnings from Internal Mobility
- All IC transfers are lateral (same title) — no promotions during transfer
- Compensation transfers with you (posted salary ranges are for external candidates)
- Must tell current manager when submitting formal application in Workday
- Portfolio-heavy evaluation for lateral moves in same skillset
- "No downside to submitting" per policy — apply even if you meet only some requirements
- Future strategy: apply only to Software Engineer level (not Senior)

---

## Next Steps

### 1. React Practice Project — Article Explorer for Feel Like Dancing
- Repo cloned at: `/Users/monicacholico/Documents/Personal/Portfolio/feel-like-dancing/`
- React + TypeScript already configured in Astro
- Build an Article Explorer component (React island in Astro) that exercises key hooks:
  - Week 1: Article list + search (`useState`, `useMemo`)
  - Week 2: Category filters + sort (`useReducer`, `useCallback`)
  - Week 3: Detail panel + data fetching (`useContext`, `useEffect`, `useRef`)
- No interview pressure right now — can be done at your own pace as skill-building
- Still valuable for future applications and strengthening React confidence

### 2. Slack-Jira Agent — Remaining Phases
- Customize prompts in `src/prompts.js` to match team Jira template
- Phase 1.5: Slack message link support (optional)
- Phase 2: Deploy to server + Slack webhook or Web UI on a real URL
- Managed by separate Cursor agent on the slack-jira-agent project

### 3. Planeta Mujer — Ongoing
- Phase 5 of Modern Slavery visualization (world map finale) still pending
- Fertility Rate Phase 3 (scroll-driven zoom + horizontal panning) still pending
- og:image preview images for social sharing
- Continue adding articles and visualizations to strengthen future editorial applications
- Frontend Masters D3 course — second class started, needs review time

### 4. Portfolio Improvements
- Keep refining monicacholico.github.io with new projects
- Update resume/cover letters as new positions open up
- The editorial resume + Planeta Mujer visualizations are the strongest assets for future graphics roles
