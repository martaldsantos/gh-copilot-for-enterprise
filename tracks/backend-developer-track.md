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

## ⚡ First Steps: Configure Your AI Environment

**Before starting any challenge**, set up your personalized Copilot environment:

### 1. Create a `.github/copilot-instructions.md` File

This file tells Copilot about your project context and coding preferences.

```markdown
# Copilot Instructions for Backend Development

## Project Context
- This is a REST API project using [Node.js/Express OR Python/FastAPI]
- We follow RESTful conventions and use JWT for authentication
- Database: PostgreSQL with [TypeORM/SQLAlchemy]

## Coding Standards
- Use async/await for all asynchronous operations
- All endpoints must have input validation
- Include JSDoc/docstrings for all functions
- Follow the existing error handling patterns

## Testing Requirements
- Write unit tests for all service functions
- Include integration tests for API endpoints
- Aim for >80% code coverage
```

### 2. Create Custom Agents (`.github/agents/`)

Create specialized agents for different tasks:

**`.github/agents/api-developer.md`**:
```markdown
# API Developer Agent

You are an expert backend developer specializing in REST APIs.

## Your Expertise
- RESTful API design and best practices
- Authentication and authorization (JWT, OAuth)
- Database design and optimization
- Input validation and error handling

## When Generating Code
- Always include proper error handling
- Add input validation for all endpoints
- Include appropriate HTTP status codes
- Generate OpenAPI/Swagger documentation
```

**`.github/agents/test-writer.md`**:
```markdown
# Test Writer Agent

You are an expert in writing comprehensive tests.

## Your Focus
- Unit tests with high coverage
- Integration tests for API endpoints
- Mock external dependencies
- Test edge cases and error scenarios
```

> 💡 **Tip**: Reference your agents in chat using `@agent-name` to get specialized assistance!

---

## 🗺️ Track Structure

### Your Challenge: Web Development - REST API Builder
**Duration:** 4-6 hours  
**Focus:** Core backend skills

> 🎯 **This is YOUR dedicated challenge.** Focus entirely on backend development without needing frontend, DevOps, or data science knowledge.

Build a complete task management API with:
- User authentication (JWT)
- CRUD operations for tasks and users
- Input validation and sanitization
- Comprehensive error handling
- Database integration
- API documentation (OpenAPI/Swagger)
- Unit and integration testing

**Copilot Skills You'll Learn:**
- Inline code completion for rapid API development
- `/tests` command for generating test cases
- `/explain` to understand generated patterns
- `/doc` for API documentation
- Workspace-aware prompts for consistent patterns

📖 [Start Challenge 1](../challenges/challenge-1-web-api/README.md)

## ⏱️ Recommended Schedule

### Full Day (6 hours)

```
09:00 - 09:30   Setup & First Steps (agents, copilot-instructions)
09:30 - 10:30   API Design & Core Endpoints
10:30 - 10:45   Break
10:45 - 12:00   Authentication & Authorization
12:00 - 13:00   Lunch
13:00 - 14:30   Database Integration & Validation
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
- ✅ Document code and APIs with `/doc`
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
- [ ] Used all major chat commands (`/explain`, `/fix`, `/tests`, `/doc`)
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
