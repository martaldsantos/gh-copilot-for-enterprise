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
│   └── challenge-5-qa/            → QA Tester Track
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
| QA Tester | Challenge 5 (qa) | Test automation, Playwright MCP |

## Important Guidelines

### Keeping Content in Sync

When modifying tracks or challenges:

1. **Track changes** → Update the corresponding challenge README
2. **Challenge changes** → Update the track that references it
3. **New features** → Add to both track and challenge documentation
4. **Duration changes** → Sync across track, challenge, and README.md
5. **Root README.md** → Always keep `/README.md` updated with any structural changes, new tracks, challenge updates, or feature additions

> ⚠️ **Critical:** The root `README.md` is the entry point for all participants. Any changes to tracks, challenges, or documentation structure **must** be reflected there.

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

## ⚠️ Participant Workspace Setup (Critical)

### Important: This Repository Contains Hackathon Instructions for Copilot

This repository has a `.github/copilot-instructions.md` file that provides context to GitHub Copilot about the **hackathon structure itself**—not about participant projects.

### Recommended Approach for Participants

**Participants should NOT work directly in this repository.** Instead:

1. **Create a fresh repository** for your challenge work
2. **Copy only the needed files** from this repo:
   - The `.devcontainer/` folder (for consistent development environment)
   - The challenge starter code (e.g., `challenges/challenge-1-web-api/node-express/`)
   - Any relevant documentation files
3. **Create your own `.github/copilot-instructions.md`** customized for your project (see the track guides for examples)
4. **Delete or do not copy** this repository's `.github/copilot-instructions.md` as it will confuse Copilot about your project context

### Why This Matters

If participants work directly in this repository without customizing the Copilot instructions:
- Copilot will receive context about "hackathon organization" instead of the participant's actual project
- Code suggestions may be influenced by the hackathon's documentation structure
- Participants won't get the full benefit of project-specific Copilot customization

### Each Track Should Instruct Participants To:

1. Start with a fresh repository or fork
2. Copy the `.devcontainer/` folder for environment consistency
3. Copy their challenge's starter code
4. Create a custom `.github/copilot-instructions.md` (examples provided in each track)
5. Optionally create custom agents in `.github/agents/`
