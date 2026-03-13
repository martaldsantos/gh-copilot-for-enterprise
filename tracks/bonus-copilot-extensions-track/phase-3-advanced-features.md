# Phase 3: Advanced Features

[Back to Copilot Extensions Track](../bonus-copilot-extensions-track.md)

**Estimated:** 2-3 hours

## 7. AI-Powered Blocker Recommendations

- When a user reports blockers, use `prompt()` to analyze them
- Cross-reference with the user's open issues and PRs from GitHub
- Generate actionable suggestions (e.g., "Issue #42 might be related -- consider commenting there")
- Include issue references using `createReferencesEvent()`

## 8. Function Calling

- Define tool functions (e.g., `get_open_issues`, `search_issues`, `get_pr_status`) using the `tools` parameter in `prompt()`
- Handle function call responses using `getFunctionCalls()`
- Execute the requested function and feed results back to the LLM for a final answer
- This enables the LLM to decide *when* to query GitHub rather than always doing it

## 9. Error Handling and Edge Cases

- Use `createErrorsEvent()` for structured error reporting
- Handle rate limiting, authentication failures, missing repos gracefully
- Add request timeout handling
- Implement logging for debugging

---

Previous: [Phase 2: Core Features](phase-2-core-features.md) | Next: [Phase 4: Production-Ready](phase-4-production.md)
