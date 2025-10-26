#!/bin/bash

echo "🚀 Setting up GitHub Copilot Hackathon Environment..."

# Install Python dependencies
pip install --upgrade pip
pip install jupyter pandas numpy scikit-learn matplotlib seaborn pytest flask fastapi uvicorn

# Install Node.js dependencies globally
npm install -g typescript ts-node nodemon @modelcontextprotocol/sdk

# Create workspace directories
mkdir -p /workspaces/gh-copilot-for-enterprise/workspace

echo "✅ Environment setup complete!"
echo "📚 Welcome to the GitHub Copilot Hackathon!"
echo ""
echo "Available challenges:"
echo "  1. Web Development - REST API with Express/FastAPI"
echo "  2. ML/AI - Data Analysis and Model Development"
echo "  3. DevOps - Infrastructure as Code with Terraform"
echo "  4. Frontend - Interactive UI Components with React"
echo "  5. Full Stack - Integration with MCP Servers"
echo ""
echo "Check out the README.md for detailed instructions!"
