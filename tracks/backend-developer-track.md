# Backend Developer Track 🌐

**Duration:** 6-8 hours  
**Difficulty:** Beginner to Intermediate  
**Focus:** Building robust APIs and backend services with GitHub Copilot

## 🎯 Track Overview

This track is designed for backend and web developers who want to master GitHub Copilot for API development, testing, and backend architecture. You'll learn how to use Copilot to accelerate development of REST APIs, implement authentication, and create comprehensive test suites.

## 👥 Who Is This For?

- Backend Engineers
- API Developers
- Web Service Developers
- Software Engineers focused on server-side development

## 📋 Prerequisites

- Basic knowledge of REST APIs
- Familiarity with either JavaScript/Node.js or Python
- Understanding of HTTP methods and status codes
- Basic testing concepts

## 🛠️ Technology Stack

You'll work with:
- **Node.js** with Express.js OR **Python** with FastAPI
- JWT for authentication
- Testing frameworks (Jest/Mocha or pytest)
- OpenAPI/Swagger for documentation

## ⚡ First Steps: Set Up Your Workspace

### 1. Configure Copilot Context (CRITICAL)

The file `.github/copilot-instructions.md` currently contains instructions for the hackathon organizers. **You must overwrite this file** with instructions relevant to your specific project.

1. Open `.github/copilot-instructions.md`.
2. **Delete its entire contents.**
3. Use the example below as a starting point for your new instructions.

> 💡 **Why?** If you don't do this, Copilot will think it's helping organize a hackathon instead of helping you write code!

### 2. Navigate to Your Challenge

Open the folder `challenges/challenge-1-web-api/` in your workspace. This is where you will be working.

---

### 3. Create Your Custom Instructions

This file tells Copilot about your project context and coding preferences. **Your goal is to create your own custom instructions file.**

**What to include:**
- Project context (framework, language, architecture)
- Coding standards and conventions for your team
- Testing requirements and coverage goals
- API patterns and authentication approach

