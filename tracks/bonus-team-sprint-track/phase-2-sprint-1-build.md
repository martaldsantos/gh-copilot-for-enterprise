# Phase 2: Sprint 1 -- Core Features

[Back to Team Sprint Track](../bonus-team-sprint-track.md)

**Duration:** 3 hours
**Focus:** Parallel development of core features -- API, UI, tests, and infrastructure

Everyone works in parallel on their assigned Sprint 1 stories. Use GitHub Issues for questions and PRs for code review. The PO stays active on the board, triaging and reviewing throughout.

## Parallel Tasks by Role

### Product Owner

You are not idle during the build phase. Your job is to keep the team unblocked and the backlog healthy.

1. **Monitor GitHub Issues** -- Developers will post questions in Issue comments. Respond within 10 minutes. If a question blocks someone, drop what you are doing and answer it.

2. **Review Pull Requests** -- When developers open PRs, review them against the acceptance criteria in the linked Issue. Approve or request changes. You are the gatekeeper for "does this match what we asked for?"

3. **Triage incoming bugs** -- QA will file bugs as GitHub Issues. Decide: is it a Sprint 1 blocker that needs fixing now, or can it wait for Sprint 2?

4. **Write Sprint 2 stories** -- While Sprint 1 runs, create additional Issues for Sprint 2 scope:
   - User authentication (login, register, protected routes)
   - Report search and filtering (by category, status, date range)
   - Dashboard page with charts and statistics
   - Report status notifications

5. **Update the project board** -- Move Issues through columns as work progresses. The board should reflect reality at any moment.

6. **Write end-user help content** -- Draft a `docs/user-guide.md` with instructions for how a resident would use CityPulse. This doubles as a test of whether the product makes sense from a user's perspective.

### Backend Developer

Build the core API endpoints. Open a separate PR for each logical feature and link it to the relevant GitHub Issue.

1. **Reports API:**
   - `POST /api/reports` -- Create a new report (title, description, category, location; status defaults to "submitted")
   - `GET /api/reports` -- List all reports, sorted by newest first
   - `GET /api/reports/:id` -- Get a single report by ID
   - `PATCH /api/reports/:id` -- Update report status or details
   - Input validation on all endpoints (reject missing required fields with 400)

2. **Events API:**
   - `POST /api/events` -- Create a new event (title, description, date, location)
   - `GET /api/events` -- List upcoming events, sorted by date
   - `GET /api/events/:id` -- Get a single event by ID

3. **Seed data** -- Create a script or endpoint that populates the database with sample reports and events. QA and the frontend developer both need this.

4. **Unit/integration tests** -- Write tests for each endpoint. Cover happy paths and validation errors.

5. **Open PRs** -- One PR per feature (Reports API, Events API, seed data). Link each to its GitHub Issue. Request review from the PO for acceptance and from DevOps for any infrastructure concerns.

### Frontend Developer

Build the core UI pages. Use mocked data while the API is being built, then swap to real API calls when the backend is ready.

1. **Report submission form:**
   - Form with fields: title (text), description (textarea), category (dropdown), location (text)
   - Client-side validation (required fields, character limits)
   - Submit calls `POST /api/reports` (or logs to console as a placeholder until the API exists)
   - Success and error feedback

2. **Reports list page:**
   - Fetch and display all reports from `GET /api/reports`
   - Show title, category, status, and submission date per report
   - Color-coded status badges (submitted = yellow, in progress = blue, resolved = green)
   - Click a report to view its details

3. **Events list page:**
   - Fetch and display upcoming events from `GET /api/events`
   - Show title, date, location, and description
   - Sort by date

4. **Navigation** -- Working nav between Home, Report Issue, View Reports, and Events pages.

5. **Open PRs** -- One PR per page or feature. Link to the GitHub Issue.

### QA Engineer

Write tests in parallel with development. Start with stubs or mocks if endpoints are not ready yet. Switch to the real app as features land.

1. **Report submission flow:**
   - Test filling in the report form and submitting
   - Test form validation (empty title, missing category)
   - Test that a submitted report appears in the reports list

2. **Events browsing flow:**
   - Test that the events page loads and shows events
   - Test event details display correctly

