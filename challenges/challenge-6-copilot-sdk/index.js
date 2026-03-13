// Project Health Agent - Copilot SDK Application
// GitHub Copilot Hackathon - Bonus Challenge 6
//
// This application uses the GitHub Copilot SDK to build an interactive agent that:
// - Answers questions about a project's GitHub Issues and PRs
// - Provides project health summaries
// - Suggests actions based on repository state
// - Uses custom tools to fetch live data from GitHub

import { CopilotClient } from "@github/copilot-sdk";
import * as readline from "readline";

const client = new CopilotClient();

const session = await client.createSession({
  model: "gpt-4.1",
  streaming: true,
});

// TODO: Define custom tools for the session
// The SDK lets you register tools that the model can call.
// Start with a simple tool, then add GitHub integration tools.
//
// Example tool definition:
// {
//   name: "get_open_issues",
//   description: "Fetch open issues for a GitHub repository",
//   parameters: {
//     type: "object",
//     properties: {
//       owner: { type: "string", description: "Repository owner" },
//       repo: { type: "string", description: "Repository name" },
//     },
//     required: ["owner", "repo"],
//   },
// }

// Stream response chunks to stdout as they arrive
session.on("assistant.message_delta", (event) => {
  process.stdout.write(event.data.deltaContent);
});
session.on("session.idle", () => {
  console.log(); // newline after response
});

// Interactive prompt loop
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Project Health Agent (Copilot SDK)");
console.log("Type a question about your project, or 'exit' to quit.\n");

function ask() {
  rl.question("> ", async (input) => {
    const trimmed = input.trim();
    if (trimmed.toLowerCase() === "exit") {
      await client.stop();
      rl.close();
      process.exit(0);
    }
    if (!trimmed) {
      ask();
      return;
    }
    await session.sendAndWait({ prompt: trimmed });
    ask();
  });
}

ask();
