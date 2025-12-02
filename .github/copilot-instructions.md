# GitHub Copilot for Enterprise Hackathon

## Project Organization

This repository contains materials for a GitHub Copilot for Enterprise hackathon. The content is organized into **role-based tracks** and **hands-on challenges**.

## Directory Structure

```
├── tracks/                    # Role-based learning paths
│   ├── backend-developer-track.md
│   ├── frontend-developer-track.md
│   ├── devops-platform-track.md
│   ├── data-science-ml-track.md
│   ├── full-stack-developer-track.md
│   ├── qa-tester-track.md
│   └── README.md
│
├── challenges/                # Hands-on coding challenges
│   ├── challenge-1-web-api/       → Backend Track
│   ├── challenge-2-ml-ai/         → Data Science Track
│   ├── challenge-3-devops/        → DevOps Track
│   ├── challenge-4-frontend/      → Frontend Track
│   ├── challenge-5-fullstack-mcp/ → (Advanced/Optional)
│   └── challenge-6-qa/            → QA Tester Track
│
├── docs/                      # Documentation and guides
│   ├── best-practices.md
│   ├── chat-modes.md
│   ├── copilot-basics.md
│   ├── mcp-servers.md
│   └── prompt-engineering.md
│
└── .devcontainer/             # DevContainer configurations
```

## Track-Challenge Mapping

Each track has a dedicated challenge. **Keep tracks and challenges in sync!**

| Track | Primary Challenge | Focus |
|-------|-------------------|-------|
| Backend Developer | Challenge 1 (web-api) | REST API development |
| Frontend Developer | Challenge 4 (frontend) | React/TypeScript UI |
| DevOps & Platform | Challenge 3 (devops) | Terraform, Docker, K8s |
| Data Science & ML | Challenge 2 (ml-ai) | Jupyter notebooks, ML |
| Full-Stack Developer | Challenge 1 + 4 | API + Frontend integration |
| QA Tester | Challenge 6 (qa) | Test automation, Playwright MCP |

## Important Guidelines

### Keeping Content in Sync

When modifying tracks or challenges:

1. **Track changes** → Update the corresponding challenge README
2. **Challenge changes** → Update the track that references it
3. **New features** → Add to both track and challenge documentation
4. **Duration changes** → Sync across track, challenge, and README.md

### Cloud Provider

This hackathon uses **Azure** as the cloud provider. Do not reference AWS, GCP, or other cloud providers.

### Technology Stack

- **Backend**: Node.js/Express or Python/FastAPI
- **Frontend**: React with TypeScript
- **Infrastructure**: Terraform (Azure), Docker, Kubernetes
- **ML/AI**: Python, pandas, scikit-learn, Jupyter
- **Testing**: Jest, Pytest, Playwright

## Coding Standards

### General

- Follow language-specific best practices
- Include error handling in all code examples
- Add input validation for API endpoints
- Write tests for all new functionality

### Documentation

- Use clear, descriptive headings
- Include code examples with language tags
- Provide step-by-step instructions
- Add "Copilot Tips" sections showing effective prompts

### Challenges

- Each challenge should be completable in 4-6 hours
- Provide starter code and clear objectives
- Include success metrics/checkboxes
- Add bonus challenges for advanced participants
