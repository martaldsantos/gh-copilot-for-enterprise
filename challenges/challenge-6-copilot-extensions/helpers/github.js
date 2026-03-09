// GitHub Integration Helpers
// Utility functions for querying GitHub Issues, PRs, and repository data.
// Your challenge: expand these to power the standup bot's project status features.

const { Octokit } = require("@octokit/rest");

/**
 * Create an authenticated Octokit instance using the user's token.
 * The token comes from the x-github-token header in Copilot Extension requests.
 * @param {string} token - GitHub personal access token from the Copilot platform
 * @returns {Octokit}
 */
function createGitHubClient(token) {
  return new Octokit({ auth: token });
}

/**
 * Get the authenticated user's profile.
 * @param {Octokit} octokit
 * @returns {Promise<object>}
 */
async function getCurrentUser(octokit) {
  const { data } = await octokit.users.getAuthenticated();
  return data;
}

// TODO: Implement getOpenIssues(octokit, owner, repo)
// Fetch open issues assigned to the current user in a given repository.
// Hint: Use octokit.issues.listForRepo({ owner, repo, assignee, state: "open" })

// TODO: Implement getOpenPullRequests(octokit, owner, repo)
// Fetch open PRs authored by the current user.
// Hint: Use octokit.pulls.list({ owner, repo, state: "open" })

// TODO: Implement getRecentActivity(octokit, username)
// Fetch the user's recent GitHub events (commits, PR reviews, issues).
// Hint: Use octokit.activity.listEventsForAuthenticatedUser({ username })

// TODO: Implement getRepoStats(octokit, owner, repo)
// Aggregate open issues, PRs, and recent commits into a summary object.
// This powers the "project status" command.

module.exports = {
  createGitHubClient,
  getCurrentUser,
};
