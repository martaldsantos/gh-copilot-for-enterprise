// Team Standup & Project Tracker - Copilot Extension
// GitHub Copilot Hackathon - Bonus Challenge 6
//
// This extension allows team members to use @standup-bot in Copilot Chat to:
// - Log daily standup updates
// - Query project status from GitHub Issues/PRs
// - Generate standup reports and team summaries
// - Get AI-powered recommendations for blockers

const express = require("express");
const {
  verifyAndParseRequest,
  createAckEvent,
  createTextEvent,
  createDoneEvent,
} = require("@copilot-extensions/preview-sdk");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Parse raw body for signature verification
app.post("/", express.raw({ type: "*/*" }), async (req, res) => {
  const signature = req.headers["github-public-key-signature"] || "";
  const keyId = req.headers["github-public-key-identifier"] || "";
  const tokenForUser = req.headers["x-github-token"] || "";
  const body = req.body.toString();

  // TODO: Verify the request using verifyAndParseRequest()
  // The SDK handles cryptographic verification of incoming requests
  // so you know they genuinely came from GitHub Copilot.
  //
  // Hint: Use verifyAndParseRequest(body, signature, keyId, { token: tokenForUser })

  // TODO: Parse the user's message and determine intent
  // Use getUserMessage() from the SDK to extract the user's message.
  // Implement intent detection to route to the correct handler:
  //   - "log standup" / "standup update" → log a standup entry
  //   - "show status" / "project status" → query GitHub Issues/PRs
  //   - "generate report" → create a standup summary report
  //   - "help" → show available commands

  // Placeholder response - replace with your implementation
  res.setHeader("Content-Type", "text/event-stream");
  res.write(createAckEvent());
  res.write(
    createTextEvent(
      "👋 Hello! I'm the Standup Bot extension.\n\n" +
        "**I'm not fully implemented yet!** Your challenge is to build me out.\n\n" +
        "Here's what I should be able to do:\n" +
        "- 📝 Log standup updates\n" +
        "- 📊 Query project status from GitHub\n" +
        "- 📋 Generate team reports\n" +
        "- 💡 Provide AI-powered blocker recommendations\n"
    )
  );
  res.write(createDoneEvent());
  res.end();
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Standup Bot Copilot Extension is running" });
});

app.listen(PORT, () => {
  console.log(`🤖 Standup Bot Copilot Extension running on port ${PORT}`);
  console.log(`📡 Webhook endpoint: http://localhost:${PORT}/`);
  console.log(
    `🔧 Debug with: npx @copilot-extensions/gh-debug-cli@latest http://localhost:${PORT}`
  );
});

module.exports = app;
