# Model Context Protocol (MCP) Servers 🔌

Learn how to extend GitHub Copilot's capabilities by connecting it to external tools and data sources through MCP servers.

## What is MCP?

**Model Context Protocol (MCP)** is an open standard that enables AI assistants like GitHub Copilot to securely connect to external data sources, tools, and services. Think of it as a universal adapter that lets Copilot access information beyond your code.

## Why Use MCP?

### Without MCP
Copilot only knows about:
- Your current codebase
- Public code patterns
- General programming knowledge

### With MCP
Copilot can access:
- Live database data
- External APIs (GitHub, Jira, Slack)
- Company documentation
- Cloud infrastructure info
- Custom business logic
- Real-time metrics

## How MCP Works

```
┌──────────────────┐
│  GitHub Copilot  │
│   (AI Assistant) │
└────────┬─────────┘
         │
         │ MCP Protocol
         │
┌────────▼──────────────────────┐
│     MCP Server                │
│  (Your Integration)           │
└────────┬──────────────────────┘
         │
         ├─────────┬────────┬──────────┐
         │         │        │          │
    ┌────▼──┐ ┌───▼───┐ ┌─▼─────┐ ┌──▼────┐
    │ GitHub│ │Database│ │Weather│ │  Jira │
    │  API  │ │        │ │  API  │ │  API  │
    └───────┘ └────────┘ └───────┘ └───────┘
```

## MCP Concepts

### 1. **MCP Server**
A program that:
- Exposes tools and data to Copilot
- Handles requests from Copilot
- Connects to external services
- Returns formatted responses

### 2. **Tools**
Functions that Copilot can call:
- `get_user(id)` - Fetch user data
- `create_issue(title, description)` - Create Jira ticket
- `query_database(sql)` - Run database query
- `get_weather(city)` - Fetch weather data

### 3. **Resources**
Data that Copilot can read:
- File contents
- Documentation
- Configuration
- Schemas

### 4. **Prompts**
Reusable prompt templates that Copilot can use

## Creating an MCP Server

### Basic Structure

```typescript
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

// Create server instance
const server = new Server(
  {
    name: 'my-mcp-server',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {}, // Enable tools
    },
  }
);

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'get_user',
        description: 'Fetch user information by ID',
        inputSchema: {
          type: 'object',
          properties: {
            userId: {
              type: 'string',
              description: 'The user ID to fetch',
            },
          },
          required: ['userId'],
        },
      },
    ],
  };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === 'get_user') {
    const userId = request.params.arguments?.userId;
    
    // Your logic here
    const user = await fetchUserFromDatabase(userId);
    
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(user, null, 2),
        },
      ],
    };
  }
  
  throw new Error(`Unknown tool: ${request.params.name}`);
});

// Start server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('MCP Server running on stdio');
}

main().catch(console.error);
```

### Configuring in VS Code

Add to `.vscode/settings.json`:

```json
{
  "mcp": {
    "servers": {
      "my-server": {
        "command": "node",
        "args": ["path/to/your/mcp-server.js"]
      }
    }
  }
}
```

Or install via VS Code CLI:

```bash
code --add-mcp '{"name":"my-server","command":"node","args":["path/to/your/mcp-server.js"]}'
```

## Example: GitHub MCP Server

```typescript
// github-mcp-server.ts
import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'get_repository',
        description: 'Get information about a GitHub repository',
        inputSchema: {
          type: 'object',
          properties: {
            owner: { type: 'string', description: 'Repository owner' },
            repo: { type: 'string', description: 'Repository name' },
          },
          required: ['owner', 'repo'],
        },
      },
      {
        name: 'list_pull_requests',
        description: 'List pull requests for a repository',
        inputSchema: {
          type: 'object',
          properties: {
            owner: { type: 'string' },
            repo: { type: 'string' },
            state: { 
              type: 'string', 
              enum: ['open', 'closed', 'all'],
              default: 'open'
            },
          },
          required: ['owner', 'repo'],
        },
      },
      {
        name: 'create_issue',
        description: 'Create a new issue',
        inputSchema: {
          type: 'object',
          properties: {
            owner: { type: 'string' },
            repo: { type: 'string' },
            title: { type: 'string' },
            body: { type: 'string' },
          },
          required: ['owner', 'repo', 'title'],
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  switch (name) {
    case 'get_repository': {
      const { owner, repo } = args;
      const { data } = await octokit.repos.get({ owner, repo });
      return {
        content: [{
          type: 'text',
          text: JSON.stringify({
            name: data.name,
            description: data.description,
            stars: data.stargazers_count,
            language: data.language,
            url: data.html_url,
          }, null, 2),
        }],
      };
    }

    case 'list_pull_requests': {
      const { owner, repo, state = 'open' } = args;
      const { data } = await octokit.pulls.list({ 
        owner, 
        repo, 
        state 
      });
      return {
        content: [{
          type: 'text',
          text: JSON.stringify(data.map(pr => ({
            number: pr.number,
            title: pr.title,
            state: pr.state,
            author: pr.user?.login,
            url: pr.html_url,
          })), null, 2),
        }],
      };
    }

    case 'create_issue': {
      const { owner, repo, title, body } = args;
      const { data } = await octokit.issues.create({
        owner,
        repo,
        title,
        body,
      });
      return {
        content: [{
          type: 'text',
          text: `Created issue #${data.number}: ${data.html_url}`,
        }],
      };
    }

    default:
      throw new Error(`Unknown tool: ${name}`);
  }
});
```

## Example: Database MCP Server

```typescript
// database-mcp-server.ts
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'query_users',
        description: 'Query user data from database',
        inputSchema: {
          type: 'object',
          properties: {
            limit: { type: 'number', default: 10 },
            offset: { type: 'number', default: 0 },
          },
        },
      },
      {
        name: 'get_user_by_id',
        description: 'Get specific user by ID',
        inputSchema: {
          type: 'object',
          properties: {
            id: { type: 'string' },
          },
          required: ['id'],
        },
      },
      {
        name: 'get_schema',
        description: 'Get database schema information',
        inputSchema: {
          type: 'object',
          properties: {
            table: { type: 'string' },
          },
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  switch (name) {
    case 'query_users': {
      const { limit = 10, offset = 0 } = args;
      const result = await pool.query(
        'SELECT id, name, email, created_at FROM users LIMIT $1 OFFSET $2',
        [limit, offset]
      );
      return {
        content: [{
          type: 'text',
          text: JSON.stringify(result.rows, null, 2),
        }],
      };
    }

    case 'get_user_by_id': {
      const { id } = args;
      const result = await pool.query(
        'SELECT id, name, email, created_at FROM users WHERE id = $1',
        [id]
      );
      return {
        content: [{
          type: 'text',
          text: JSON.stringify(result.rows[0] || null, null, 2),
        }],
      };
    }

    case 'get_schema': {
      const { table } = args;
      const result = await pool.query(`
        SELECT column_name, data_type, is_nullable
        FROM information_schema.columns
        WHERE table_name = $1
      `, [table]);
      return {
        content: [{
          type: 'text',
          text: JSON.stringify(result.rows, null, 2),
        }],
      };
    }

    default:
      throw new Error(`Unknown tool: ${name}`);
  }
});
```

## Using MCP with Copilot

Once your MCP server is configured, you can ask Copilot questions that require external data:

### Example Queries

```
"What are the open pull requests in this repository?"
→ Copilot uses GitHub MCP server

