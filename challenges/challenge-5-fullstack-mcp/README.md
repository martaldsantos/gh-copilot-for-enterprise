# Challenge 5: Full Stack - MCP Server Integration 🔌

**Difficulty**: Advanced  
**Duration**: 1.5-2 hours  
**Team**: Full-stack Developers, Advanced Users

## 🎯 Objective

Build a complete application that integrates with external services through Model Context Protocol (MCP) servers. This challenge showcases GitHub Copilot's most advanced feature - extending its context with custom tools and data sources.

## 📚 What You'll Learn

- Creating custom MCP servers
- Integrating MCP with GitHub Copilot
- Building context-aware applications
- Advanced Copilot workspace features
- Multi-service architecture
- Real-world API integrations

## 🛠️ Technology Stack

- **Node.js/TypeScript** - MCP server implementation
- **@modelcontextprotocol/sdk** - MCP SDK
- **Express/FastAPI** - Backend API
- **React** - Frontend (optional)
- **External APIs** - GitHub, Weather, Database

## 📋 What is MCP?

**Model Context Protocol (MCP)** is a standardized way to connect AI assistants like GitHub Copilot with external tools and data sources. It allows Copilot to:

- Access real-time data from APIs
- Execute custom tools and functions
- Retrieve context from databases
- Integrate with third-party services

## 🎯 Challenge Requirements

Build an **Intelligent Project Dashboard** that:

### Core Features

1. **GitHub Integration MCP Server**
   - Fetch repository information
   - Get PR and issue data
   - Retrieve commit history
   - Access code search results

2. **Database MCP Server**
   - Query application database
   - Retrieve user data
   - Get analytics and metrics
   - Execute custom queries

3. **Weather/External API MCP Server**
   - Fetch current weather
   - Get location data
   - Provide contextual information

4. **Backend API**
   - Aggregate data from MCP servers
   - Provide unified API for frontend
   - Handle authentication
   - Cache and optimize requests

5. **Frontend Dashboard** (Optional)
   - Display integrated data
   - Real-time updates
   - Interactive visualizations

## 🚀 Getting Started

### Step 1: Understanding MCP

Read the [MCP Documentation](../docs/mcp-servers.md) first!

### Step 2: Setup

```bash
cd challenges/challenge-5-fullstack-mcp/
npm install
```

### Step 3: Configure MCP in VS Code

Add to your VS Code settings (`.vscode/settings.json`):
```json
{
  "github.copilot.advanced": {
    "mcp": {
      "servers": {
        "github-integration": {
          "command": "node",
          "args": ["./mcp-servers/github-server.js"]
        },
        "database": {
          "command": "node",
          "args": ["./mcp-servers/database-server.js"]
        }
      }
    }
  }
}
```

## 💡 Copilot + MCP Tips

### 1. Leveraging MCP Context

Once MCP servers are running, ask Copilot:
```
"What are the latest issues in this repository?"
"Show me the database schema for users table"
"What's the weather like for our production servers' location?"
```

Copilot will use your MCP servers to answer!

### 2. Building with Context

```
"Create an API endpoint that fetches GitHub PR data using our MCP server
and combines it with database metrics"
```

### 3. Testing MCP Integration

```
"Generate tests for the MCP server tools to ensure they return correct data"
```

## 📝 Step-by-Step Guide

### Phase 1: Create GitHub MCP Server (30 min)

1. **Initialize MCP Server**
   
   💡 **Copilot Prompt:**
   ```
   "Create an MCP server using @modelcontextprotocol/sdk that:
   - Connects to GitHub API
   - Exposes tools for fetching repos, PRs, issues
   - Implements proper error handling
   - Uses environment variables for auth token"
   ```

2. **Implement Tools**
   ```typescript
   // Tool 1: Get repository information
   // Tool 2: List pull requests
   // Tool 3: Search issues
   // Tool 4: Get recent commits
   ```

3. **Test MCP Server**
   ```bash
   node mcp-servers/github-server.js
   # Test with MCP inspector
   ```

### Phase 2: Create Database MCP Server (25 min)

1. **Setup Database Connection**
   ```
   Ask Copilot: "Create MCP server that connects to PostgreSQL
   and exposes query tools with proper SQL injection prevention"
   ```

2. **Implement Query Tools**
   ```typescript
   // Tool 1: Get user by ID
   // Tool 2: Get project statistics
   // Tool 3: Search records
   // Tool 4: Get analytics data
   ```

3. **Add Caching**
   ```
   "Implement Redis caching for database queries in MCP server
   with 5-minute TTL"
   ```

### Phase 3: Create External API MCP Server (20 min)

1. **Weather API Integration**
   ```
   "Create MCP server that integrates with OpenWeather API:
   - Get current weather by city
   - Get forecast
   - Handle API rate limiting
   - Cache responses"
   ```

2. **Additional Integrations**
   ```typescript
   // Add tools for:
   // - Geolocation lookup
   // - Time zone conversion
   // - Currency conversion
   ```

### Phase 4: Build Backend API (30 min)

