// Response Builders
// Utility functions for building rich Copilot Extension responses.
// Your challenge: create functions that compose SDK events into useful responses.

const {
  createAckEvent,
  createTextEvent,
  createDoneEvent,
  createReferencesEvent,
  createConfirmationEvent,
  createErrorsEvent,
} = require("@copilot-extensions/preview-sdk");

/**
 * Send an error response back to Copilot Chat.
 * @param {object} res - Express response object
 * @param {string} message - Error message to display
 */
function sendError(res, message) {
  res.setHeader("Content-Type", "text/event-stream");
  res.write(createAckEvent());
  res.write(
    createTextEvent(`⚠️ **Error:** ${message}`)
  );
  res.write(createDoneEvent());
  res.end();
}

/**
 * Send a simple text response back to Copilot Chat.
 * @param {object} res - Express response object
 * @param {string} message - Markdown-formatted message
 */
function sendText(res, message) {
  res.setHeader("Content-Type", "text/event-stream");
  res.write(createAckEvent());
  res.write(createTextEvent(message));
  res.write(createDoneEvent());
  res.end();
}

// TODO: Implement sendStandupConfirmation(res, standupData)
// Before saving a standup entry, ask the user to confirm using createConfirmationEvent().
// This teaches participants about the confirmation flow in Copilot Extensions.
//
// Hint: Use createConfirmationEvent({ id, title, message, metadata })

// TODO: Implement sendReferencesWithIssues(res, message, issues)
// Send a text response that includes GitHub Issue references using createReferencesEvent().
// This teaches participants how to create rich, linked responses.
//
// Hint: Use createReferencesEvent([{ id, type: "issue", metadata: { display_name, display_url } }])

module.exports = {
  sendError,
  sendText,
};