"Show me all users who registered in the last week"
→ Copilot queries database via MCP

"Create a function that fetches the latest issues and formats them for display"
→ Copilot generates code using GitHub MCP context

"What's the database schema for the orders table?"
→ Copilot retrieves schema via Database MCP

"Generate a report combining GitHub activity and database metrics"
→ Copilot uses multiple MCP servers
```

## Best Practices

### 1. **Security**
- Never expose sensitive operations
- Validate all inputs
- Use authentication tokens
- Implement rate limiting
- Sanitize database queries

```typescript
// ✅ Good - Parameterized query
const result = await pool.query(
  'SELECT * FROM users WHERE id = $1',
  [userId]
);

// ❌ Bad - SQL injection risk
const result = await pool.query(
  `SELECT * FROM users WHERE id = '${userId}'`
);
```

### 2. **Error Handling**
```typescript
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  try {
    // Your logic
  } catch (error) {
    return {
      content: [{
        type: 'text',
        text: `Error: ${error.message}`,
      }],
      isError: true,
    };
  }
});
```

### 3. **Performance**
- Implement caching
- Limit result sizes
- Use pagination
- Add timeouts

```typescript
import NodeCache from 'node-cache';
const cache = new NodeCache({ stdTTL: 300 }); // 5 min cache

async function getCachedData(key: string, fetcher: () => Promise<any>) {
  const cached = cache.get(key);
  if (cached) return cached;
  
  const data = await fetcher();
  cache.set(key, data);
  return data;
}
```

### 4. **Documentation**
Provide clear tool descriptions:

```typescript
{
  name: 'create_user',
  description: 'Create a new user in the database. Returns the created user with generated ID.',
  inputSchema: {
    type: 'object',
    properties: {
      name: { 
        type: 'string',
        description: 'User full name (2-100 characters)'
      },
      email: {
        type: 'string',
        description: 'Valid email address, must be unique'
      },
    },
    required: ['name', 'email'],
  },
}
```

## Testing MCP Servers

### 1. **MCP Inspector**
```bash
npx @modelcontextprotocol/inspector node your-mcp-server.js
```

Opens a UI to test your MCP server interactively.

### 2. **Unit Tests**
```typescript
import { describe, it, expect } from 'vitest';

describe('MCP Server', () => {
  it('should list tools', async () => {
    const result = await server.handleRequest({
      method: 'tools/list',
    });
    expect(result.tools).toHaveLength(3);
  });

  it('should execute get_user tool', async () => {
    const result = await server.handleRequest({
      method: 'tools/call',
      params: {
        name: 'get_user',
        arguments: { userId: '123' },
      },
    });
    expect(result.content[0].text).toContain('userId');
  });
});
```

## Common Use Cases

1. **Development Tools**
   - Code search
   - Git operations
   - Build system integration

2. **Data Access**
   - Database queries
   - File system access
   - Cloud storage

3. **External Services**
   - GitHub/GitLab
   - Jira/Linear
   - Slack/Teams
   - Weather/Maps APIs

4. **Business Logic**
   - Custom calculators
   - Validation rules
   - Company-specific workflows

5. **Infrastructure**
   - Cloud provider APIs
   - Monitoring systems
   - Log aggregators

## Troubleshooting

### MCP Server Not Connecting?
1. Check server is running: `node your-server.js`
2. Verify VS Code settings path
3. Check server logs
4. Restart VS Code

### Tools Not Appearing?
1. Verify `ListToolsRequestSchema` handler
2. Check tool schema format
3. Review MCP server logs

### Poor Responses?
1. Improve tool descriptions
2. Add more context in responses
3. Format data clearly
4. Handle errors gracefully

---

## Resources

- [MCP Specification](https://modelcontextprotocol.io/)
- [MCP SDK Documentation](https://github.com/modelcontextprotocol/sdk)
- [Example MCP Servers](https://github.com/modelcontextprotocol/servers)

---

**MCP unlocks Copilot's true potential! 🔌**

[← Prompt Engineering](./prompt-engineering.md) | [Best Practices →](./best-practices.md)
