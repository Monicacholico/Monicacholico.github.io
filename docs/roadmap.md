# Career & Projects Roadmap

*Last updated: April 15, 2026*

## Completed

### Portfolio Bug Fix
- Fixed the scroll "dead zone" in the portfolio site (`index.html`) where users had to scroll excessively before projects appeared
- Root cause: `handleScroll` used `currentScroll` (lerped/animated value) for branching instead of `targetScroll` (user intent)
- Fix: Changed branching to use `targetScroll` with a 0.95 threshold buffer for a natural transition feel

### Job Applications — Editorial Positions

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

### Job Applications — Engineering Positions

All three use the same resume: `resume/index-engineering.html` — "Front-End Software Engineer"
Resume PDF: `assets/resume-engineering.pdf`

**Messaging Platforms — Senior Software Engineer**
- Cover letter: `resume/cover-letter-messaging.html` — addressed to Isaac White
- PDF: `assets/cover-letter-messaging.pdf`
- Status: READY TO SUBMIT

**Programming — Software Engineer**
- Cover letter: `resume/cover-letter-programming.html` — addressed to Douglas Back
- PDF: `assets/cover-letter-programming.pdf`
- Status: READY TO SUBMIT

**Games - Web Platform — Software Engineer**
- Cover letter: `resume/cover-letter-games.html` — addressed to Angela Foell & Jamie Smith
- PDF: `assets/cover-letter-games.pdf`
- Status: READY TO SUBMIT

### Engineering Resume Updates (April 15)
- Reordered Front-End skills: JavaScript ES6, HTML5, CSS3, React, TypeScript (confidence order)
- Removed CSS Modules (not actively used)
- Moved Astro back to Frameworks & Tooling for consistency
- Added Copilot to AI-Assisted Development, removed Agentic Workflows
- Softened Slack-Jira workflow language to "exploring workflow automation"
- Added Modern Journalism (NYU, in progress) to Education
- Added Portfolio section to sidebar with monicacholico.github.io and planeta-mujer.org

### Slack-Jira Agent Prototype
- Location: `/Users/monicacholico/Documents/Personal/Portfolio/slack-jira-agent/`
- Working 4-step agentic pipeline: classify, extract, enrich, validate
- Jira API integration built with preview mode (safe) and `--create` flag (with confirmation prompt)
- Uses Anthropic Claude API ($5 credits purchased)
- Jira API token configured in `.env`
- Key files: `src/agent.js`, `src/jira-client.js`, `src/index.js`, `src/prompts.js`, `src/env.js`
- Tested successfully with demo messages (preview mode)
- **`--create` mode tested and confirmed working — real Jira ticket created on the board**

---

## Next Steps

### 1. Slack-Jira Agent — Phase 1: Prompt Customization (Remaining)
- ~~Get manager permission to create test tickets~~ DONE
- ~~Test `--create` mode with real tickets~~ DONE — ticket created successfully
- Customize prompts in `src/prompts.js` to match team Jira template structure (AC format, Timelines, Links, Events List, QA sections, Labels)
- Active work: separate Cursor agent on the slack-jira-agent project

### 2. Slack-Jira Agent — Phase 1.5: Slack Message Link Support (Optional)
- Add Slack API integration to fetch message content from a URL
- Requires a Slack API token (workspace bot token or user token)
- User pastes a Slack link instead of copying message text

### 3. Slack-Jira Agent — Phase 2: Deploy to Server + Choose Entry Point
- Deploy agent as a web server (Google Cloud Run, AWS Lambda, or similar)
- The server is required for BOTH options below — pick one or both:

**Option A: Slack Webhook (recommended for the team)**
- Add webhook endpoint that receives Slack Workflow form submissions
- Agent processes automatically and posts confirmation back to Slack
- Plugs into the Slack form the team already uses — no new interface to learn

**Option B: Web UI (good for demos and ad-hoc use)**
- Simple HTML page with a text box and "Process" button
- Shows ticket preview with one-click creation
- Can coexist with Option A — same server, two entry points

### 4. React Practice Project — Article Explorer for Feel Like Dancing
- Repo cloned at: `/Users/monicacholico/Documents/Personal/Portfolio/feel-like-dancing/`
- React + TypeScript already configured in Astro
- Build an Article Explorer component (React island in Astro) that exercises key hooks:
  - Week 1: Article list + search (`useState`, `useMemo`)
  - Week 2: Category filters + sort (`useReducer`, `useCallback`)
  - Week 3: Detail panel + data fetching (`useContext`, `useEffect`, `useRef`)
- Priority: prepare for potential React-heavy interviews

### 5. Planeta Mujer — Ongoing
- Phase 5 of Modern Slavery visualization (world map finale) still pending
- Fertility Rate Phase 3 (scroll-driven zoom + horizontal panning) still pending
- og:image preview images for social sharing
- Continue adding articles and visualizations to strengthen editorial applications