3. **API tests** (using Playwright's API testing or a separate framework):
   - `POST /api/reports` returns 201 and the created report
   - `GET /api/reports` returns an array
   - Validation errors return 400 with a meaningful message

4. **Exploratory testing and bug reports** -- As features become available, do exploratory testing. File bugs as GitHub Issues using the template in `challenges/challenge-9-team-sprint/templates/bug-report-issue.md`. Include:
   - Steps to reproduce
   - Expected vs. actual behavior
   - Screenshot or error message
   - Labels: `bug` and a priority label

5. **Set up test reporting** -- Configure Playwright's HTML reporter or a custom reporter so results can be shared with the team.

### DevOps Engineer

Build the infrastructure that will take the application from local development to production.

1. **Frontend Dockerfile** -- Write a multi-stage Dockerfile for the frontend (build with Node, serve with nginx or similar).

2. **Full docker-compose** -- Update `docker-compose.yml` to run backend, frontend, and a database together. The frontend should proxy API calls to the backend.

3. **Expand the CI pipeline** -- Update the GitHub Actions workflow:
   - Run backend tests
   - Run frontend build (verify it compiles)
   - Run Playwright E2E tests (can fail for now if the app is not integrated yet)
   - Add linting steps for both services

4. **Start infrastructure as code** -- Begin writing Terraform or Bicep for the Azure deployment:
   - Resource group
   - Azure App Service or Container Apps for backend and frontend
   - Optionally: Azure Database for PostgreSQL (or keep SQLite for simplicity)

5. **Environment configuration** -- Set up `.env` files for local and production. Document which environment variables each service needs in `docs/env-vars.md`.

### Business Analyst

1. **Validate completed features** -- As PRs get merged, test them against the acceptance criteria. Comment on the GitHub Issue with pass/fail notes and any observations.

2. **Review QA's bug reports** -- Help the PO decide priority: is this a blocker, or cosmetic?

3. **Define analytics events** -- Document which user actions should eventually be tracked (report submitted, event viewed, search performed, etc.). Developers will instrument these in Sprint 2 if time allows.

4. **Refine the Sprint 2 backlog** -- Work with the PO to tighten acceptance criteria on Sprint 2 stories based on what you learned in Sprint 1.

## Sync Point: Mid-Sprint Standup (at ~3:00, roughly 1.5 hours into Sprint 1)

Brief 5-minute standup, either in person or asynchronous via a GitHub Issue labeled `standup`. Each person answers:

1. What did I finish since the last check-in?
2. What am I working on now?
3. Am I blocked on anything?

If anyone is blocked, resolve it immediately. If the frontend developer needs the API spec finalized, that takes priority. If QA needs seed data, the backend developer provides it.

## Copilot Tips for This Phase

**Backend -- generate CRUD fast:**

Ask Copilot to scaffold an entire router from your API spec document. Reference the spec file in your prompt for context:

```text
"Read docs/api-spec.md and generate an Express.js router for the Reports endpoints with input validation."
```

**Frontend -- mock data while waiting for the API:**

```typescript
// Generate an array of 5 sample CityPulse reports with realistic civic issues
// Include: id, title, description, category, location, status, createdAt
```

**QA -- generate page objects from the running app:**

```text
"Create a Playwright page object for the Report Submission page with selectors for title input, 
description textarea, category dropdown, location input, and submit button."
```

**DevOps -- generate Dockerfiles with Copilot:**

```text
"Create a multi-stage Dockerfile for a React app built with Vite. 
Build stage uses Node 20, production stage uses nginx:alpine."
```

## Verification

**PO:**

- [ ] All developer questions on Issues answered during the sprint
- [ ] At least 3 PRs reviewed for acceptance criteria compliance
- [ ] Sprint 2 stories written and added to the backlog
- [ ] Project board reflects current status of all work

**Backend Developer:**

- [ ] Reports CRUD API working (testable with curl or a REST client)
- [ ] Events API working
- [ ] Seed data script or endpoint available for the team
- [ ] Backend tests passing
- [ ] PRs opened and linked to their GitHub Issues

**Frontend Developer:**

- [ ] Report form submitting data (to API or console)
- [ ] Reports list page rendering data
- [ ] Events list page rendering data
- [ ] Navigation between pages working
- [ ] PRs opened and linked to their GitHub Issues

**QA Engineer:**

- [ ] At least 3 E2E tests written and passing (or pending API integration)
- [ ] At least 1 bug filed as a GitHub Issue from exploratory testing
- [ ] Test reporting configured

**DevOps Engineer:**

- [ ] docker-compose runs the full stack locally
- [ ] CI pipeline runs on PR and reports pass/fail
- [ ] Infrastructure-as-code started (Terraform or Bicep files created)

**Business Analyst:**

- [ ] At least 3 completed features validated against acceptance criteria
- [ ] Sprint 2 acceptance criteria refined

---

Previous: [Phase 1: Discovery and Sprint Planning](phase-1-discovery-planning.md) | Next: [Phase 3: Sprint 2 -- Integration and Polish](phase-3-sprint-2-integration.md)
