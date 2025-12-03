# Challenge 1: Web Development - REST API Builder 🌐

**Difficulty**: Beginner to Intermediate  
**Duration**: 4-6 hours  
**Team**: Backend/Web Developers

## 🎯 Objective

Build a fully functional REST API for a task management system using GitHub Copilot's **Agent mode**. Learn how to leverage Copilot's agentic capabilities to create multi-file implementations, run tests automatically, and iterate on your code.

## 📚 What You'll Learn

- Using **Agent mode** for autonomous multi-file development
- Creating **custom agents** for API development workflows
- Using **prompt files** for reusable API patterns
- Leveraging **MCP tools** for enhanced capabilities
- Using `#` context mentions for precise guidance
- Iterative development with Agent mode

## 🛠️ Technology Stack

Choose one:
- **Node.js**: Express.js + JavaScript
- **Python**: FastAPI + Pydantic

Both starter templates are provided!

## 📋 Requirements

Build a Task Management API with the following features:

### Core Features
1. **User Authentication**
   - Register new users
   - Login with JWT tokens
   - Protected routes

2. **Task CRUD Operations**
   - Create tasks (title, description, status, priority, due_date)
   - Read all tasks (with filtering)
   - Update task details
   - Delete tasks
   - Mark tasks as complete

3. **Advanced Features**
   - Filter tasks by status/priority
   - Search tasks by title/description
   - Pagination support
   - Input validation
   - Error handling

### Quality Requirements
- Comprehensive error handling
- Input validation
- API documentation (OpenAPI/Swagger)
- Unit tests (>80% coverage)
- Integration tests for key endpoints

## 🚀 Getting Started

### Step 1: Choose Your Stack

Navigate to either:
```bash
cd node-express/
# OR
cd python-fastapi/
```

### Step 2: Review Starter Code

Open the starter files and familiarize yourself with the structure:
- `app.js` or `main.py` - Main application file
- `models/` - Data models

### Step 3: Set Up Your Copilot Environment

Before starting, configure your workspace for optimal Copilot assistance.

## 💡 Copilot Agentic Tips for This Challenge

### 1. Use Agent Mode for Multi-File Development

Open Chat View (`Ctrl+Alt+I`) and select **Agent** from the agent picker. Then:

```
Create a complete user authentication system with:
- User model with password hashing
- Registration endpoint with email validation
- Login endpoint returning JWT tokens
- Auth middleware for protected routes
- Unit tests for all components
```

Agent mode will:
- Create all necessary files
- Install dependencies
- Implement the code
- Run tests to verify

### 2. Create a Custom Agent for API Development

**Your goal:** Create a custom agent file at `.github/agents/api-developer.agent.md` that specializes in REST API development.

**What your agent should do:**
- Guide API development following REST best practices
- Ensure proper HTTP status codes and error handling
- Generate input validation and OpenAPI documentation
- Reference existing patterns in your codebase

