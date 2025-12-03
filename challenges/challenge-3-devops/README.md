# Challenge 3: DevOps - Infrastructure as Code 🏗️

**Difficulty**: Intermediate  
**Duration**: 4-6 hours  
**Team**: DevOps Engineers, Platform Engineers

## 🎯 Objective

Design and implement cloud infrastructure using Terraform and containerize applications with Docker. Learn how GitHub Copilot's **Agent mode** can accelerate infrastructure coding, provide best practices, and help with complex multi-file configurations.

## 📚 What You'll Learn

- Using **Agent mode** for Infrastructure as Code
- Creating **custom agents** for DevOps workflows
- Using **prompt files** for reusable infrastructure patterns
- Leveraging `#` context mentions for precise guidance
- Multi-file infrastructure generation with Agent mode
- Security and compliance patterns

## 🛠️ Technology Stack

- **Terraform** - Infrastructure as Code
- **Docker** - Containerization
- **Kubernetes** - Container orchestration
- **GitHub Actions** - CI/CD
- **Azure** - Cloud platform

## 📋 Requirements

Build a complete infrastructure setup for a web application:

### Core Features

1. **Cloud Infrastructure (Terraform)**
   - Network configuration
   - Compute instances/containers
   - Load balancer
   - Database resources
   - Security groups/firewall rules
   - Storage buckets

2. **Containerization (Docker)**
   - Multi-stage Dockerfile
   - Docker Compose for local development
   - Optimized image size
   - Security best practices

3. **Kubernetes Deployment**
   - Deployment manifests
   - Service definitions
   - ConfigMaps and Secrets
   - Ingress configuration
   - Resource limits

4. **CI/CD Pipeline**
   - Automated testing
   - Container build and push
   - Infrastructure deployment
   - Rollback strategies

### Quality Requirements

- Infrastructure security best practices
- Cost optimization
- High availability setup
- Monitoring and logging
- Documentation

## 🚀 Getting Started

### Step 1: Azure Cloud Setup

This challenge uses Azure as the cloud platform.
Ensure you have access to an Azure subscription.

### Step 2: Review Starter Files

```bash
cd challenges/challenge-3-devops/
```

Structure:
```
├── terraform/
│   └── azure/
├── docker/
│   └── app/
└── kubernetes/
```

## 💡 Copilot Agentic Tips for This Challenge

### 1. Use Agent Mode for Multi-File Infrastructure

Open Chat View (`Ctrl+Alt+I`), select **Agent**, and ask:

```
Create a complete Terraform configuration for Azure with:
- Virtual Network with public and private subnets
- Network Security Groups for web, app, and database tiers
- Application Load Balancer
- Virtual Machine Scale Set
- Azure Database for PostgreSQL

Create separate files: main.tf, network.tf, security.tf, 
compute.tf, database.tf, outputs.tf, and variables.tf
```

Agent mode will create all files and show you its plan!

### 2. Create a DevOps Custom Agent

**Your goal:** Create a custom agent file at `.github/agents/devops-engineer.agent.md` that specializes in infrastructure as code.

**What your agent should do:**
- Follow security best practices for infrastructure
- Use modular Terraform patterns and proper state management
- Optimize Docker images for production environments
- Include resource limits and health checks in Kubernetes
- Validate configurations before applying

