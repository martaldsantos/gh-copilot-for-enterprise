# GitHub Copilot Basics

## What is GitHub Copilot?

GitHub Copilot is your **AI-powered development partner** that goes far beyond simple code completion. In VS Code, Copilot offers a complete agentic experience -- it can understand your entire project, make multi-file changes, run terminal commands, and iterate autonomously to complete complex tasks.

## The Copilot Experience in VS Code

### Three Ways to Interact

| Method | Access | Best For |
|--------|--------|----------|
| **Chat View** | `Ctrl+Alt+I` (Win/Linux) / `Cmd+Shift+I` (Mac) | Complex tasks, multi-file changes |
| **Inline Chat** | `Ctrl+I` / `Cmd+I` | Quick edits within a file |
| **Inline Suggestions** | Automatic as you type | Code completions while coding |

## Agents: The Heart of Modern Copilot

### What Are Agents?

Agents define how Copilot behaves during a conversation. VS Code includes four built-in agents:

| Agent | Description | Capabilities |
|-------|-------------|--------------|
| **Agent** | Full autonomous mode | Edit files, run commands, self-correct |
| **Plan** | Planning mode | Read-only, generates implementation plans |
| **Ask** | Q&A mode | Answers questions, explains code |
| **Edit** | Focused editing | Makes targeted changes to files |

### Using Agent Mode

**Agent mode** is the most powerful way to use Copilot. It can:

- Create and modify multiple files
- Run terminal commands automatically
- Recognize errors and fix them
- Iterate until your task is complete
- Infer additional work needed

**Example:**

```text
Create a REST API for task management with:
- CRUD endpoints
- JWT authentication  
- Input validation
- Unit tests
```

Agent mode will create all necessary files, install dependencies, and verify the implementation works.

### Switching Agents

1. Open Chat View (`Ctrl+Alt+I`)
2. Click the agent picker (next to the model selector)
3. Choose: Agent, Plan, Ask, or Edit

## Getting Started

### Installation

1. **Install VS Code Extensions**
   - Open Extensions (`Ctrl+Shift+X`)
   - Search "GitHub Copilot"
   - Install **GitHub Copilot** and **GitHub Copilot Chat**

2. **Sign In**
   - Click Copilot icon in the Activity Bar
   - Sign in with your GitHub account
   - Ensure you have Copilot access (Individual, Business, or Enterprise)

3. **Verify Setup**
   - Open Chat View (`Ctrl+Alt+I`)
   - Select **Agent** from the agent picker
   - Type: "Hello, confirm you can see my workspace"

### Your First Agentic Task

Try this with Agent mode:

1. Open Chat View (`Ctrl+Alt+I`)
2. Select **Agent** from the agent picker
3. Type:

   ```text
   Create a simple Express server with a /health endpoint that returns JSON status
   ```

4. Watch Copilot:
   - Create the file
   - Write the code
   - Offer to run it

## Adding Context with # Mentions

Use `#` to give Copilot specific context:

| Mention | Purpose | Example |
|---------|---------|---------|
| `#file` | Reference a specific file | `#file:src/auth.ts explain this` |
| `#codebase` | Search your project | `#codebase how is auth implemented?` |
| `#selection` | Reference selected code | `#selection add error handling` |
| `#terminalSelection` | Reference terminal output | `#terminalSelection what's this error?` |
| `#problems` | Access editor errors | `Fix the issues in #problems` |

**Example with context:**

```text
Using the patterns in #file:src/services/UserService.ts, 
create a ProductService with similar error handling
```

## Tools in Chat

Tools extend what Copilot can do. Access them via the **Configure Tools** button in Agent mode:

### Built-in Tools

- **`#fetch`** - Fetch web content
- **`#githubRepo`** - Search GitHub repositories
- **`#usages`** - Find code usages
- **`#changes`** - Access git changes

### MCP Tools

Install additional capabilities through MCP (Model Context Protocol) servers:

