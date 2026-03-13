# Phase 4: Ship and Demo

[Back to Team Sprint Track](../bonus-team-sprint-track.md)

**Duration:** 1.5 hours
**Focus:** Production deployment, final testing, demo, retrospective

The final stretch. The team polishes the application, runs final tests on the production environment, and delivers a demo. The PO leads the demo and the team runs a brief retrospective afterward.

## Parallel Tasks by Role

### Product Owner

1. **Final acceptance** -- Walk through the deployed application. Verify each story against its acceptance criteria. Mark completed Issues as "Done" on the project board.

2. **Finalize release notes** -- Update `docs/release-notes.md` with the final feature list, known issues, and any scope changes from the original plan.

3. **Prepare and rehearse the demo** -- Practice the demo flow once before presenting:
   - Submit a new issue report
   - View it in the reports list
   - Browse community events
   - Show the dashboard (if built)
   - Show the deployed URL

4. **Lead the demo** (last 20-30 minutes) -- Walk through the application live. Each team member can present their specific contribution.

5. **Run the retrospective** (last 10 minutes) -- Three questions for the team:
   - What went well?
   - What would we change next time?
   - Where did GitHub Copilot help most, and where did it fall short?

### Backend Developer

1. **Fix critical bugs** -- If QA found any showstoppers during final testing, fix them now. Non-critical bugs go to the known issues list.

2. **Performance check** -- Run a quick manual test or review response times for the main endpoints. Optimize anything noticeably slow.

3. **Help with deployment** -- If the DevOps engineer hit any deployment issues, pair on resolving them.

4. **Demo contribution** -- Be ready to show the API layer: endpoint design, test results, specific Copilot prompts that worked well.

### Frontend Developer

1. **Fix critical UI bugs** -- Address any issues from QA's final pass.

2. **Visual polish** -- Spacing, color consistency, loading states, empty states. Small details that make the demo look professional.

3. **Demo contribution** -- Walk through the UI: component structure, responsive behavior, how Copilot helped with component generation and styling.

### QA Engineer

1. **Final regression run** -- Run the full E2E test suite against the production deployment.

2. **Smoke test on production** -- Manually verify the critical path: submit a report, view the reports list, browse events. Confirm the deployed version works like local.

3. **Generate the final test report** -- Total tests, pass rate, and a coverage summary. Have this ready for the demo.

4. **Demo contribution** -- Show the test suite, test results, and any interesting bugs you caught during the day.

### DevOps Engineer

1. **Verify the production deployment** -- Confirm the live URL is working, HTTPS is active, and APIs respond correctly.

2. **Document the deployment** -- Write `docs/deployment.md`: how to deploy, required environment variables, how to rollback if something breaks.

3. **Verify monitoring** -- Confirm health checks are green. Show that you can access container logs.

4. **Demo contribution** -- Show the infrastructure: CI/CD pipeline, Azure resources, the deployment process, a green build in GitHub Actions.

### Business Analyst

1. **Final feature walkthrough** -- Go through the deployed app one more time. Note anything that deviates from the original acceptance criteria.

2. **Finalize known issues** -- Update `docs/known-issues.md` with any remaining bugs or gaps.

3. **Retrospective notes** -- Help the PO capture feedback. Create `docs/retrospective.md` if the team wants a written record.

4. **Demo contribution** -- Present the acceptance testing results and how the delivered product compares to the original stakeholder brief.

## Demo Format (last 20-30 minutes)

The PO leads. Suggested structure:

1. **Problem statement** (2 min) -- What is CityPulse and why does it matter? Briefly reference the stakeholder brief.
2. **Live walkthrough** (8-10 min) -- Use the deployed application:
   - Submit a new issue report (fill in the form, show it appear in the list)
   - Browse community events
   - Show the dashboard (if built)
   - Show the public URL
3. **Architecture overview** (5 min) -- Backend developer describes the API design. Frontend developer walks through the component structure.
4. **Quality and infrastructure** (3 min) -- QA shows test results. DevOps shows the CI/CD pipeline and Azure deployment.
5. **Copilot retrospective** (3 min) -- Each person shares one moment where Copilot made a significant difference and one where they had to correct or override it.

## Retrospective (last 10 minutes)

After the demo, the team discusses:

1. **What went well?** -- What worked about the parallel sprint structure? Which Copilot features were most useful?
2. **What would we change?** -- Where did the team get stuck? Were there communication gaps? Was the scope right?
3. **What surprised us?** -- Any unexpected wins or challenges?

Capture notes in `docs/retrospective.md` or as a GitHub Issue labeled `retrospective`.

## Verification

This is the final phase. The team is done when:

- [ ] Application is deployed and accessible via a public URL (or localhost if Azure deployment was cut for time)
- [ ] At least the core flow works end-to-end: submit a report, view reports, browse events
- [ ] Final E2E test suite has been run (results available)
- [ ] Release notes are written
- [ ] Demo has been delivered
- [ ] Retrospective has been discussed

There is no next phase. The sprint is over.

---

Previous: [Phase 3: Sprint 2 -- Integration and Polish](phase-3-sprint-2-integration.md)
