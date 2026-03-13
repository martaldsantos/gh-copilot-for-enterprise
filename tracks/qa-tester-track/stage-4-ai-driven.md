# Stage 4: AI-Driven Testing and Hybrid Approach

[Back to QA Tester Track](../qa-tester-track.md)

**Difficulty:** ⭐⭐⭐ | **Time:** 60-90 min

Combine AI-driven exploration with traditional test automation.

## Tasks

1. **Configure Playwright MCP**: Set up the Playwright MCP server following the guide in `docs/playwright-mcp-guide.md`.
2. **MCP-generated test**: Ask Copilot with MCP to autonomously navigate the checkout flow, observe the application, and generate a Playwright test script from what it observes.
3. **Comparison document**: Run both the MCP-generated test and an equivalent manually-written test. Write a short document comparing: reliability (which is more stable?), coverage (which catches more?), maintainability (which is easier to update?).
4. **Hybrid API+UI test**: Write a test that combines API calls with UI verification in the same spec. Example: add item to basket via UI, verify basket state via direct API call, remove item via API, verify UI updates.
5. **Data consistency test**: Create a test that adds an item via UI, verifies the backend state via API, removes via API, and checks that the UI reflects the change.

## Verification

- MCP-generated test runs and passes
- Comparison document exists with observations on reliability, coverage, and maintainability
- Hybrid test exercises both API and UI layers in the same spec
- Data consistency test verifies round-trip between UI and API

---

Previous: [Stage 3: Cross-Browser, Mobile, and Resilience](stage-3-cross-browser.md) | Next: [Stage 5: Quality Gates, Reporting, and CI](stage-5-quality-gates.md)
