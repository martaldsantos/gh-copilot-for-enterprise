#!/bin/bash

# ============================================================================
# GitHub Copilot Hackathon - Challenge Setup Script
# ============================================================================
# This script helps you set up a fresh workspace for your chosen challenge.
# It copies the necessary files and creates a proper project structure.
# ============================================================================

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
HACKATHON_ROOT="$(dirname "$SCRIPT_DIR")"

echo -e "${CYAN}"
echo "╔════════════════════════════════════════════════════════════════════╗"
echo "║       🚀 GitHub Copilot Hackathon - Challenge Setup                ║"
echo "╚════════════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

# Show challenge options
echo -e "${YELLOW}Available Challenges:${NC}"
echo ""
echo -e "  ${GREEN}1${NC} - Web API Development (Node.js/Express or Python/FastAPI)"
echo -e "  ${GREEN}2${NC} - ML/AI Data Analysis (Python/Jupyter)"
echo -e "  ${GREEN}3${NC} - DevOps Infrastructure as Code (Terraform/Docker/K8s)"
echo -e "  ${GREEN}4${NC} - Frontend Development (React/TypeScript)"
echo -e "  ${GREEN}5${NC} - QA & Test Automation (Playwright)"
echo ""

# Prompt for challenge selection
read -p "Select a challenge (1-5): " CHALLENGE

# Validate input
if ! [[ "$CHALLENGE" =~ ^[1-5]$ ]]; then
    echo -e "${RED}Error: Invalid selection. Please enter a number between 1 and 5.${NC}"
    exit 1
fi

# For challenge 1, ask about stack preference
STACK=""
if [ "$CHALLENGE" == "1" ]; then
    echo ""
    echo -e "${YELLOW}Choose your stack:${NC}"
    echo -e "  ${GREEN}a${NC} - Node.js/Express"
    echo -e "  ${GREEN}b${NC} - Python/FastAPI"
    read -p "Select stack (a/b): " STACK_CHOICE
    
    case $STACK_CHOICE in
        a|A) STACK="node-express" ;;
        b|B) STACK="python-fastapi" ;;
        *) echo -e "${RED}Invalid choice. Defaulting to Node.js/Express.${NC}"; STACK="node-express" ;;
    esac
fi

# For challenge 5, ask about target app
QA_TARGET=""
if [ "$CHALLENGE" == "5" ]; then
    echo ""
    echo -e "${YELLOW}Choose your target application:${NC}"
    echo -e "  ${GREEN}a${NC} - Node.js/React (Jira Clone)"
    echo -e "  ${GREEN}b${NC} - Python/FastAPI (RealWorld API)"
    echo -e "  ${GREEN}c${NC} - Java/Spring (PetClinic)"
    read -p "Select target (a/b/c): " QA_CHOICE
    
    case $QA_CHOICE in
        a|A) QA_TARGET="node-react" ;;
        b|B) QA_TARGET="python-fastapi" ;;
        c|C) QA_TARGET="java-spring" ;;
        *) echo -e "${RED}Invalid choice. Defaulting to Node.js/React.${NC}"; QA_TARGET="node-react" ;;
    esac
fi

# Get target directory
echo ""
read -p "Enter the path for your new project (default: ./my-copilot-challenge): " TARGET_DIR
TARGET_DIR="${TARGET_DIR:-./my-copilot-challenge}"

# Expand ~ to home directory
TARGET_DIR="${TARGET_DIR/#\~/$HOME}"

# Create target directory
if [ -d "$TARGET_DIR" ]; then
    echo -e "${YELLOW}Warning: Directory '$TARGET_DIR' already exists.${NC}"
    read -p "Do you want to continue and potentially overwrite files? (y/N): " CONFIRM
    if [[ ! "$CONFIRM" =~ ^[Yy]$ ]]; then
        echo -e "${RED}Setup cancelled.${NC}"
        exit 1
    fi
fi

mkdir -p "$TARGET_DIR"
cd "$TARGET_DIR"
TARGET_DIR=$(pwd)

echo ""
echo -e "${BLUE}Setting up Challenge $CHALLENGE in: $TARGET_DIR${NC}"
echo ""

# Copy challenge files based on selection
case $CHALLENGE in
    1)
        CHALLENGE_NAME="Web API Development"
        echo -e "${GREEN}Copying Web API challenge files...${NC}"
        
        if [ "$STACK" == "node-express" ]; then
            cp -r "$HACKATHON_ROOT/challenges/challenge-1-web-api/node-express/"* .
        else
            cp -r "$HACKATHON_ROOT/challenges/challenge-1-web-api/python-fastapi/"* .
        fi
        
        cp "$HACKATHON_ROOT/challenges/challenge-1-web-api/README.md" ./CHALLENGE.md
        cp -r "$HACKATHON_ROOT/.devcontainer" .
        ;;
    2)
        CHALLENGE_NAME="ML/AI Data Analysis"
        echo -e "${GREEN}Copying ML/AI challenge files...${NC}"
        
        cp -r "$HACKATHON_ROOT/challenges/challenge-2-ml-ai/"* .
        cp -r "$HACKATHON_ROOT/.devcontainer" .
        ;;
    3)
        CHALLENGE_NAME="DevOps Infrastructure"
        echo -e "${GREEN}Copying DevOps challenge files...${NC}"
        
        cp -r "$HACKATHON_ROOT/challenges/challenge-3-devops/"* .
        cp -r "$HACKATHON_ROOT/.devcontainer" .
        ;;
    4)
        CHALLENGE_NAME="Frontend Development"
        echo -e "${GREEN}Copying Frontend challenge files...${NC}"
        
        cp -r "$HACKATHON_ROOT/challenges/challenge-4-frontend/"* .
        cp -r "$HACKATHON_ROOT/.devcontainer" .
        ;;
    5)
        CHALLENGE_NAME="QA & Test Automation"
        echo -e "${GREEN}Copying QA challenge files...${NC}"
        
        cp -r "$HACKATHON_ROOT/challenges/challenge-5-qa/"* .
        
        # Copy appropriate DevContainer config
        mkdir -p .devcontainer
        cp -r "$HACKATHON_ROOT/.devcontainer/qa-$QA_TARGET/"* .devcontainer/ 2>/dev/null || \
            cp -r "$HACKATHON_ROOT/.devcontainer/"* .
        ;;