1. **Aggregation Service**
   
   💡 **With MCP Context, Ask:**
   ```
   "Create an Express API that:
   - Uses our GitHub MCP server to fetch repo data
   - Uses database MCP server for metrics
   - Combines data into a unified dashboard response
   - Implements caching and error handling"
   ```

2. **API Endpoints**
   ```typescript
   // GET /api/dashboard - Get complete dashboard data
   // GET /api/github/stats - GitHub statistics
   // GET /api/analytics - Database analytics
   // GET /api/health - Health check including MCP servers
   ```

3. **Real-time Updates**
   ```
   "Add WebSocket support for real-time dashboard updates
   when MCP data changes"
   ```

### Phase 5: Frontend Integration (25 min)

1. **Dashboard Component**
   ```tsx
   // Create React dashboard that displays:
   // - GitHub repo statistics
   // - Recent PRs and issues
   // - Database metrics
   // - Weather at datacenter locations
   // - Real-time updates via WebSocket
   ```

2. **Data Visualization**
   ```
   Ask: "Create charts using Chart.js showing:
   - PR merge rate over time
   - Issue resolution time
   - Database query performance
   - API response times"
   ```

## 🔧 MCP Server Structure

Each MCP server should implement:

```typescript
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

const server = new Server({
  name: "my-mcp-server",
  version: "1.0.0"
}, {
  capabilities: {
    tools: {}
  }
});

// Define tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "get_data",
        description: "Fetches data from external source",
        inputSchema: {
          type: "object",
          properties: {
            id: { type: "string" }
          }
        }
      }
    ]
  };
});

// Implement tool execution
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  // Execute tool logic
});

// Start server
const transport = new StdioServerTransport();
await server.connect(transport);
```

## ✅ Completion Checklist

### MCP Servers
- [ ] GitHub MCP server created
- [ ] Database MCP server created
- [ ] External API MCP server created
- [ ] All tools properly implemented
- [ ] Error handling in place
- [ ] MCP servers configured in VS Code
- [ ] Servers tested independently

### Backend
- [ ] Aggregation API created
- [ ] Endpoints using MCP data
- [ ] Caching implemented
- [ ] WebSocket for real-time updates
- [ ] Authentication working
- [ ] Error handling comprehensive

### Integration
- [ ] Copilot accessing MCP context
- [ ] Can query across all servers
- [ ] Data properly aggregated
- [ ] Frontend displaying MCP data
- [ ] Real-time updates working

### Quality
- [ ] Tests for MCP servers
- [ ] API tests
- [ ] Documentation complete
- [ ] Performance optimized

## 🎁 Bonus Challenges

1. **Advanced MCP Features**
   - Implement MCP resources for file access
   - Add MCP prompts for common queries
   - Create sampling for streaming responses

2. **Multi-Model Support**
   - Support different AI models via MCP
   - Model routing based on task
   - Cost optimization

3. **Production Ready**
   - Add monitoring and metrics
   - Implement rate limiting
   - Deploy MCP servers as microservices
   - Add distributed tracing

4. **Additional Integrations**
   - Jira MCP server
   - Slack MCP server
   - AWS/Cloud provider MCP server
   - Database migration MCP server

## 🧪 Testing

```bash
# Test individual MCP server
node mcp-servers/github-server.js

# Test with MCP inspector
npx @modelcontextprotocol/inspector mcp-servers/github-server.js

# Test backend API
npm test

# Test full integration
npm run test:integration
```

## 📊 Success Metrics

- MCP servers implemented: _____/3
- Tools created across servers: _____
- Backend endpoints using MCP: _____
- Copilot successfully using context: Yes/No
- Response time with MCP: _____ ms

## 🎓 Key Learnings

Reflect on:
1. How did MCP enhance Copilot's capabilities?
2. What types of tools were most useful?
3. How did context improve code generation?
4. What challenges did you face?

## 📚 Resources

- [MCP Documentation](https://modelcontextprotocol.io/)
- [MCP SDK Reference](https://github.com/modelcontextprotocol/sdk)
- [Copilot MCP Integration](../docs/copilot-mcp.md)
- [Example MCP Servers](https://github.com/modelcontextprotocol/servers)

## 🏗️ Architecture

```
┌─────────────────┐
│  GitHub Copilot │
└────────┬────────┘
         │
         ├─────────┐
         │   MCP   │
         └─────────┤
                   │
    ┌──────────────┼──────────────┐
    │              │              │
┌───▼────┐   ┌────▼───┐   ┌─────▼──┐
│ GitHub │   │Database│   │External│
│  MCP   │   │  MCP   │   │API MCP │
└───┬────┘   └────┬───┘   └─────┬──┘
    │             │             │
    └──────┬──────┴──────┬──────┘
           │             │
      ┌────▼─────────────▼────┐
      │   Backend API          │
      └────────┬───────────────┘
               │
      ┌────────▼────────┐
      │    Frontend     │
      └─────────────────┘
```

---

**Need Help?**
- Check MCP documentation in `/docs/mcp-servers.md`
- Ask Copilot with MCP context enabled!
- Review `/solutions/challenge-5/` for reference

Build the future with MCP! 🔌🚀
