# Phase 2: Core Features

[Back to Copilot Extensions Track](../bonus-copilot-extensions-track.md)

**Estimated:** 3-4 hours

## 4. Standup Logging with Confirmations

- Parse natural language standup updates (e.g., "Yesterday I fixed the auth bug, today I'm working on the dashboard, blocked by the API rate limit issue")
- Use the `prompt()` function from the SDK to send the raw message to the LLM and have it extract structured fields: `yesterday`, `today`, `blockers`
- Before saving, use `createConfirmationEvent()` to ask the user to confirm the parsed standup
- Handle the confirmation response via `getUserConfirmation()`
- Store confirmed entries in the `StandupStore`

## 5. Project Status from GitHub

- Use the user's token (`x-github-token` header) to authenticate Octokit
- Fetch open issues assigned to the user
- Fetch open pull requests authored by the user
- Fetch recent activity (commits, reviews)
- Format into a clear markdown summary
- Include GitHub references using `createReferencesEvent()` so issues/PRs become clickable links in the chat

## 6. Report Generation

- Compile all standup entries from today into a team summary
- Use the `prompt()` function to ask the LLM to generate a human-readable narrative from the raw entries
- Include metrics: who submitted, who hasn't, common blockers
- Format as a professional standup report in markdown

---

Previous: [Phase 1: Foundation](phase-1-foundation.md) | Next: [Phase 3: Advanced Features](phase-3-advanced-features.md)
