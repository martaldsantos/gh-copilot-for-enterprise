# Copilot Agents & Chat Modes Reference

GitHub Copilot in VS Code offers powerful **agentic capabilities** that go beyond simple code suggestions. Learn how to use different agents, customize workflows, and leverage tools to accelerate development.

## Understanding Copilot Agents

### What Are Agents?

Agents are specialized AI personas that determine how Copilot behaves during a chat session. Each agent has different capabilities, tools access, and interaction patterns.

### Built-in Agents

VS Code provides four built-in agents:

| Agent | Description | Best For |
|-------|-------------|----------|
| **Agent** | Full autonomous mode - can edit files, run terminal commands, and iterate on its work | Multi-file implementations, complex tasks |
| **Plan** | Read-only mode for generating implementation plans | Architecture decisions, task planning |
| **Ask** | Q&A mode for questions and explanations | Learning, understanding code, research |
| **Edit** | Focused file editing with inline changes | Quick edits to specific files |

### Switching Between Agents

1. Open the Chat view (`Ctrl+Alt+I` / `Cmd+Shift+I`)
2. Click the agent picker dropdown
3. Select your desired agent

---

## Agent Mode - The Agentic Experience

**Agent mode** is Copilot's most powerful capability. It can:

- Autonomously iterate on code
- Recognize and fix its own errors
- Execute terminal commands
- Make changes across multiple files
- Infer additional tasks needed to complete your request
- Self-heal from runtime errors

### When to Use Agent Mode

Use Agent mode when you need to:

- Implement features spanning multiple files
- Set up new projects or components
- Debug issues that require investigation
- Refactor code across your codebase
- Perform complex multi-step tasks

### Example: Building a Feature with Agent Mode

```text
Create a user authentication system with:
- Login and registration endpoints
- JWT token generation and validation
- Password hashing with bcrypt
- Input validation
- Unit tests for all components
```

Agent mode will:

1. Create necessary files (routes, models, middleware)
2. Install required dependencies
3. Implement the code
4. Run tests to verify
5. Fix any issues it encounters

---

## Custom Agents

Create specialized agents for specific workflows by defining `.agent.md` files.

### Creating a Custom Agent

1. Run `Chat: New Custom Agent` from Command Palette
2. Choose location (Workspace or User profile)
3. Define the agent in the Markdown file

### Custom Agent Structure

Custom agents are defined in `.agent.md` files with a YAML frontmatter section.

**Key elements to include:**

- `name` - A clear, descriptive name
- `description` - What the agent specializes in
- `tools` - List of tools the agent can use
- `model` - (Optional) Preferred AI model
- `handoffs` - (Optional) Transitions to other agents

The body of the file contains instructions for how the agent should behave.