> 💡 **Looking for examples?** Check out the [github/awesome-copilot](https://github.com/github/awesome-copilot) repository for real-world examples of custom instruction files and best practices.

### 2. Create Custom Agents (`.github/agents/`)

Create specialized agents for different tasks. **Your goal is to create agents that match your workflow.**

**Agents to consider creating:**
- **API Developer Agent** - An expert in REST API design, authentication patterns, and error handling
- **Test Writer Agent** - Specialized in generating comprehensive tests with high coverage
- **Code Reviewer Agent** - Focused on code quality, security, and best practices

**What to include in each agent:**
- Clear description of the agent's expertise
- Specific instructions for code generation
- References to your project's patterns and conventions

> 💡 **Looking for examples?** Check out the [github/awesome-copilot](https://github.com/github/awesome-copilot) repository for custom agent templates and ideas.
>
> **Tip**: Reference your agents in chat using `@agent-name` to get specialized assistance!

---

## 🗺️ Track Structure

### Your Challenge: Web Development - REST API Builder
**Duration:** 4-6 hours  
**Focus:** Core backend skills

#### 🎯 Objective

Build a fully functional REST API for a task management system using GitHub Copilot's **Agent mode**. Learn how to leverage Copilot's agentic capabilities to create multi-file implementations, run tests automatically, and iterate on your code.

#### 📋 Requirements

Build a Task Management API with the following features:

**Core Features**
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

**Quality Requirements**
- Comprehensive error handling
- Input validation
- API documentation (OpenAPI/Swagger)
- Unit tests (>80% coverage)
- Integration tests for key endpoints

#### 🚀 Getting Started

1. **Choose Your Stack**: Navigate to `challenges/challenge-1-web-api/` and choose either `node-express` or `python-fastapi`.
2. **Review Starter Code**: Open the starter files (`app.js` or `main.py`, `models/`) to understand the structure.
3. **Start Building**: Use Copilot to implement the features.

#### 💡 Copilot Tips

- **Use Agent Mode**: Open Chat View (`Ctrl+Alt+I`) and select **Agent** to create multi-file implementations.
- **Iterate**: Ask Copilot to "Create a user authentication system" and then refine it.
- **Test**: Use Copilot to generate tests for your new endpoints.

**Copilot Skills You'll Learn:**
- Inline code completion for rapid API development
- `/tests` command for generating test cases
- `/explain` to understand generated patterns
- Natural language prompts for API documentation
- Workspace-aware prompts for consistent patterns

📖 [Start Challenge 1](../challenges/challenge-1-web-api/)

## ⏱️ Recommended Schedule

### Full Day (6 hours)

```
09:00 - 09:30   Setup & First Steps (agents, copilot-instructions)
09:30 - 10:30   API Design & Core Endpoints
10:30 - 10:45   Break
10:45 - 12:00   Authentication & Authorization
12:00 - 13:00   Lunch
13:00 - 14:30   Data Layer & Validation
14:30 - 14:45   Break
14:45 - 16:00   Testing & Documentation
16:00 - 16:30   Review & Showcase
```

### Half Day (4 hours)

```
09:00 - 09:30   Setup & First Steps
09:30 - 11:00   API Design & Core Endpoints
11:00 - 11:15   Break
11:15 - 12:30   Authentication & Testing
12:30 - 13:00   Review & Wrap-up
```

## 🎓 Learning Outcomes

By completing this track, you will:

### Technical Skills

- ✅ Build production-ready REST APIs with authentication
- ✅ Implement comprehensive error handling and validation
- ✅ Create automated test suites with high coverage
- ✅ Design clean API architecture
- ✅ Write clear API documentation

### Copilot Mastery

- ✅ Use inline suggestions effectively for backend code
- ✅ Generate tests automatically with `/tests`
- ✅ Debug issues efficiently with `/fix`
- ✅ Document code and APIs using natural language prompts
- ✅ Leverage workspace context for consistent patterns
- ✅ Create and use MCP servers (advanced)

## 💡 Track-Specific Tips

### 1. API Development with Copilot

**Write descriptive comments:**
```javascript
// POST /api/users - Create a new user with email validation
// Hash password using bcrypt, return JWT token
// Return 400 if email already exists
```

**Use workspace patterns:**
- "Create an endpoint following the pattern in routes/auth.js"
- "Add error handling similar to other routes"

### 2. Testing Strategy

**Generate comprehensive tests:**
1. Highlight your API function
2. Use `/tests create unit and integration tests`
3. Review and customize for edge cases

**Prompt examples:**
- "Create integration tests for the auth flow"
- "Add tests for error cases and validation"

### 3. Infrastructure Automation

**Let Copilot handle configuration:**
```
"Create a Dockerfile for a Node.js Express app with:
- Multi-stage build
- Non-root user
- Optimized layer caching"
```

## 📊 Success Metrics

Track your progress:
- [ ] Completed Challenge 1 with all endpoints working
- [ ] Achieved >80% test coverage
- [ ] Successfully containerized application
- [ ] Set up working CI/CD pipeline
- [ ] Used all major chat commands (`/explain`, `/fix`, `/tests`)
- [ ] Can explain productivity gains from Copilot

## 🚀 Getting Started

1. **Review Prerequisites**: Ensure you have the required knowledge
2. **Set Up Environment**: Launch your Codespace or local environment
3. **Start with Challenge 1**: Begin with the REST API challenge
4. **Follow the Flow**: Complete challenges in the recommended order
5. **Track Progress**: Use the checklist above

## 📚 Additional Resources

### Backend Development
- [API Design Best Practices](../docs/best-practices.md)
- [Prompt Engineering Guide](../docs/prompt-engineering.md)
- [Chat Modes Reference](../docs/chat-modes.md)

### For Facilitators
- See [Facilitator Guide](../FACILITATOR_GUIDE.md) for backend track guidance
- Backend track is suitable for beginners with programming experience

## 🤝 Need Help?

- **Stuck on a challenge?** Ask Copilot Chat for guidance
- **Technical issues?** Check [Troubleshooting Guide](../TROUBLESHOOTING.md)
- **Questions?** Consult your facilitator or team

---

**Ready to build with Copilot?** Start with [Challenge 1: REST API](../challenges/challenge-1-web-api/README.md) 🚀