> 💡 **Looking for examples?** Check out the [github/awesome-copilot](https://github.com/github/awesome-copilot) repository for custom agent templates and ideas.

### 3. Use Context with # Mentions

```
Using the patterns in #file:models/data.js, create a Task model 
with validation for title (required, 3-100 chars), description, 
status (enum), and priority (enum).

Reference #codebase for existing error handling patterns.
```

### 4. Create Reusable Prompt Files

**Your goal:** Create a prompt file at `.github/prompts/create-endpoint.prompt.md` that helps you quickly scaffold new API endpoints.

**What your prompt file should do:**
- Accept inputs for HTTP method and resource name
- Generate endpoints following REST conventions
- Include input validation and error handling
- Create corresponding unit tests
- Reference your existing codebase patterns

> 💡 **Looking for examples?** Check out the [github/awesome-copilot](https://github.com/github/awesome-copilot) repository for prompt file templates.

Once created, use it with: `/create-endpoint`

### 5. Iterative Development with Agent

Have a conversation with Copilot:

```
You: Create the basic Express app structure with error handling

[Agent creates files]

You: Now add the User model with bcrypt password hashing

[Agent adds User model]

You: Create registration and login endpoints

[Agent implements auth]

You: Run npm test to verify

[Agent runs tests, fixes any issues]
```

## 📝 Step-by-Step Guide

### Phase 1: Setup (10 min)

1. **Install dependencies:**
   ```bash
   npm install  # or pip install -r requirements.txt
   ```

2. **Run the starter app:**
   ```bash
   npm run dev  # or uvicorn main:app --reload
   ```

3. **Verify it works** - Navigate to http://localhost:3000 (or :8000)

### Phase 2: User Authentication (20 min)

Use Agent mode with comprehensive prompts:

```
Create a complete user authentication system:

1. User Model:
   - email: required, unique, valid email format
   - password: hashed with bcrypt, min 8 chars
   - timestamps: createdAt, updatedAt

2. POST /api/auth/register:
   - Validate email format and password strength
   - Check email uniqueness
   - Hash password before storing
   - Return 201 with user (exclude password)
   - Return 400 for validation errors
   - Return 409 for duplicate email

3. POST /api/auth/login:
   - Validate credentials
   - Return JWT token (24-hour expiry)
   - Return 401 for invalid credentials

4. Auth Middleware:
   - Verify JWT token
   - Attach user to request
   - Return 401 for invalid/expired tokens

5. Tests:
   - Registration success and validation errors
   - Login success and failure
   - Protected route access

Run tests after implementation to verify.
```

### Phase 3: Task Management (30 min)

Continue with Agent mode:

```
Create complete Task CRUD operations:

Task Model:
- id: auto-generated
- title: required, 3-100 chars
- description: optional
- status: enum (todo, in-progress, done)
- priority: enum (low, medium, high)
- dueDate: optional date
- userId: foreign key to User

Endpoints (all protected):
- GET /api/tasks - List all tasks for user
  - Filter by: status, priority
  - Search by: title, description
  - Pagination: page, limit (default 10)
  
- POST /api/tasks - Create new task
  - Validate all inputs
  - Return 201 with created task
  
- GET /api/tasks/:id - Get specific task
  - Return 404 if not found
  
- PUT /api/tasks/:id - Update task
  - Validate inputs
  - Return 404 if not found
  
- DELETE /api/tasks/:id - Delete task
  - Return 404 if not found
  - Return 204 on success

- PATCH /api/tasks/:id/complete - Mark task complete
  - Set status to 'done'
  - Return updated task

Include integration tests for all endpoints.
```

### Phase 4: Testing (15 min)

Ask Agent to enhance tests:

```
Review the current test coverage using #problems and:
1. Add missing test cases for edge cases
2. Add tests for error scenarios
3. Ensure >80% coverage
4. Run all tests and fix any failures
```

### Phase 5: Documentation (10 min)

Generate API documentation:

```
Generate comprehensive API documentation:
1. OpenAPI/Swagger specification
2. README with setup instructions
3. JSDoc/docstring comments for all endpoints
4. Example requests/responses for each endpoint
```

## 🛠️ Optional: Set Up MCP Tools

For enhanced capabilities, configure MCP servers:

**`.vscode/mcp.json`**:
```json
{
  "servers": {
    "fetch": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-fetch"]
    }
  }
}
```

Now you can:
```
Use #fetch to get the Express.js documentation for middleware,
then implement rate limiting following their patterns.
```

## ✅ Completion Checklist

- [ ] User registration endpoint working
- [ ] User login returning JWT token
- [ ] All CRUD endpoints implemented
- [ ] Task filtering by status/priority working
- [ ] Search functionality implemented
- [ ] Pagination working correctly
- [ ] Input validation on all endpoints
- [ ] Error handling implemented
- [ ] Unit tests written (>80% coverage)
- [ ] Integration tests for key flows
- [ ] API documentation generated
- [ ] Can create, read, update, delete tasks via API

## 🎁 Bonus Challenges

If you finish early, try these with Agent mode:

1. **Task Assignment**: "Add ability to assign tasks to other users with email notifications"
2. **Task Comments**: "Create a commenting system for tasks with CRUD operations"
3. **File Uploads**: "Allow attaching files to tasks using multer/S3"
4. **Rate Limiting**: "Implement rate limiting with Redis"
5. **WebSocket Updates**: "Add real-time task updates using Socket.io"

## 🧪 Testing Your API

Use Agent mode to help with testing:

```
Create a Postman collection or Thunder Client requests 
for all API endpoints with example data.
```

## 📊 Success Metrics

Track your Copilot usage:
- How much did Agent mode handle vs manual coding? ____%
- Number of iterations needed for complex features? _____
- Most useful agent workflow? _______________
- Time saved (estimated)? _____ minutes

## 🎓 Key Learnings

Document your discoveries:
1. What prompts worked best with Agent mode?
2. How did custom agents help your workflow?
3. When did you need to intervene vs let Agent iterate?
4. What context (#file, #codebase) was most helpful?

## 📚 Resources

- [Express.js Documentation](https://expressjs.com/)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Copilot Agents Guide](../docs/chat-modes.md)
- [Prompt Engineering](../docs/prompt-engineering.md)

---

**Need Help?**
- Use Agent mode to debug: "Analyze #problems and fix all errors"
- Check the `/docs` folder for guides

Good luck! 🚀