> **Looking for examples?** Check out the [github/awesome-copilot](https://github.com/github/awesome-copilot) repository for custom agent templates and real-world examples.

### Example Custom Agents

**Types of agents you might create:**

- **Security Reviewer** - Analyzes code for security vulnerabilities
- **API Designer** - Designs REST API endpoints following best practices
- **Test Generator** - Creates comprehensive test suites
- **Documentation Writer** - Generates and maintains documentation
- **Code Reviewer** - Reviews code for quality and patterns

> **Looking for examples?** Check out the [github/awesome-copilot](https://github.com/github/awesome-copilot) repository for custom agent templates.

### Handoffs Between Agents

Handoffs create guided workflows that transition between agents. Define them in the frontmatter to create multi-step processes.

---

## Prompt Files (Reusable Prompts)

Create reusable prompts for common tasks using `.prompt.md` files.

### Creating a Prompt File

1. Enable `chat.promptFiles` setting
2. Run `Chat: New Prompt File` from Command Palette
3. Store in `.github/prompts/` or user profile

### Prompt File Structure

Prompt files use YAML frontmatter to define metadata and the body contains the prompt template.

**Key elements to include:**

- `name` - Name used to invoke the prompt (e.g., `/create-component`)
- `description` - What the prompt does
- `tools` - (Optional) Tools to use
- `agent` - (Optional) Agent to run with

**Dynamic inputs:** Use `${input:variableName}` for user-provided values.

**File references:** Use `${file:path/to/file.ts}` to reference files.

> **Looking for examples?** Check out the [github/awesome-copilot](https://github.com/github/awesome-copilot) repository for prompt file templates and ideas.

### Using Prompt Files

Type `/` in chat followed by the prompt name:

```text
/create-component
```

---

## Tools in Chat

Tools extend Copilot's capabilities to interact with external systems and perform specialized tasks.

### Built-in Tools

| Tool | Description | Usage |
|------|-------------|-------|
| `#codebase` | Search the entire codebase | `#codebase how is auth implemented?` |
| `#file` | Reference specific files | `#file:src/auth.ts explain this` |
| `#problems` | Access editor problems/errors | `Fix the issues in #problems` |
| `#terminalSelection` | Reference terminal output | `Explain #terminalSelection` |
| `#fetch` | Fetch web content | `Summarize #fetch https://example.com` |
| `#githubRepo` | Search GitHub repositories | `#githubRepo vercel/next.js routing` |
| `#usages` | Find code usages | Show usages of this function |
| `#changes` | Access git changes | Review #changes for security issues |

### Using Tools in Prompts

Reference tools explicitly with `#`:

```text
Using #codebase, find all API endpoints and create 
comprehensive tests following the patterns in #file:tests/api.test.ts
```

### Tool Picker

In Agent mode, click the **Configure Tools** button to:

- Enable/disable specific tools
- View available MCP tools
- Create tool sets for common workflows

---

## MCP (Model Context Protocol) Integration

Connect Copilot to external services and data sources.

### Installing MCP Servers

**From VS Code Extensions view:**

1. Enable `chat.mcp.gallery.enabled` setting
2. Open Extensions view (`Ctrl+Shift+X`)
3. Search `@mcp` to browse available servers
4. Click Install

**From Configuration:**
Add to `.vscode/mcp.json`:

```json
{
  "servers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "${input:github-token}"
      }
    }
  }
}
```

### Popular MCP Servers

| Server | Purpose |
|--------|---------|
| **Playwright** | Browser automation for testing |
| **GitHub** | GitHub API access (issues, PRs, repos) |
| **Filesystem** | Enhanced file operations |
| **Database** | Database queries |
| **Fetch** | HTTP requests |

### Using MCP Tools

Once configured, MCP tools appear in the tool picker and can be invoked:

```text
List my open GitHub issues and create a task list
```

---

## Context Management with # Mentions

Use `#` to add context to your prompts:

### File Context

```text
#file:src/models/user.ts - Add validation to this model
```

### Selection Context

```text
#selection - Explain what this selected code does
```

### Workspace Context

```text
#codebase - Find all usages of the UserService class
```

### Terminal Context

```text
#terminalSelection - Debug this error output
```

---

## Slash Commands (Quick Actions)

While agents handle complex tasks, slash commands provide quick actions:

| Command | Purpose |
|---------|---------|
| `/explain` | Explain selected code |
| `/fix` | Fix errors in selection |
| `/tests` | Generate tests |
| `/new` | Create new files/projects |
| `/clear` | Clear chat history |

### Using Slash Commands with Agent

Combine commands with agent capabilities:

```text
/tests for the authentication module - include edge cases 
and mock external dependencies
```

---

## Multi-File Editing (Copilot Edits)

Agent mode excels at multi-file operations:

### Example: Refactoring Across Files

```text
Refactor the UserService to use dependency injection:
- Update the service class
- Create an interface
- Update all consumers
- Update tests
```

### Reviewing Changes

1. Changes appear inline in the editor
2. Accept or reject each change
3. Use Undo in Chat to revert to previous state
4. Run tests to verify changes

---

## Iterative Workflows

### Conversational Development

Have an ongoing conversation with Copilot:

```text
You: Create a REST API for tasks
Agent: [Creates initial implementation]

You: Add input validation
Agent: [Adds validation logic]

You: Now add authentication middleware
Agent: [Implements auth middleware]

You: Run the tests
Agent: [Executes tests, fixes any failures]
```

### Handoff Workflows

Use handoffs for structured workflows:

1. **Plan** → Generate implementation plan
2. **Agent** → Implement the plan
3. **Security Review** → Check for vulnerabilities
4. **Agent** → Address security issues

---

## Best Practices

### 1. **Choose the Right Agent**

- Complex implementations → **Agent**
- Planning/architecture → **Plan**
- Quick questions → **Ask**
- Focused edits → **Edit**

### 2. **Provide Context**

- Use `#file` to reference relevant code
- Use `#codebase` for project-wide understanding
- Include examples of desired patterns

### 3. **Review Changes Carefully**

- Agent mode makes real changes
- Review each file modification
- Run tests before committing

### 4. **Iterate and Refine**

- Don't expect perfection on first try
- Provide feedback to improve results
- Use follow-up prompts to refine

### 5. **Use Tool Approvals Wisely**

- Review tool parameters before approving
- Be cautious with file modifications
- Understand what terminal commands do

---

## Challenge-Specific Examples

### Challenge 1: Web API

```text
Create a complete task management API with:
- CRUD endpoints for tasks
- User authentication with JWT
- Input validation and error handling
- Unit tests with >80% coverage
- OpenAPI documentation
```

### Challenge 2: ML/AI

```text
Analyze customer_churn.csv using Agent mode:
- Load and explore the data
- Create visualizations
- Engineer features
- Train and compare models
- Generate a summary report
```

### Challenge 3: DevOps

```text
Set up Azure infrastructure with Terraform:
- VNet with public/private subnets
- Container registry
- Kubernetes cluster
- Proper security groups
```

### Challenge 4: Frontend

```text
Build a task dashboard with React:
- Dashboard component with statistics
- Task list with filtering and sorting
- Dark/light theme toggle
- Comprehensive component tests
```

### Challenge 5: QA

```text
Using the Playwright MCP server, navigate to the 
application and generate E2E tests for the main user flows.
```

---

## Quick Reference

```text
Agent    - Full autonomous mode, multi-file edits
Plan     - Read-only planning mode
❓ Ask        - Q&A and explanations
✏️ Edit       - Focused file editing
📄 .prompt.md - Reusable prompt templates
.agent.md  - Custom agent definitions
#tools     - Add context and capabilities
MCP        - External service integration
```

---

[Back to Main README](../README.md) | [Prompt Engineering →](./prompt-engineering.md)
