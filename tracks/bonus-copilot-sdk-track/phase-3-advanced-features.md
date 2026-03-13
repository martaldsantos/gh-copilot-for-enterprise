# Phase 3: Advanced Features

[Back to Copilot SDK Track](../bonus-copilot-sdk-track.md)

**Estimated:** 2-3 hours

## 7. MCP Server Integration

- Configure the session to connect to one or more MCP servers
- Use the GitHub MCP server to give the model direct access to repository data
- Combine MCP-provided tools with your own custom tools in a single session
- Test that the model can use both tool sources seamlessly in a conversation

## 8. Custom Agent Behavior

- Define a custom agent with a system prompt that constrains the model's behavior (e.g., "You are a project health reviewer. Only answer questions about issues, PRs, and code quality.")
- Configure which tools the agent has access to
- Experiment with disabling default tools (file system, shell) so the agent stays focused on its domain
- Compare how different model choices affect agent behavior

## 9. Error Handling and Edge Cases

- Handle SDK connection failures (Copilot CLI not running, auth expired)
- Implement retry logic for transient errors in tool execution
- Handle tool timeouts and return useful error messages to the model
- Add structured logging so you can debug tool calls and model decisions
- Test edge cases: empty responses, very long prompts, rapid successive messages

---

Previous: [Phase 2: Core Features](phase-2-core-features.md) | Next: [Phase 4: Production-Ready](phase-4-production.md)
