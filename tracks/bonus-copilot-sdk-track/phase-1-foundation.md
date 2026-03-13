# Phase 1: Foundation

[Back to Copilot SDK Track](../bonus-copilot-sdk-track.md)

**Estimated:** 2-3 hours

In this phase you set up the SDK, get a working streaming connection, and build the first piece of domain logic: accepting a repository and reference point, then confirming the release scope with the user before doing any work.

## Tasks

1. **Client setup and first message**
    - Install the SDK: `npm install @github/copilot-sdk tsx`
    - Create a `CopilotClient` and verify it can connect to the Copilot CLI backend
    - Create a session with `client.createSession({ model: "gpt-4.1" })`
    - Send a simple prompt using `session.sendAndWait()` and print the response
    - Confirm the full round-trip works: prompt in, response out

2. **Streaming responses**
    - Enable streaming by passing `streaming: true` to `createSession()`
    - Subscribe to `assistant.message_delta` events to print response chunks as they arrive
    - Subscribe to `session.idle` to detect when the response is complete
    - Experiment with `session.on()` to observe other event types the SDK emits
    - Build an interactive loop that reads user input from stdin and streams each response

3. **Release scope confirmation**
    - Accept CLI arguments for the target repository (`--repo owner/name`) and a "since" reference (`--since v2.3.0`, a date, or a commit SHA)
    - On startup, have the agent confirm the scope with the user: "I'll analyze changes between v2.3.0 and HEAD for contoso/backend-api. Ready?"
    - Handle multi-turn follow-up so the user can adjust ("Actually, use v2.2.0 as the base") before the agent proceeds
    - Implement clean shutdown: call `client.stop()` and `process.exit(0)` when the user types "exit"
    - Handle errors from the SDK (invalid model, authentication failure) and display clear messages

## Verification

- Running `npx tsx index.ts --repo owner/name --since v1.0.0` starts the agent and streams a scope confirmation message
- The agent responds to follow-up messages in the same session, retaining context across turns
- Typing "exit" shuts down cleanly without errors

---

Next: [Phase 2: Core Features](phase-2-core-features.md)