esac

# Create .github directory with copilot instructions
mkdir -p .github

# Generate copilot-instructions.md based on challenge
case $CHALLENGE in
    1)
        cat > .github/copilot-instructions.md << 'EOF'
# Copilot Instructions for Web API Development

## Project Context
- Building a REST API for task management
- Framework: Express.js (Node) or FastAPI (Python)
- Features: Authentication, CRUD operations, filtering, pagination

## Coding Standards
- Follow RESTful API conventions
- Use proper HTTP status codes
- Implement input validation
- Include comprehensive error handling
- Write tests for all endpoints

## API Patterns
- Use JWT for authentication
- Implement middleware for auth checks
- Use consistent response formats
- Document endpoints with OpenAPI/Swagger
EOF
        ;;
    2)
        cat > .github/copilot-instructions.md << 'EOF'
# Copilot Instructions for ML/AI Development

## Project Context
- Customer churn prediction using machine learning
- Python with pandas, numpy, scikit-learn
- Jupyter Notebook workflow

## Data Science Standards
- Follow EDA best practices
- Document all preprocessing steps
- Use cross-validation for model selection
- Include feature importance analysis
- Generate actionable business insights

## Code Quality
- Use descriptive variable names
- Comment complex transformations
- Include visualization for findings
- Follow PEP 8 style guidelines
EOF
        ;;
    3)
        cat > .github/copilot-instructions.md << 'EOF'
# Copilot Instructions for DevOps/Infrastructure

## Project Context
- Cloud infrastructure using Terraform (Azure)
- Docker containerization
- Kubernetes deployment

## Infrastructure Standards
- Use Azure as the cloud provider (not AWS/GCP)
- Follow infrastructure as code best practices
- Implement proper security groups and networking
- Use remote state for Terraform
- Include resource tagging

## Security
- Never commit secrets or credentials
- Use managed identities where possible
- Implement least-privilege access
- Enable encryption at rest and in transit
EOF
        ;;
    4)
        cat > .github/copilot-instructions.md << 'EOF'
# Copilot Instructions for Frontend Development

## Project Context
- Task Dashboard application
- React 18 with TypeScript
- Tailwind CSS for styling
- Vite for build tooling

## Component Standards
- Use functional components with hooks
- Implement proper TypeScript types (no `any`)
- Follow accessibility guidelines (WCAG 2.1 AA)
- Create reusable, composable components

## State Management
- Use React Query for server state
- Use React hooks for local state
- Implement proper loading and error states
EOF
        ;;
    5)
        cat > .github/copilot-instructions.md << 'EOF'
# Copilot Instructions for QA & Test Automation

## Project Context
- Testing real-world open-source applications
- Using Playwright for E2E testing
- Implementing comprehensive test coverage

## Testing Standards
- Follow AAA pattern (Arrange, Act, Assert)
- Use Page Object Model for maintainability
- Include positive and negative test cases
- Mock external dependencies in unit tests

## Playwright Best Practices
- Use proper waits (avoid arbitrary timeouts)
- Take screenshots on failure
- Test across multiple browsers
- Use data-testid attributes when available
EOF
        ;;
esac

# Copy documentation
mkdir -p docs
cp "$HACKATHON_ROOT/docs/best-practices.md" docs/ 2>/dev/null || true
cp "$HACKATHON_ROOT/docs/prompt-engineering.md" docs/ 2>/dev/null || true
cp "$HACKATHON_ROOT/docs/copilot-basics.md" docs/ 2>/dev/null || true

# Initialize git if not already a repo
if [ ! -d ".git" ]; then
    git init
    echo -e "${GREEN}Initialized git repository${NC}"
fi

# Create .gitignore
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
__pycache__/
*.pyc
.venv/
venv/

# Build outputs
dist/
build/
*.egg-info/

# IDE
.idea/
*.swp
*.swo

# Environment
.env
.env.local
*.local

# OS
.DS_Store
Thumbs.db

# Test outputs
coverage/
.pytest_cache/
test-results/
playwright-report/

# Terraform
*.tfstate
*.tfstate.backup
.terraform/
EOF

echo ""
echo -e "${GREEN}╔════════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║                    ✅ Setup Complete!                              ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${CYAN}Challenge:${NC} $CHALLENGE_NAME"
echo -e "${CYAN}Location:${NC} $TARGET_DIR"
echo ""
echo -e "${YELLOW}Next Steps:${NC}"
echo ""
echo "  1. Open the project in VS Code:"
echo -e "     ${BLUE}code $TARGET_DIR${NC}"
echo ""
echo "  2. When prompted, click 'Reopen in Container' for DevContainer"
echo "     (or press F1 → 'Dev Containers: Reopen in Container')"
echo ""
echo "  3. Read the challenge instructions:"
if [ "$CHALLENGE" == "1" ]; then
    echo -e "     ${BLUE}CHALLENGE.md${NC}"
else
    echo -e "     ${BLUE}README.md${NC}"
fi
echo ""
echo "  4. Start coding with GitHub Copilot! 🚀"
echo ""
echo -e "${GREEN}Happy Hacking! 🎉${NC}"
