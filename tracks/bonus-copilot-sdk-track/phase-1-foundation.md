# Phase 1: Foundation

[Back to Copilot SDK Track](../bonus-copilot-sdk-track.md)

**Estimated:** 2-3 hours

## 1. Client Setup and First Message

- Install the SDK: `npm install @github/copilot-sdk tsx`
- Create a `CopilotClient` and verify it can connect to the Copilot CLI backend
- Create a session with `client.createSession({ model: "gpt-4.1" })`
- Send a simple prompt using `session.sendAndWait()` and print the response
- Confirm the full round-trip works: prompt in, response out

## 2. Streaming Responses

- Enable streaming by passing `streaming: true` to `createSession()`
- Subscribe to `assistant.message_delta` events to print response chunks as they arrive
- Subscribe to `session.idle` to detect when the response is complete
- Experiment with `session.on()` to observe other event types the SDK emits
- Build a simple interactive loop that reads user input from stdin and streams each response

## 3. Session Management

- Explore multi-turn conversations: send follow-up messages in the same session
- Verify that the model retains context across turns
- Implement clean shutdown: call `client.stop()` and `process.exit(0)` when the user types "exit"
- Handle errors from the SDK (invalid model, authentication failure) and display clear messages

---

Next: [Phase 2: Core Features](phase-2-core-features.md)
