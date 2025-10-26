# Quick Start Guide 🚀

Get up and running with the GitHub Copilot Hackathon in minutes!

## Option 1: GitHub Codespaces (Recommended) ☁️

**Fastest way to get started - everything pre-configured!**

### Steps:
1. **Open this repository** in your browser
2. Click the green **"Code"** button
3. Select **"Codespaces"** tab
4. Click **"Create codespace on main"** (or your branch)
5. Wait 2-3 minutes for setup ⏳
6. **You're ready!** Start with any challenge 🎉

The Codespace includes:
- ✅ VS Code in your browser
- ✅ GitHub Copilot pre-installed
- ✅ All required tools (Node.js, Python, Docker, etc.)
- ✅ Extensions configured

## Option 2: Local Development 💻

### Prerequisites
- VS Code installed
- GitHub Copilot extension
- Git
- Node.js 18+
- Python 3.11+
- Docker (optional, for Challenge 3)

### Steps:

1. **Clone the repository:**
```bash
git clone https://github.com/martaldsantos/gh-copilot-for-enterprise.git
cd gh-copilot-for-enterprise
```

2. **Install GitHub Copilot:**
- Open VS Code
- Go to Extensions (Ctrl+Shift+X)
- Search "GitHub Copilot"
- Install both:
  - GitHub Copilot
  - GitHub Copilot Chat
- Sign in when prompted

3. **Verify Copilot is working:**
- Create a test file: `test.js`
- Type: `// function to add two numbers`
- You should see suggestions appear!

4. **Choose a challenge** and navigate to its folder

## Verify Your Setup ✓

### Check Copilot Status
Look at the bottom-right of VS Code:
- ✅ Copilot icon should be visible
- ✅ Click it to see status
- ✅ Should say "Ready"

### Test Chat
1. Press `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Shift+I` (Mac)
2. Type: "Hello, are you working?"
3. Copilot should respond!

### Test Inline Suggestions
1. Create a new file
2. Type: `function calculateArea(`
3. Copilot should suggest parameters and implementation

## Choose Your First Challenge

### New to Copilot? Start here:
👉 **[Challenge 1: Web API](./challenges/challenge-1-web-api/README.md)**
- Beginner-friendly
- Learn core Copilot features
- Clear step-by-step guide

### Data Scientist/ML Engineer?
👉 **[Challenge 2: ML/AI](./challenges/challenge-2-ml-ai/README.md)**
- Copilot in Jupyter notebooks
- Data analysis workflow
- Model development

### DevOps/Platform Engineer?
👉 **[Challenge 3: Infrastructure](./challenges/challenge-3-devops/README.md)**
- Terraform and Docker
- Infrastructure as Code
- Kubernetes

### Frontend Developer?
👉 **[Challenge 4: React UI](./challenges/challenge-4-frontend/README.md)**
- React components
- TypeScript
- Modern UI development

### Want Advanced Features?
👉 **[Challenge 5: MCP Integration](./challenges/challenge-5-fullstack-mcp/README.md)**
- Model Context Protocol
- Full-stack development
- Advanced Copilot features

## First Steps in Your Challenge

1. **Read the Challenge README** completely
2. **Review starter code** provided
3. **Start with comments** - describe what you want
4. **Let Copilot suggest** code
5. **Review and test** all suggestions
6. **Use chat** when stuck: `Ctrl+Shift+I`

## Essential Copilot Commands

### Inline Suggestions
- `Tab` - Accept suggestion
- `Esc` - Dismiss
- `Alt+]` - Next suggestion
- `Alt+[` - Previous suggestion

### Chat Commands
- `/explain` - Understand code
- `/fix` - Debug issues
- `/test` - Generate tests
- `/doc` - Create documentation

### Getting Help
Open Copilot Chat (`Ctrl+Shift+I`) and ask:
- "How do I start this challenge?"
- "Explain this code to me"
- "What's the best way to implement X?"
- "Generate tests for this function"

## Learning Resources

Before diving in, check out:
- 📖 [Copilot Basics](./docs/copilot-basics.md) - Start here!
- 💬 [Chat Modes Guide](./docs/chat-modes.md)
- 🎯 [Prompt Engineering](./docs/prompt-engineering.md)
- 🔌 [MCP Servers](./docs/mcp-servers.md) (Advanced)

## Common Issues

### Copilot Not Suggesting?
1. Check status icon (bottom-right)
2. Ensure you're signed in
3. Restart VS Code
4. Check internet connection

### Wrong Suggestions?
1. Be more specific in your comments
2. Provide more context
3. Try chat instead: `Ctrl+Shift+I`
4. Cycle through alternatives: `Alt+]`

### Environment Issues?
- **Codespaces**: Rebuild container
- **Local**: Check tool versions match prerequisites

## Tips for Success

### 1. Write Clear Comments
```javascript
// ❌ Bad: "do stuff"
// ✅ Good: "Validate email format and return true if valid, false otherwise"
```

### 2. Use Chat Freely
Don't hesitate to ask Copilot:
- "What does this code do?"
- "How can I improve this?"
- "What's wrong with this implementation?"

### 3. Review Everything
- Understand all generated code
- Test thoroughly
- Don't blindly accept suggestions

### 4. Iterate
First suggestion not perfect?
- Refine your prompt
- Ask follow-up questions
- Try different approaches

### 5. Have Fun!
- Experiment
- Try features you haven't used
- Share discoveries with others

## Support & Help

### During Hackathon
- Ask facilitators
- Use team chat/Slack
- Help each other
- Consult the docs

### Technical Issues
1. Check this guide
2. Review challenge README
3. Ask Copilot in chat!
4. Reach out to facilitators

### Ideas & Feedback
- Found a bug? Open an issue
- Have suggestions? We want to hear them!
- Great discovery? Share with the group!

## Ready to Start? 🎉

1. ✅ Setup complete (Codespace or local)
2. ✅ Copilot working
3. ✅ Challenge selected
4. ✅ Documentation bookmarked

**You're all set!** Head to your chosen challenge and start building with Copilot!

---

**Quick Links:**
- [Main README](./README.md)
- [Challenge 1: Web API](./challenges/challenge-1-web-api/README.md)
- [Challenge 2: ML/AI](./challenges/challenge-2-ml-ai/README.md)
- [Challenge 3: DevOps](./challenges/challenge-3-devops/README.md)
- [Challenge 4: Frontend](./challenges/challenge-4-frontend/README.md)
- [Challenge 5: MCP](./challenges/challenge-5-fullstack-mcp/README.md)
- [Documentation](./docs/)

**Happy Hacking! 💻✨**
