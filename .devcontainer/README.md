# DevContainer Configurations 🐳

This folder contains DevContainer configurations for the GitHub Copilot Hackathon. DevContainers provide consistent, pre-configured development environments that work across all operating systems.

## 📦 Available Configurations

### Main Configuration (Default)

**File**: `devcontainer.json`

The default configuration suitable for most challenges. Includes:

| Feature | Version | Purpose |
|---------|---------|---------|
| Node.js | LTS | Backend/Frontend development |
| Python | 3.11 | ML/AI and API development |
| Docker-in-Docker | Latest | Container building |
| Terraform | Latest | Infrastructure as Code |
| Kubernetes tools | Latest | K8s manifest development |

**Pre-installed VS Code Extensions**:
- GitHub Copilot & Copilot Chat
- Python (Pylance, Jupyter)
- ESLint & Prettier
- Docker
- Terraform
- YAML support

**Use for**:
- ✅ Challenge 1: Web API (Node.js or Python)
- ✅ Challenge 2: ML/AI (Python/Jupyter)
- ✅ Challenge 3: DevOps (Terraform/Docker/K8s)
- ✅ Challenge 4: Frontend (React/TypeScript)

---

### QA-Specific Configurations

These configurations are designed for **Challenge 5: QA & Test Automation**, where you work with real-world open-source applications.

#### 🟢 qa-node-react

**Folder**: `qa-node-react/`

For testing **Node.js/React applications** (like Jira Clone).

Includes:
- Node.js LTS with npm/yarn
- Playwright pre-installed
- Jest and testing utilities
- React DevTools support

**Usage**:
```bash
# From the hackathon repo root
cp -r .devcontainer/qa-node-react/. your-qa-project/.devcontainer/
```

#### 🔵 qa-python-fastapi

**Folder**: `qa-python-fastapi/`

For testing **Python/FastAPI applications**.

Includes:
- Python 3.11 with pip
- Pytest and pytest-playwright
- FastAPI development tools
- Database testing utilities

**Usage**:
```bash
# From the hackathon repo root
cp -r .devcontainer/qa-python-fastapi/. your-qa-project/.devcontainer/
```

#### 🟠 qa-java-spring

**Folder**: `qa-java-spring/`

For testing **Java/Spring applications** (like Spring PetClinic).

Includes:
- Java 17 (OpenJDK)
- Maven and Gradle
- JUnit 5 and Playwright Java
- Spring Boot tools

**Usage**:
```bash
# From the hackathon repo root
cp -r .devcontainer/qa-java-spring/. your-qa-project/.devcontainer/
```

---

## 🚀 Quick Start

### Option 1: GitHub Codespaces (Recommended)

1. Click the green **"Code"** button on the repository
2. Select **"Codespaces"** tab
3. Click **"Create codespace on main"**
4. Wait for the environment to build (~2-3 minutes)

### Option 2: VS Code with Docker

**Prerequisites**:
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [VS Code](https://code.visualstudio.com/)
- [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

**Steps**:
1. Clone the repository
2. Open in VS Code
3. When prompted, click **"Reopen in Container"**
   - Or press `F1` → "Dev Containers: Reopen in Container"
4. Wait for the build to complete

---

## 📁 File Structure

```
.devcontainer/
├── devcontainer.json     # Main configuration (Challenges 1-4)
├── post-create.sh        # Setup script run after container creation
├── README.md             # This file
├── qa-node-react/        # QA config for Node.js/React apps
│   └── devcontainer.json
├── qa-python-fastapi/    # QA config for Python/FastAPI apps
│   └── devcontainer.json
└── qa-java-spring/       # QA config for Java/Spring apps
    └── devcontainer.json
```

---

## ⚙️ Customization

### Adding Extensions

Edit the `customizations.vscode.extensions` array in `devcontainer.json`:

```json
"customizations": {
  "vscode": {
    "extensions": [
      "your.extension-id"
    ]
  }
}
```

### Adding System Packages

Modify `post-create.sh` to install additional packages:

```bash
# Add to post-create.sh
sudo apt-get update && sudo apt-get install -y your-package
```

### Environment Variables

Add to `devcontainer.json`:

```json
"containerEnv": {
  "MY_VAR": "my-value"
}
```

---

## 🔧 Troubleshooting

### Container fails to build

1. Ensure Docker is running
2. Try rebuilding: `F1` → "Dev Containers: Rebuild Container"
3. Check Docker has sufficient resources (4GB+ RAM recommended)

### Extensions not loading

1. Wait for post-create script to complete
2. Reload VS Code window: `F1` → "Developer: Reload Window"

### Port not accessible

1. Check the "Ports" tab in VS Code
2. Ensure the port is forwarded (click "Forward a Port")

### Python/Node version issues

1. Use `python --version` or `node --version` to check
2. The DevContainer uses specific versions for consistency

---

## 📚 Resources

- [DevContainer Documentation](https://containers.dev/)
- [VS Code Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers)
- [GitHub Codespaces](https://docs.github.com/en/codespaces)

---

**Need Help?** Check the main [TROUBLESHOOTING.md](../TROUBLESHOOTING.md) guide.
