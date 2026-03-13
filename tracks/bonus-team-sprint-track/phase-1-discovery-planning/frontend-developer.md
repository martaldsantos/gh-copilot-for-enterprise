# Phase 1: Frontend Developer Tasks

[Back to Phase 1 Overview](../phase-1-discovery-planning.md) | [Back to Team Sprint Track](../../bonus-team-sprint-track.md)

**Time: ~1 hour setup + 30 min planning**

## Tasks

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

## Verification

- [ ] Frontend project scaffolded and rendering in browser
- [ ] Basic layout and routing in place
- [ ] Custom instructions and agent created

---

Next: [Phase 2 -- Frontend Developer Tasks](../phase-2-sprint-1-build/frontend-developer.md)