> 💡 **Looking for examples?** Check out the [github/awesome-copilot](https://github.com/github/awesome-copilot) repository for custom agent templates and ideas.

### 3. Use Context Mentions for Specific Guidance

```
Review #file:terraform/azure/main.tf and add 
monitoring resources using Azure Monitor, following 
the patterns from #codebase.
```

### 4. Create Reusable Prompt Files

**Your goal:** Create a prompt file at `.github/prompts/k8s-deploy.prompt.md` that helps you quickly generate Kubernetes manifests.

**What your prompt file should do:**
- Accept inputs for application name, replicas, and service type
- Generate Deployment with resource limits and health probes
- Include Service, ConfigMap, and HPA resources
- Follow Kubernetes best practices for security
- Validate manifests after creation

> 💡 **Looking for examples?** Check out the [github/awesome-copilot](https://github.com/github/awesome-copilot) repository for prompt file templates.

Once created, use it with: `/k8s-deploy`

### 5. Iterative Infrastructure Development

Have a conversation with Copilot:

```
You: Create a Terraform module for Azure VNet with subnets

[Agent creates network.tf]

You: Add network security groups for the subnets

[Agent updates files, adds NSG rules]

You: Check for any validation errors in the Terraform files

[Agent runs terraform validate, fixes issues]

You: Now add a PostgreSQL database in the private subnet

[Agent creates database.tf with proper configuration]
```

## 📝 Step-by-Step Guide

### Phase 1: Cloud Infrastructure with Terraform (30 min)

Use Agent mode with comprehensive prompts:

```
Create a complete Azure infrastructure with Terraform:

1. Provider Configuration (main.tf):
   - Azure provider with latest version
   - Backend for state in Azure Storage
   - Resource group named "webapp-rg" in East US

2. Network (network.tf):
   - VNet with CIDR 10.0.0.0/16
   - Public subnets: 10.0.1.0/24, 10.0.2.0/24 (2 zones)
   - Private subnets: 10.0.10.0/24, 10.0.11.0/24
   - NAT Gateway for outbound internet

3. Security (security.tf):
   - NSG for ALB: Allow HTTP/HTTPS from internet
   - NSG for App: Allow from ALB only
   - NSG for DB: Allow PostgreSQL from App only

4. Compute (compute.tf):
   - VM Scale Set with Standard_B1s
   - Ubuntu 22.04, min: 2, max: 6 instances
   - Custom data script to install Docker

5. Database (database.tf):
   - Azure Database for PostgreSQL Flexible Server
   - Zone-redundant, B_Standard_B1ms tier
   - Automated backups enabled

6. Variables and Outputs:
   - Create variables.tf with all configurable values
   - Create outputs.tf with important values

Run terraform validate when done to check for errors.
```

### Phase 2: Containerization with Docker (20 min)

```
Create optimized Docker configuration:

1. Multi-stage Dockerfile in docker/app/:
   - Stage 1: node:18-alpine for building
   - Stage 2: node:18-alpine for production
   - Install only production dependencies
   - Run as non-root user (node:node)
   - Optimize layer caching
   - Add HEALTHCHECK for /health endpoint

2. Create docker-compose.yml:
   - App service building from Dockerfile
   - PostgreSQL 15 service
   - Redis 7 for caching
   - Proper networking
   - Volume mounts for development

3. Create .dockerignore:
   - Exclude node_modules, .git, logs
   - Exclude development files

Add OCI labels for metadata.
```

### Phase 3: Kubernetes Manifests (25 min)

```
Create Kubernetes manifests in kubernetes/:

1. deployment.yaml:
   - 3 replicas
   - Resource limits: CPU 200m, Memory 256Mi
   - Liveness probe: GET /health every 10s
   - Readiness probe: GET /ready every 5s
   - Rolling update: maxSurge 1, maxUnavailable 0
   - Security context: runAsNonRoot

2. service.yaml:
   - ClusterIP service for internal
   - LoadBalancer service for external
   - Port 80 → 8080

3. configmap.yaml:
   - Environment variables for app config
   - Non-sensitive configuration only

4. secret.yaml:
   - Database credentials (use placeholder values)
   - Template for actual secrets

5. hpa.yaml:
   - Min 3, Max 10 replicas
   - Target 70% CPU utilization

6. ingress.yaml:
   - Host-based routing
   - TLS termination
   - Path-based routing for /api and /web

Validate all manifests with kubectl --dry-run.
```

### Phase 4: CI/CD Pipeline (20 min)

```
Create GitHub Actions workflows in .github/workflows/:

1. ci.yml (on push to any branch):
   - Run Terraform validate and fmt check
   - Lint Dockerfiles with hadolint
   - Validate Kubernetes manifests
   - Run unit tests

2. cd.yml (on push to main):
   - Build Docker image with cache
   - Push to Azure Container Registry
   - Deploy to Kubernetes (dev first, then prod)
   - Require manual approval for production
   - Notify on success/failure

3. rollback.yml (manual trigger):
   - Input for version/revision
   - Rollback Kubernetes deployment
   - Notification

Include proper secrets management using GitHub secrets.
```

### Phase 5: Monitoring & Documentation (15 min)

```
Add monitoring and documentation:

1. Monitoring (kubernetes/monitoring/):
   - ServiceMonitor for Prometheus
   - Alert rules for CPU/memory/errors
   - Grafana dashboard ConfigMap

2. Documentation:
   - Update README with architecture diagram
   - Document deployment procedures
   - Create runbook for common operations

3. Validation:
   - Run terraform plan for final check
   - Validate all Kubernetes manifests
   - Test Docker build locally
```

## 🛠️ Optional: MCP Tools for DevOps

Configure MCP servers for enhanced capabilities:

**`.vscode/mcp.json`**:

```json
{
  "servers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-filesystem", "${workspaceFolder}"]
    },
    "fetch": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-fetch"]
    }
  }
}
```

Use it:

```
Use #fetch to get the latest Azure Terraform provider 
documentation, then update my provider configuration to 
use the newest features.
```

## ✅ Completion Checklist

### Infrastructure (Terraform)

- [ ] VNet with public/private subnets created
- [ ] Network Security groups configured properly
- [ ] Auto Scaling Group deployed
- [ ] Load Balancer configured
- [ ] Azure Database for PostgreSQL provisioned
- [ ] State management configured
- [ ] Variables and outputs defined

### Containerization (Docker)

- [ ] Multi-stage Dockerfile created
- [ ] Image size optimized (<100MB for Node.js)
- [ ] Non-root user configured
- [ ] Health checks implemented
- [ ] Docker Compose working locally
- [ ] .dockerignore configured

### Kubernetes

- [ ] Deployment manifest created
- [ ] Service configured
- [ ] ConfigMap and Secrets created
- [ ] HPA configured
- [ ] Ingress working
- [ ] Resource limits set

### CI/CD

- [ ] GitHub Actions workflow created
- [ ] Automated tests running
- [ ] Docker build and push working
- [ ] Deployment automation complete
- [ ] Rollback workflow created

## 🎁 Bonus Challenges

Using Agent mode, try these:

1. **Multi-Region Setup**: "Deploy to multiple Azure regions with traffic manager"
2. **Blue-Green Deployment**: "Implement blue-green deployment with Kubernetes"
3. **Service Mesh**: "Add Istio service mesh configuration"
4. **GitOps**: "Set up ArgoCD for GitOps workflow"
5. **Cost Optimization**: "Add auto-shutdown for dev environments"
6. **Disaster Recovery**: "Implement cross-region backup and restore"

## 🧪 Testing Your Infrastructure

Use Agent mode to help validate:

```
Run these validation commands and fix any errors:
- terraform validate
- terraform fmt -check
- hadolint docker/app/Dockerfile
- kubectl apply --dry-run=client -f kubernetes/
```

## 📊 Success Metrics

- Infrastructure files generated by Agent: ____%
- Number of iterations for correct config: _____
- Security best practices implemented: _____/10
- Most helpful agent workflow: _______________

## 🎓 Key Learnings

Document your experience:

1. How did Agent mode help with multi-file Terraform?
2. Were Docker suggestions production-ready?
3. Did Copilot suggest good security practices?
4. How effective was iterative development?

## 📚 Resources

- [Terraform Azure Provider](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs)
- [Docker Documentation](https://docs.docker.com/)
- [Kubernetes Documentation](https://kubernetes.io/docs/)
- [Copilot Agents Guide](../docs/chat-modes.md)

## 🏗️ Architecture Diagram

```
Internet
    ↓
[Azure Load Balancer]
    ↓
[Virtual Machine Scale Set]
    ↓
[Azure Kubernetes Service] ← [Azure Database for PostgreSQL]
    ↓
[Container Instances]
```

---

**Need Help?**

- Use Agent mode: "Review #problems and fix infrastructure issues"
- Check the `/docs` folder for guides

Build with confidence! 🏗️☁️
