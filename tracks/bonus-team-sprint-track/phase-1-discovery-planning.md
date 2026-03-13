# Phase 1: Discovery and Sprint Planning

[Back to Team Sprint Track](../bonus-team-sprint-track.md)

**Duration:** 1.5 hours
**Focus:** Product ideation, backlog creation, tooling setup, sprint planning

This phase sets the foundation. The PO drives ideation while everyone else sets up their development environment and tooling. The phase ends with a sprint planning session where the team commits to Sprint 1 scope.

## Parallel Tasks by Role

### Product Owner

**Time: Full 1.5 hours**

1. **Read the stakeholder brief** -- Open `challenges/challenge-9-team-sprint/docs/stakeholder-brief.md` and internalize the requirements. This is your specification from the "client."

2. **Prototype with GitHub Spark** -- Go to [github.com/spark](https://github.com/spark) (requires GitHub Copilot Enterprise license) and use GitHub Spark to create a quick interactive prototype of CityPulse. Describe screens in natural language:
   - A form where residents submit issue reports (title, description, category, location)
   - A page listing all reported issues with colored status badges
   - A page showing upcoming community events
   - A dashboard with basic stats
   Share the Spark URL with the team so developers can reference it as a visual target.

3. **Write the product vision** -- Create `docs/product-vision.md` in the challenge folder. Include: problem statement, target users, key features for this sprint, and what success looks like.

4. **Define epics and user stories** -- Write at least 10 user stories across these epics:
   - **Issue Reporting** -- creating, viewing, and updating reports
   - **Community Events** -- browsing and creating events
   - **Dashboard** -- viewing neighborhood statistics
   - **User Accounts** -- registration and authentication (stretch goal for Sprint 2)

5. **Create GitHub Issues** -- Convert each story into a GitHub Issue. Use the template in `challenges/challenge-9-team-sprint/templates/user-story-issue.md`. For each:
   - Add a descriptive title and body with acceptance criteria
   - Label by epic (`epic:reporting`, `epic:events`, `epic:dashboard`, `epic:accounts`)
   - Label by priority (`priority:must`, `priority:should`, `priority:could`)
   - Add a size estimate label (`size:S`, `size:M`, `size:L`)
   - Assign to the team member whose role matches the work

6. **Set up GitHub Project board** -- Create a project board with columns: Backlog, Sprint 1, In Progress, In Review, Done. Move Sprint 1 stories into the Sprint 1 column.

7. **Sprint planning** -- At the 1-hour mark, walk the team through the backlog. Let each role pick their Sprint 1 stories. Resolve questions about scope or acceptance criteria.

### Backend Developer

**Time: ~1 hour setup + 30 min planning**

1. **Set up the development environment** -- Choose a backend framework (Express.js or FastAPI). Create the project scaffold:
   - Initialize the project (`npm init` or set up a virtualenv)
   - Set up folder structure (routes, models, middleware)
   - Add a health check endpoint (`GET /health`)
   - Verify it runs locally

2. **Write custom instructions** -- Add backend context to `.github/copilot-instructions.md`: framework, API conventions, error handling patterns, database choice.

3. **Create a backend agent** -- Create `.github/agents/api-architect.agent.md` with context about REST design, the CityPulse data model, and coding standards.

4. **Draft the API spec** -- Create `docs/api-spec.md`. List the planned endpoints, request/response shapes, and status codes. Share this with the frontend developer so they can start building against it.

5. **Sprint planning** -- Join the PO's planning session. Review stories, ask questions, commit to Sprint 1 scope.

### Frontend Developer

**Time: ~1 hour setup + 30 min planning**

1. **Set up the frontend project** -- Choose a framework (React + Vite recommended). Scaffold the project:
   - Initialize with `npm create vite@latest` (or equivalent)
   - Set up routing (React Router or similar)
   - Create a basic layout component (header, sidebar, main content area)
   - Add a placeholder home page

2. **Review the PO's GitHub Spark prototype** -- Use it as a visual reference for the UI you will build. Note the page structure and user flows.

3. **Write custom instructions** -- Add frontend context to `.github/copilot-instructions.md`: framework, component patterns, styling approach (Tailwind, CSS modules, etc.).

4. **Create a frontend agent** -- Create `.github/agents/ui-builder.agent.md` with component patterns and styling conventions.

5. **Coordinate with the backend developer** -- Review the draft API spec. Agree on endpoint shapes so you can start building against mocked data if the API is not ready yet.

6. **Sprint planning** -- Join the PO's planning session. Pick your Sprint 1 stories.

### QA Engineer

**Time: ~1 hour setup + 30 min planning**

1. **Set up the test framework** -- Initialize a Playwright project:
   - `npm init playwright@latest`
   - Configure browser targets (Chromium at minimum)
   - Create a base page object class
   - Write a smoke test that loads the frontend home page

2. **Write the test plan** -- Create `docs/test-plan.md`. List the user flows you plan to test, grouped by epic. Include happy paths and key error cases.

3. **Write custom instructions** -- Add QA context to `.github/copilot-instructions.md`: test framework, page object patterns, assertion style.

4. **Create a test agent** -- Create `.github/agents/test-engineer.agent.md` with Playwright patterns and the project's page object conventions.

5. **Define test data requirements** -- Document what seed data the backend should provide for tests (sample reports, sample events, test users). Coordinate with the backend developer.

6. **Sprint planning** -- Join the PO's planning session. Identify which stories you will write tests for in Sprint 1.

### DevOps Engineer

**Time: ~1 hour setup + 30 min planning**

1. **Set up the repository structure** -- Define branching strategy (trunk-based or feature branches). Write a short doc in `docs/branching-strategy.md` with the team's agreement on PR conventions.

2. **Create the backend Dockerfile** -- Write a multi-stage Dockerfile for the backend. Include a dev stage with hot reload and a production stage.

3. **Create docker-compose.yml** -- Set up local development with docker-compose that runs the backend (and later the frontend and database).

4. **Set up GitHub Actions** -- Create a CI workflow (`.github/workflows/ci.yml`) that runs on PRs. Start with a lint step and a placeholder test step.

5. **Write custom instructions** -- Add DevOps context to `.github/copilot-instructions.md`: Docker conventions, CI/CD approach, Azure deployment target.

6. **Create an infra agent** -- Create `.github/agents/infra-engineer.agent.md` with Docker, GitHub Actions, and Azure deployment context.

7. **Sprint planning** -- Join the PO's planning session. Confirm infrastructure timeline.

### Business Analyst (if present)

**Time: ~1 hour supporting PO + 30 min planning**

1. **Help the PO refine acceptance criteria** -- Review each user story and tighten the criteria. Make sure they are testable and specific enough that QA can write tests against them.

2. **Create the data model document** -- Create `docs/data-model.md`. Define the entities (Report, Event, User), their fields, and relationships. Share with backend and frontend developers.

3. **Define dashboard metrics** -- Create `docs/dashboard-metrics.md`. List the KPIs: total open reports, reports by category, reports by status, upcoming event count. Define how each metric is calculated.

4. **Sprint planning** -- Join the PO's planning session. Help prioritize and clarify scope.

## Sync Point: Sprint Planning Meeting (at ~1:00)

At the 1-hour mark, everyone pauses setup and joins a 30-minute planning session led by the PO:

1. PO walks through the backlog and GitHub Project board (10 min)
2. Each role picks their Sprint 1 stories (10 min)
3. Team resolves blockers and dependencies -- for example, frontend needs the API spec, QA needs seed data (5 min)
4. Agree on a mid-sprint standup time (5 min)

After planning, everyone should have clear tasks and an unblocked path into Sprint 1.

## Verification

**PO:**

- [ ] GitHub Spark prototype created and URL shared with team
- [ ] Product vision document written
- [ ] At least 10 GitHub Issues created with labels, priorities, and assignments
- [ ] GitHub Project board set up with Sprint 1 column populated

**Backend Developer:**

- [ ] Backend project scaffolded and running locally
- [ ] Health check endpoint responding
- [ ] API spec document drafted and shared
- [ ] Custom instructions and agent created

**Frontend Developer:**

- [ ] Frontend project scaffolded and rendering in browser
- [ ] Basic layout and routing in place
- [ ] Custom instructions and agent created

**QA Engineer:**

- [ ] Playwright project initialized
- [ ] Smoke test passing
- [ ] Test plan documented

**DevOps Engineer:**

- [ ] Backend Dockerfile working
- [ ] docker-compose running the backend locally
- [ ] GitHub Actions CI workflow runs on PRs

**Business Analyst:**

- [ ] Data model documented
- [ ] Dashboard metrics defined
- [ ] All user story acceptance criteria reviewed and tightened

---

Next: [Phase 2: Sprint 1 -- Core Features](phase-2-sprint-1-build.md)
