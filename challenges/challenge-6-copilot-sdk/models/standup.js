// Tool Definitions
// Define the custom tools that the Copilot SDK session can use.
// Your challenge: add tool definitions here and register them with the session.

/**
 * Tool definition for fetching open issues.
 * Pass this to the session's tool configuration.
 */
export const getOpenIssuesTool = {
  name: "get_open_issues",
  description: "Fetch open issues for a GitHub repository",
  parameters: {
    type: "object" as const,
    properties: {
      owner: { type: "string" as const, description: "Repository owner (GitHub username or org)" },
      repo: { type: "string" as const, description: "Repository name" },
    },
    required: ["owner", "repo"],
  },
};

// TODO: Define getOpenPullRequestsTool
// Similar structure to getOpenIssuesTool, but for pull requests.

// TODO: Define getUserActivityTool
// Accepts owner, repo, and username parameters.
// Returns recent commit and review activity for a specific user.
