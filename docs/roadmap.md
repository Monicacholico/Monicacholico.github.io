# Career & Projects Roadmap

*Last updated: April 9, 2026*

## Completed

### Portfolio Bug Fix
- Fixed the scroll "dead zone" in the portfolio site (`index.html`) where users had to scroll excessively before projects appeared
- Root cause: `handleScroll` used `currentScroll` (lerped/animated value) for branching instead of `targetScroll` (user intent)
- Fix: Changed branching to use `targetScroll` with a 0.95 threshold buffer for a natural transition feel

### Job Applications

**The Upshot — Data Graphics/Multimedia Editor**
- Resume: `resume/index.html` — "Creative Developer & Visual Storyteller"
- Cover letter: `resume/cover-letter.html` — addressed to Jonathan Ellis
- PDFs: `assets/resume.pdf`, `assets/cover-letter.pdf`
- Status: SUBMITTED

**Investigations — Graphics/Multimedia Editor**
- Cover letter: `resume/cover-letter-investigations.html` — addressed to Gabriel Dance
- PDF: `assets/cover-letter-investigations.pdf`
- Same resume as Upshot
- Status: SUBMITTED

**Messaging Platforms — Senior Software Engineer**
- Engineering resume: `resume/index-engineering.html` — "Front-End Software Engineer"
- Cover letter: `resume/cover-letter-messaging.html` — addressed to Isaac White
- PDFs: `assets/resume-engineering.pdf`, `assets/cover-letter-messaging.pdf`
- Status: READY TO SUBMIT

### Slack-Jira Agent Prototype
- Location: `/Users/monicacholico/Documents/Personal/Portfolio/slack-jira-agent/`
- Working 4-step agentic pipeline: classify, extract, enrich, validate
- Jira API integration built with preview mode (safe) and `--create` flag (with confirmation prompt)
- Uses Anthropic Claude API
- Key files: `src/agent.js`, `src/jira-client.js`, `src/index.js`, `src/prompts.js`

---

## Next Steps

### 1. Slack-Jira Agent — Phase 1: Live Jira Integration
- Ask manager for permission to create test tickets on the board
- Test `--create` mode with a real Slack message
- Verify ticket fields populate correctly (description, acceptance criteria, labels, priority)
- Customize prompts in `src/prompts.js` to match team Jira template (Workbook Code, Timelines, Links, QA sections)

### 2. Slack-Jira Agent — Phase 1.5: Slack Message Link Support (Optional)
- Add Slack API integration to fetch message content from a URL
- Requires a Slack API token (workspace bot token or user token)
- User pastes a Slack link instead of copying message text
- Nice improvement but not required for later phases

### 3. Slack-Jira Agent — Phase 2: Deploy to Server + Choose Entry Point
- Deploy agent as a web server (Google Cloud Run, AWS Lambda, or similar)
- The server is required for BOTH options below — pick one or both:

**Option A: Slack Webhook (recommended for the team)**
- Add webhook endpoint that receives Slack Workflow form submissions
- Agent processes automatically and posts confirmation back to Slack
- Plugs into the Slack form the team already uses — no new interface to learn
- No manual steps — fully automated pipeline

**Option B: Web UI (good for demos and ad-hoc use)**
- Simple HTML page with a text box and "Process" button
- Shows ticket preview with one-click creation
- Useful for interviews, demos, or messages that don't come through Slack
- Can coexist with Option A — same server, two entry points

### 4. React Practice Project — Article Explorer for Feel Like Dancing
- Repo cloned at: `/Users/monicacholico/Documents/Personal/Portfolio/feel-like-dancing/`
- React already configured in Astro (`@astrojs/react` installed)
- Build an Article Explorer component (React island in Astro) that exercises key hooks:
  - Week 1: Article list + search (`useState`, `useMemo`)
  - Week 2: Category filters + sort (`useReducer`, `useCallback`)
  - Week 3: Detail panel + data fetching (`useContext`, `useEffect`, `useRef`)
- Creates a portfolio-worthy project and interview preparation simultaneously

### 5. Planeta Mujer — Ongoing
- Phase 5 of Modern Slavery visualization (world map finale) still pending
- Fertility Rate Phase 3 (scroll-driven zoom + horizontal panning) still pending
- og:image preview images for social sharing
- Continue adding articles and visualizations to strengthen editorial applications

### 6. Cover Letter Decision — Slack-Jira Mention
- Current engineering cover letter mentions "prototyping agentic workflow automation integrating Slack and Jira"
- Once Phase 1 is tested with real tickets, this claim is fully defensible
- If testing doesn't happen before submission, consider softening to "exploring AI-assisted development workflows"
