# Challenge 1: Web Development - REST API Builder 🌐

**Difficulty**: Beginner to Intermediate  
**Duration**: 1-1.5 hours  
**Team**: Backend/Web Developers

## 🎯 Objective

Build a fully functional REST API for a task management system using GitHub Copilot. Learn how to use Copilot's inline suggestions, chat commands, and workspace context to accelerate API development.

## 📚 What You'll Learn

- Using Copilot inline suggestions for rapid API development
- Leveraging `/test` command to generate comprehensive tests
- Using `/explain` to understand generated code
- Using `/fix` to debug issues
- Workspace-aware prompts for consistent patterns

## 🛠️ Technology Stack

Choose one:
- **Node.js**: Express.js + TypeScript
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
- `routes/` - API endpoints
- `tests/` - Test files

### Step 3: Use Copilot to Build

## 💡 Copilot Tips for This Challenge

### 1. Inline Suggestions

**Write a comment describing what you need:**
```javascript
// Create a POST endpoint to register a new user with email and password validation
```

Then press Enter and let Copilot suggest the implementation!

### 2. Chat Commands

**Use `/test` to generate tests:**
1. Highlight your function
2. Open Copilot Chat (Ctrl+Shift+I)
3. Type: `/test create unit tests for this function`

**Use `/explain` to understand code:**
1. Highlight complex code
2. Type: `/explain how does this authentication work?`

**Use `/fix` for debugging:**
1. When you encounter an error
2. Type: `/fix error: cannot read property of undefined`

### 3. Workspace Context

Ask Copilot questions about your entire project:
- "What authentication pattern am I using in this project?"
- "Generate a new endpoint following the pattern in routes/tasks.js"
- "Create tests similar to the ones in tests/auth.test.js"

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

1. **Create User Model**
   - Use Copilot to define user schema
   - Add password hashing
   
   💡 **Try this prompt in Copilot Chat:**
   ```
   Create a User model with email, password (hashed), and timestamps. 
   Include methods for password hashing and verification using bcrypt.
   ```

2. **Implement Registration**
   - Create `/api/auth/register` endpoint
   - Validate email format and password strength
   - Hash passwords before saving
   
   💡 **Comment-driven development:**
   ```javascript
   // POST /api/auth/register
   // Validate email and password, hash password, create user, return success
   ```

3. **Implement Login**
   - Create `/api/auth/login` endpoint
   - Verify credentials
   - Generate JWT token
   
   💡 **Use the pattern:**
   ```
   Ask Copilot: "Generate login endpoint that validates credentials 
   and returns a JWT token with 24-hour expiration"
   ```

4. **Test Authentication**
   - Use `/test` command on your auth functions
   - Run tests: `npm test` or `pytest`

### Phase 3: Task Management (30 min)

1. **Create Task Model**
   ```
   Prompt: "Create a Task model with title (required), description, 
   status (todo/in-progress/done), priority (low/medium/high), 
   due_date, and user_id as foreign key"
   ```

2. **Implement CRUD Endpoints**
   
   Start with comments, let Copilot generate code:
   ```javascript
   // GET /api/tasks - Get all tasks for authenticated user with filtering
   // POST /api/tasks - Create new task with validation
   // GET /api/tasks/:id - Get specific task
   // PUT /api/tasks/:id - Update task
   // DELETE /api/tasks/:id - Delete task
   // PATCH /api/tasks/:id/complete - Mark task as complete
   ```

3. **Add Filtering and Search**
   ```
   Ask Copilot: "Add query parameters to filter tasks by status and priority,
   and search by title or description"
   ```

4. **Add Pagination**
   ```
   "Implement pagination with page and limit query parameters, 
   return total count and page info"
   ```

### Phase 4: Testing (15 min)

1. **Generate Unit Tests**
   - Highlight each function
   - Use `/test` in Copilot Chat
   - Review and customize generated tests

2. **Create Integration Tests**
   ```
   Ask: "Create integration tests for the task CRUD endpoints,
   including authentication flow"
   ```

3. **Run Test Suite**
   ```bash
   npm test -- --coverage
   # or
   pytest --cov
   ```

### Phase 5: Documentation (10 min)

1. **Generate API Documentation**
   ```
   Ask Copilot: "Generate OpenAPI/Swagger documentation for all endpoints"
   ```

2. **Add README**
   - Use `/doc` command on main file
   - Document API endpoints, setup instructions

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

If you finish early, try these:

1. **Task Assignment**: Add ability to assign tasks to other users
2. **Task Comments**: Add commenting system for tasks
3. **File Uploads**: Allow attaching files to tasks
4. **Email Notifications**: Send reminders for due tasks
5. **Rate Limiting**: Implement rate limiting for API endpoints
6. **WebSocket Support**: Real-time task updates

## 🧪 Testing Your API

Use the provided test scripts:

```bash
# Test all endpoints
node test-api.js
# or
python test_api.py
```

Or use tools like:
- Postman
- Thunder Client (VS Code extension)
- cURL commands

## 📊 Success Metrics

Rate your experience:
- How much code did Copilot generate vs manual? ____%
- How many times did you use chat commands? _____
- Most useful Copilot feature? _______________
- Time saved (estimated)? _____ minutes

## 🎓 Key Learnings

Document your discoveries:
1. What prompts worked best?
2. When did Copilot suggestions need modification?
3. How did workspace context help?
4. Any surprising capabilities?

## 📚 Resources

- [Express.js Documentation](https://expressjs.com/)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [JWT Authentication Guide](../docs/jwt-auth.md)
- [Copilot Chat Commands](../docs/chat-modes.md)

---

**Need Help?**
- Ask Copilot! Use chat to debug issues
- Check the `/docs` folder for guides
- Review the solution in `/solutions/challenge-1/`

Good luck! 🚀
