# Phase 1: Foundation

[Back to Copilot Extensions Track](../bonus-copilot-extensions-track.md)

**Estimated:** 2-3 hours

## 1. Request Verification and Parsing

- Use `verifyAndParseRequest()` to validate that incoming requests genuinely come from GitHub
- Extract the user's message with `getUserMessage()`
- Extract the user's GitHub identity from the token using the Octokit client

## 2. Intent-Based Routing

- Parse the user's message to determine what they want to do
- Implement a command router that dispatches to handler functions based on intent:
  - `help` -- show available commands
  - `log standup` -- record a standup update
  - `show status` -- query GitHub for project status
  - `generate report` -- create a team summary
- Handle unrecognized commands gracefully with helpful suggestions

## 3. Help Command

- Return a well-formatted markdown response listing all commands
- Include usage examples for each command
- Use `createAckEvent()`, `createTextEvent()`, and `createDoneEvent()`

---

Next: [Phase 2: Core Features](phase-2-core-features.md)