- **Playwright** - Browser automation
- **GitHub** - GitHub API access
- **Database** - Query databases

## Inline Suggestions

While typing, Copilot suggests completions:

- **Accept**: Press `Tab`
- **Dismiss**: Press `Esc`
- **Next suggestion**: `Alt+]` / `Option+]`
- **Previous suggestion**: `Alt+[` / `Option+[`

**Tip**: Write a comment describing what you need, then press Enter:

```javascript
// Function to validate email format using regex
```

## Keyboard Shortcuts

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Open Chat View | `Ctrl+Alt+I` | `Cmd+Shift+I` |
| Inline Chat | `Ctrl+I` | `Cmd+I` |
| Accept suggestion | `Tab` | `Tab` |
| Dismiss suggestion | `Esc` | `Esc` |
| Next suggestion | `Alt+]` | `Option+]` |
| Previous suggestion | `Alt+[` | `Option+[` |

## Customizing Copilot

### Custom Instructions

Create a `.github/copilot-instructions.md` file to set project-wide guidelines.

**What to include:**

- Project context (framework, language, architecture)
- Coding standards and conventions
- Testing requirements
- Patterns to follow

> **Looking for examples?** Check out the [github/awesome-copilot](https://github.com/github/awesome-copilot) repository for real-world custom instruction files.

### Custom Agents

Create specialized agents in `.github/agents/` for specific workflows.

**What agents can do:**

- Focus on specific domains (security, API design, testing)
- Use specific tools and models
- Hand off to other agents for multi-step workflows

> **Looking for examples?** Check out the [github/awesome-copilot](https://github.com/github/awesome-copilot) repository for agent templates.

### Prompt Files

Create reusable prompts in `.github/prompts/` for common tasks.

**What prompt files can do:**

- Accept dynamic inputs for flexible templates
- Reference files and codebase patterns
- Invoke specific agents

> **Looking for examples?** Check out the [github/awesome-copilot](https://github.com/github/awesome-copilot) repository for prompt file ideas.

## Working with Agent Mode

### Reviewing Changes

When Agent makes changes:

1. **Review inline** - Changes appear highlighted in editor
2. **Accept/Reject** - Accept good changes, reject others
3. **Iterate** - Ask for modifications
4. **Undo** - Use Chat's undo to revert

### Tool Approvals

Agent may request permission to:

- Modify files
- Run terminal commands
- Access MCP tools

Review the action before approving.

## Language Models

Choose different AI models for different tasks:

1. Click the model picker in Chat
2. Select from available models:
   - **GPT-4o** - Balanced performance
   - **Claude Sonnet** - Strong reasoning
   - **Gemini** - Fast responses
   - **o1/o3** - Complex reasoning

## Best Practices

### 1. Choose the Right Agent

- Complex, multi-file tasks → **Agent**
- Planning and architecture → **Plan**
- Quick questions → **Ask**
- Focused file edits → **Edit**

### 2. Provide Context

- Use `#file` to reference relevant code
- Use `#codebase` for project-wide understanding
- Include examples of desired patterns

### 3. Iterate

- Don't expect perfection first try
- Ask follow-up questions
- Refine with additional instructions

### 4. Review Everything

- Agent makes real changes
- Always review before committing
- Run tests to verify

## What Copilot Can Do

**Capabilities:**

- Generate multi-file implementations
- Refactor across your codebase
- Run terminal commands
- Debug and fix errors
- Write comprehensive tests
- Explain complex code
- Create documentation

## What Requires Your Judgment

**You should:**

- Make architectural decisions
- Verify security implications
- Understand the generated code
- Review for business logic correctness
- Decide what to accept or reject

## Next Steps

1. [Chat Modes & Agents Guide](./chat-modes.md) - Master agent workflows
2. [Prompt Engineering](./prompt-engineering.md) - Write effective prompts
3. [MCP Servers](./mcp-servers.md) - Extend capabilities
4. [Best Practices](./best-practices.md) - Production-ready patterns

---

[Back to Main README](../README.md)
