# Copilot Agents & Chat Modes Reference 🤖

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

## Agent Mode - The Agentic Experience 🚀

**Agent mode** is Copilot's most powerful capability. It can:

- ✅ Autonomously iterate on code
- ✅ Recognize and fix its own errors
- ✅ Execute terminal commands
- ✅ Make changes across multiple files
- ✅ Infer additional tasks needed to complete your request
- ✅ Self-heal from runtime errors

### When to Use Agent Mode

Use Agent mode when you need to:
- Implement features spanning multiple files
- Set up new projects or components
- Debug issues that require investigation
- Refactor code across your codebase
- Perform complex multi-step tasks

### Example: Building a Feature with Agent Mode

```
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

## Custom Agents 🎭

Create specialized agents for specific workflows by defining `.agent.md` files.

### Creating a Custom Agent

1. Run `Chat: New Custom Agent` from Command Palette
2. Choose location (Workspace or User profile)
3. Define the agent in the Markdown file

### Custom Agent Structure

```markdown
---
description: Generate implementation plans without code changes
name: Planner
tools: ['fetch', 'githubRepo', 'search', 'usages']
model: Claude Sonnet 4
handoffs:
  - label: Start Implementation
    agent: agent
    prompt: Implement the plan outlined above.
    send: false
---

# Planning Instructions

You are in planning mode. Your task is to generate an 
implementation plan for new features or refactoring.

Do NOT make any code edits. Only generate plans.
```

### Example Custom Agents

**Security Reviewer:**
```markdown
---
name: Security Review
description: Analyze code for security vulnerabilities
tools: ['codebase', 'search', 'problems']
---

Review the code for:
- SQL injection vulnerabilities
- XSS attack vectors
- Authentication/authorization issues
- Sensitive data exposure
```

**API Designer:**
```markdown
---
name: API Designer
description: Design REST API endpoints
tools: ['search', 'fetch']
---

Design RESTful API endpoints following:
- OpenAPI 3.0 specification
- REST best practices
- Consistent naming conventions
```

### Handoffs Between Agents

Handoffs create guided workflows that transition between agents:

```markdown
handoffs:
  - label: Implement Changes
    agent: agent
    prompt: Now implement the changes outlined above.
```

---

## Prompt Files (Reusable Prompts) 📄

Create reusable prompts for common tasks using `.prompt.md` files.

### Creating a Prompt File

1. Enable `chat.promptFiles` setting
2. Run `Chat: New Prompt File` from Command Palette
3. Store in `.github/prompts/` or user profile

### Prompt File Structure

```markdown
---
description: Generate a React component with tests
name: create-component
tools: ['codebase', 'editFiles']
agent: agent
---

Create a React component named ${input:componentName} that:
- Uses TypeScript with proper type definitions
- Includes unit tests with React Testing Library
- Follows the patterns in ${file:src/components/Button.tsx}
- Uses Tailwind CSS for styling
```

### Using Prompt Files

Type `/` in chat followed by the prompt name:
```
/create-component
```

---

## Tools in Chat 🛠️

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

```
Using #codebase, find all API endpoints and create 
comprehensive tests following the patterns in #file:tests/api.test.ts
```

### Tool Picker

In Agent mode, click the **Configure Tools** button to:
- Enable/disable specific tools
- View available MCP tools
- Create tool sets for common workflows

---

## MCP (Model Context Protocol) Integration 🔌

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

```
List my open GitHub issues and create a task list
```

---

## Context Management with # Mentions

Use `#` to add context to your prompts:

### File Context
```
#file:src/models/user.ts - Add validation to this model
```

### Selection Context
```
#selection - Explain what this selected code does
```

### Workspace Context
```
#codebase - Find all usages of the UserService class
```

### Terminal Context
```
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
```
/tests for the authentication module - include edge cases 
and mock external dependencies
```

---

## Multi-File Editing (Copilot Edits)

Agent mode excels at multi-file operations:

### Example: Refactoring Across Files

```
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

```
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
```
Create a complete task management API with:
- CRUD endpoints for tasks
- User authentication with JWT
- Input validation and error handling
- Unit tests with >80% coverage
- OpenAPI documentation
```

### Challenge 2: ML/AI
```
Analyze customer_churn.csv using Agent mode:
- Load and explore the data
- Create visualizations
- Engineer features
- Train and compare models
- Generate a summary report
```

### Challenge 3: DevOps
```
Set up Azure infrastructure with Terraform:
- VNet with public/private subnets
- Container registry
- Kubernetes cluster
- Proper security groups
```

### Challenge 4: Frontend
```
Build a task dashboard with React:
- Dashboard component with statistics
- Task list with filtering and sorting
- Dark/light theme toggle
- Comprehensive component tests
```

### Challenge 5: QA
```
Using the Playwright MCP server, navigate to the 
application and generate E2E tests for the main user flows.
```

---

## Quick Reference

```
🤖 Agent      - Full autonomous mode, multi-file edits
📋 Plan       - Read-only planning mode
❓ Ask        - Q&A and explanations
✏️ Edit       - Focused file editing
📄 .prompt.md - Reusable prompt templates
🎭 .agent.md  - Custom agent definitions
🛠️ #tools     - Add context and capabilities
🔌 MCP        - External service integration
```

---

**Embrace the agentic workflow and let Copilot do the heavy lifting! 🚀**

[Back to Main README](../README.md) | [Prompt Engineering →](./prompt-engineering.md)
