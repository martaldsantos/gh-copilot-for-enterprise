# Phase 3: Sprint 2 -- Integration and Polish

[Back to Team Sprint Track](../bonus-team-sprint-track.md)

**Duration:** 2 hours
**Focus:** Integration, advanced features, bug fixing, deployment preparation

Sprint 2 builds on the core features from Sprint 1. The priority shifts: integrate the frontend with the real backend, fix bugs that QA found, add advanced features where capacity allows, and get the first deployment working.

## Sprint 2 Planning (first 10 minutes)

Quick planning led by the PO. Do not spend more than 10 minutes on this.

1. **Carry-over** -- Anything unfinished from Sprint 1 gets highest priority.
2. **Bug fixes** -- QA filed bugs. The PO decides which are Sprint 2 fixes and which are deferred to a known-issues list.
3. **New features** -- Authentication, search/filter, and dashboard are candidates. Pick based on what the team can realistically finish in 2 hours.
4. **Assign work** -- Each role picks their Sprint 2 Issues from the board.

## Parallel Tasks by Role

### Product Owner

1. **Run Sprint 2 planning** -- 10-minute session. Assign stories, confirm scope, cut anything that will not land.

2. **Triage Sprint 1 bugs** -- QA filed bugs during Sprint 1. Work with the BA (or on your own) to classify each: fix now, defer, or won't fix.

3. **Continue reviewing PRs** -- Focus on whether completed features match what you asked for. Leave specific, actionable feedback on GitHub.

4. **Draft release notes** -- Start `docs/release-notes.md`. Write it for end users, not developers. Describe the features that will ship and any known limitations.

5. **Prepare the demo outline** -- Write bullet points for what you will show in Phase 4. Build a narrative: a resident discovers CityPulse, reports an issue, browses events, checks the dashboard.

### Backend Developer

1. **Fix Sprint 1 bugs** -- Any bugs filed by QA take priority over new features.

2. **Add search and filtering** (if scoped):
   - `GET /api/reports?category=pothole&status=submitted` -- Filter reports by category and status
   - `GET /api/reports?search=main+street` -- Text search on title and description

3. **Dashboard statistics endpoint** (if scoped):
   - `GET /api/stats` -- Return total reports, reports by category, reports by status, upcoming event count

4. **Add authentication** (if scoped):
   - `POST /api/auth/register` -- Create a user account
   - `POST /api/auth/login` -- Return a JWT or session token
   - Protect write endpoints behind authentication middleware

5. **Open PRs** for each feature. Keep them small and reviewable.

### Frontend Developer

1. **Connect to the real backend API** -- Replace mocked data with actual API calls. Handle loading states, errors, and empty states.

2. **Fix Sprint 1 UI bugs** filed by QA.

3. **Search and filtering UI** (if the backend supports it):
   - Search bar and category filter on the reports page
   - Wire to API query parameters or filter client-side

4. **Dashboard page** (if scoped):
   - Fetch stats from `GET /api/stats`
   - Display with cards and simple charts (a bar chart for categories, a donut or list for status breakdown)
   - Use a lightweight chart library or build minimal visuals with CSS

5. **Responsive design** -- Verify the app works on mobile-width screens. Fix layout issues.

6. **Open PRs** for each feature.

### QA Engineer

1. **Run Sprint 1 tests against the integrated app** -- The frontend and backend are now connected. Run the full suite and note any regressions.

2. **Write tests for new Sprint 2 features:**
   - Search and filtering (search for a report by keyword, filter by category)
   - Dashboard page loads and displays statistics
   - Authentication flow (register, login, submit a report as an authenticated user)

3. **Cross-browser testing** -- Run tests in at least Chromium and Firefox.

4. **Accessibility check** -- Use Playwright's accessibility snapshot or an axe-core integration to catch obvious accessibility problems.

5. **File new bugs** as GitHub Issues. Include screenshots whenever possible.

6. **Generate a test report** -- Share results with the team (HTML report, or paste a summary into a GitHub Issue).

### DevOps Engineer

1. **Deploy to Azure:**
   - Apply the Terraform or Bicep config to create Azure resources
   - Build and push Docker images (to Azure Container Registry or GitHub Container Registry)
   - Deploy backend and frontend to Azure App Service, Container Apps, or AKS
   - Verify the deployed application loads and APIs respond

2. **Configure the production environment:**
   - Set environment variables in Azure (database connection, API URL, CORS origins)
   - Enable HTTPS
   - Configure CORS so the frontend can call the backend

3. **Set up monitoring basics:**
   - Health check endpoint monitoring (Azure Monitor or Application Insights)
   - Ensure container logs are accessible for debugging

4. **Update the CI pipeline** -- Add a deployment step that deploys to a staging or production environment on merge to main.

### Business Analyst

1. **Run acceptance tests on integrated features** -- Walk through each completed story end-to-end and verify it matches the acceptance criteria. Comment on the Issues with results.

2. **Verify dashboard metrics** -- If the dashboard is built, check that the numbers match the actual data. Flag discrepancies.

3. **Help the PO with release notes** -- Review for accuracy and completeness.

4. **Document known issues** -- Create `docs/known-issues.md` listing bugs that the team will not fix before the demo. Include severity and workarounds.

## Sync Point: Integration Check (at ~5:30, 1 hour into Sprint 2)

A brief 5-minute check-in:

- Is the frontend connected to the real backend?
- Are there any deployment blockers?
- What will be ready for the demo vs. what will not?

This is the last chance to cut scope. If the team is behind, drop the dashboard and authentication. Focus on getting a working report submission flow deployed to Azure.

## Verification

**PO:**

- [ ] Sprint 2 bugs triaged -- each classified as fix/defer/won't fix
- [ ] Release notes drafted
- [ ] Demo outline written

**Backend Developer:**

- [ ] Sprint 1 bugs fixed
- [ ] At least one advanced feature shipped (search, stats, or auth)
- [ ] All PRs reviewed and merged

**Frontend Developer:**

- [ ] Frontend connected to the real backend (no mocked data in the critical path)
- [ ] Sprint 1 UI bugs fixed
- [ ] At least one new feature added (dashboard, search, or responsive improvements)

**QA Engineer:**

- [ ] Full E2E suite run against the integrated app
- [ ] At least 1 new test for Sprint 2 features
- [ ] Test report generated and shared

**DevOps Engineer:**

- [ ] Application deployed to Azure and accessible via a public URL
- [ ] CI pipeline includes a deployment step
- [ ] Health check or monitoring baseline in place

**Business Analyst:**

- [ ] All completed features validated against acceptance criteria
- [ ] Known issues documented

---

Previous: [Phase 2: Sprint 1 -- Core Features](phase-2-sprint-1-build.md) | Next: [Phase 4: Ship and Demo](phase-4-deploy-demo.md)
