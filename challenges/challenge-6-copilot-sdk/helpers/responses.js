// GitHub Tools
// Utility functions for fetching data from the GitHub API.
// Your challenge: implement these tools and register them with the Copilot SDK session.

import { Octokit } from "@octokit/rest";

/**
 * Create an authenticated Octokit client.
 * Uses GITHUB_TOKEN from the environment.
 */
export function createOctokit(): Octokit {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  return new Octokit({ auth: token });
}

// TODO: Implement getOpenIssues(owner, repo)
// Fetch open issues for a repository using Octokit.
// Return a simplified array: [{ number, title, labels, assignee, url }]
//
// Hint: Use octokit.rest.issues.listForRepo({ owner, repo, state: "open" })

// TODO: Implement getOpenPullRequests(owner, repo)
// Fetch open PRs for a repository using Octokit.
// Return a simplified array: [{ number, title, author, reviewStatus, url }]
//
// Hint: Use octokit.rest.pulls.list({ owner, repo, state: "open" })

// TODO: Implement getUserActivity(owner, repo, username)
// Fetch recent commits and review activity for a specific user.
// Return a summary: { recentCommits: number, pendingReviews: number }
