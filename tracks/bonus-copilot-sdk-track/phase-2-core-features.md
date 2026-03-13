# Phase 2: Core Features

[Back to Copilot SDK Track](../bonus-copilot-sdk-track.md)

**Estimated:** 3-4 hours

## 4. Custom Tool Definitions

- Define a custom tool that the model can call -- start with something simple like `get_current_time`
- Register the tool when creating the session using the SDK's tool configuration
- Handle the tool invocation: when the model calls your tool, execute it and return the result
- Verify the round-trip: prompt the model with a question that requires calling your tool

## 5. GitHub Integration via Custom Tools

- Create a `get_open_issues` tool that uses Octokit to fetch open issues for a given repository
- Create a `get_pull_requests` tool that fetches open PRs with status and review info
- Create a `get_user_activity` tool that fetches recent commits and reviews for a user
- Register all tools with the session so the model can decide when to call them
- Test with natural language prompts like "What issues are open in this repo?" and verify the model calls the right tool

## 6. Multi-Turn Project Conversations

- Build a conversational flow where users can ask follow-up questions about their project
- The model should use the GitHub tools as needed without explicit commands
- Example flow: "Show me open issues" -> "Which ones are blockers?" -> "Draft a comment for issue #42"
- Maintain session context so each turn builds on previous answers

---

Previous: [Phase 1: Foundation](phase-1-foundation.md) | Next: [Phase 3: Advanced Features](phase-3-advanced-features.md)
