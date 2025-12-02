# DevOps & Platform Engineering Track 🏗️

**Duration:** 6-8 hours  
**Difficulty:** Intermediate to Advanced  
**Focus:** Infrastructure as Code, containerization, and deployment automation with GitHub Copilot

## 🎯 Track Overview

This track is designed for DevOps engineers and platform engineers who want to master GitHub Copilot for infrastructure automation, containerization, and CI/CD. You'll learn how Copilot can accelerate infrastructure coding, suggest best practices, and help build production-ready deployment systems.

## 👥 Who Is This For?

- DevOps Engineers
- Platform Engineers
- Site Reliability Engineers (SRE)
- Cloud Engineers
- Infrastructure Architects

## 📋 Prerequisites

- Basic understanding of Azure cloud platform
- Familiarity with Docker containers
- Understanding of infrastructure concepts
- Basic knowledge of YAML and HCL (Terraform)
- CI/CD concepts

## 🛠️ Technology Stack

You'll work with:
- **Terraform** - Infrastructure as Code
- **Docker** - Containerization
- **Kubernetes** - Container orchestration
- **GitHub Actions** - CI/CD pipelines
- **Azure** - Cloud platform

## ⚡ First Steps: Set Up Your Workspace

### ⚠️ IMPORTANT: Create a Fresh Repository First!

> **Do NOT work directly in the hackathon repository!** The `.github/copilot-instructions.md` file there is for hackathon maintainers, not your project. Working there will confuse Copilot about your context.

**Set up your workspace:**

1. **Create a new repository** for your challenge work
2. **Copy from the hackathon repo:**
   - `.devcontainer/` folder (for consistent dev environment)
   - `challenges/challenge-3-devops/` (starter code)
3. **Create your own `.github/copilot-instructions.md`** using the example below
4. **Launch Codespace** in YOUR new repository

---

### 1. Create a `.github/copilot-instructions.md` File

This file tells Copilot about your infrastructure context and standards.

```markdown
# Copilot Instructions for DevOps & Platform Engineering

## Project Context
- Cloud Provider: Azure
- Infrastructure as Code: Terraform
- Container Orchestration: Kubernetes (AKS)
- CI/CD: GitHub Actions

## Infrastructure Standards
- All resources must be tagged with: environment, project, owner
- Use Azure naming conventions (e.g., rg-project-env-region)
- Enable encryption at rest for all storage
- Follow least-privilege access principles

## Terraform Standards
- Use modules for reusable components
- Always define variables with descriptions and types
- Include outputs for important resource attributes
- Use remote state with Azure Storage backend

## Security Requirements
- No hardcoded secrets (use Azure Key Vault)
- Enable network security groups on all subnets
- Use managed identities where possible
```

### 2. Create Custom Agents (`.github/agents/`)

Create specialized agents for different tasks:

**`.github/agents/terraform-expert.md`**:
```markdown
# Terraform Expert Agent

You are an expert in Infrastructure as Code with Terraform.

## Your Expertise
- Terraform best practices and patterns
- Azure resource provisioning
- Module design and composition
- State management and workspaces

## When Generating Code
- Always use variables for configurable values
- Include proper resource dependencies
- Add meaningful descriptions to all variables
- Follow Azure naming conventions
- Include proper tagging for all resources
```

**`.github/agents/kubernetes-engineer.md`**:
```markdown
# Kubernetes Engineer Agent

You are an expert in container orchestration with Kubernetes.

## Your Focus
- Kubernetes manifest best practices
- Resource limits and requests
- Security contexts and policies
- Helm chart development
```

> 💡 **Tip**: Reference your agents in chat using `@agent-name` to get specialized assistance!

---

## 🗺️ Track Structure

### Your Challenge: DevOps - Infrastructure as Code
**Duration:** 4-6 hours  
**Focus:** Complete infrastructure automation

> 🎯 **This is YOUR dedicated challenge.** Focus entirely on infrastructure and DevOps. A sample application is provided so you don't need to write application code.

Build production-ready infrastructure:
- Azure cloud infrastructure with Terraform
- Multi-stage Docker containers (optimized)
- Kubernetes deployments and services
- CI/CD pipeline with GitHub Actions
- Security groups and network configuration
- Monitoring and logging setup

**Copilot Skills You'll Learn:**
- Infrastructure code generation from descriptions
- Terraform best practices and patterns
- Natural language prompts for configuration documentation
- Security and compliance guidance
- Docker optimization techniques
- `/explain` for understanding infrastructure patterns

📖 [Start Challenge 3](../challenges/challenge-3-devops/README.md)

## ⏱️ Recommended Schedule

### Full Day (6 hours)

```
09:00 - 09:30   Setup & First Steps (agents, copilot-instructions)
09:30 - 10:30   Terraform & Azure Infrastructure
10:30 - 10:45   Break
10:45 - 12:00   Docker & Containerization
12:00 - 13:00   Lunch
13:00 - 14:30   Kubernetes & Orchestration
14:30 - 14:45   Break
14:45 - 16:00   CI/CD Pipelines & Automation
16:00 - 16:30   Review & Showcase
```

### Half Day (4 hours)

```
09:00 - 09:30   Setup & First Steps
09:30 - 10:30   Terraform & Docker Basics
10:30 - 10:45   Break
10:45 - 12:00   Kubernetes Deployment
12:00 - 12:30   CI/CD Pipeline Setup
12:30 - 13:00   Review & Wrap-up
```

## 🎓 Learning Outcomes

By completing this track, you will:

### Technical Skills

- ✅ Write infrastructure as code with Terraform
- ✅ Create Azure cloud configurations
- ✅ Build optimized Docker containers
- ✅ Deploy applications to Kubernetes
- ✅ Set up automated CI/CD pipelines
- ✅ Implement infrastructure security best practices

### Copilot Mastery

- ✅ Generate infrastructure code from descriptions
- ✅ Get security and compliance suggestions
- ✅ Document complex configurations
- ✅ Optimize Docker images
- ✅ Create Kubernetes manifests efficiently
- ✅ Build CI/CD pipelines with best practices

## 💡 Track-Specific Tips

### 1. Infrastructure as Code with Copilot

**Describe infrastructure in comments:**
```hcl
# Create an Azure VNet with CIDR 10.0.0.0/16
# Add public subnets in us-east-1a and us-east-1b
# Add private subnets in the same AZs
# Configure NAT gateway and routing tables
```

**Ask for complete modules:**
- "Create a Terraform module for an Azure Database for PostgreSQL with zone redundancy"
- "Generate security group for a web application with ALB"

### 2. Docker Optimization

**Multi-stage builds:**
```dockerfile
# Create a multi-stage Dockerfile for Node.js app
# Stage 1: Build with all dependencies
# Stage 2: Production with minimal image size
# Use alpine base, non-root user, optimized caching
```

**Security practices:**
- Ask: "What security best practices should this Dockerfile follow?"
- Use `/fix` for security issues

### 3. Kubernetes Manifests

**Generate complete resources:**
```yaml
# Create Deployment with:
# - 3 replicas
# - Rolling update strategy
# - Resource limits: 200m CPU, 256Mi memory
# - Liveness and readiness probes on /health
```

**Ask for related resources:**
- "Create a Service and Ingress for this Deployment"
- "Add HorizontalPodAutoscaler for CPU scaling"

### 4. CI/CD Pipelines

**Complete workflow generation:**
```yaml
# GitHub Actions workflow to:
# 1. Run Terraform validate and plan
# 2. Build and scan Docker image
# 3. Push to registry
# 4. Deploy to Kubernetes
# 5. Run smoke tests
```

### 5. Documenting Infrastructure

Document your infrastructure:
1. Highlight Terraform resources
2. Ask Copilot: "Explain this infrastructure setup and add documentation"
3. Generate architecture documentation

## 📊 Success Metrics

Track your progress:
- [ ] Terraform infrastructure deployed successfully
- [ ] Docker images built and optimized (<100MB for Node.js)
- [ ] Kubernetes cluster running application
- [ ] CI/CD pipeline automating deployments
- [ ] Security best practices implemented
- [ ] Infrastructure documented
- [ ] Monitoring and logging configured
- [ ] Can explain infrastructure decisions

## 🎁 Bonus Challenges

If you finish early:

1. **Multi-Region**: Deploy infrastructure across multiple regions
2. **Blue-Green Deployment**: Implement zero-downtime deployments
3. **GitOps**: Set up ArgoCD for GitOps workflow
4. **Service Mesh**: Add Istio or Linkerd
5. **Disaster Recovery**: Implement backup and restore
6. **Cost Optimization**: Add auto-scaling and spot instances
7. **Observability**: Implement Prometheus and Grafana
8. **Policy as Code**: Add OPA for policy enforcement

## 🚀 Getting Started

1. **Use Azure**: This track uses Azure as the cloud provider
2. **Set Up Credentials**: Configure cloud access (use sandbox/test account)
3. **Verify Tools**: Ensure Terraform, Docker, kubectl installed
4. **Start Challenge 3**: Begin with infrastructure basics
5. **Iterate**: Build incrementally, test frequently

## 📚 Additional Resources

### Infrastructure as Code
- [Terraform Best Practices](../docs/best-practices.md)
- [Prompt Engineering Guide](../docs/prompt-engineering.md)
- [Chat Modes Reference](../docs/chat-modes.md)

### DevOps Resources
- Terraform documentation
- Docker security guide
- Kubernetes best practices
- GitHub Actions documentation

### For Facilitators
- See [Facilitator Guide](../FACILITATOR_GUIDE.md) for DevOps track guidance
- This track requires intermediate infrastructure knowledge
- Ensure participants have cloud access (sandbox accounts)

## 🔒 Security Considerations

### Infrastructure Security with Copilot

1. **Always Review Generated Code**
   - Check security group rules
   - Verify IAM permissions
   - Validate encryption settings

2. **Ask for Security Reviews**
   - "What security issues exist in this configuration?"
   - "How can I improve security for this setup?"

3. **Use `/explain` for Understanding**
   - Understand security implications
   - Learn best practices
   - Verify compliance requirements

4. **Common Security Checks**
   - Encryption at rest and in transit
   - Least privilege IAM
   - Network segmentation
   - Secrets management
   - Audit logging

## 🏗️ Architecture Patterns

### Cloud-Native Architecture

Copilot can help you implement:
- **High Availability**: Multi-AZ deployments
- **Scalability**: Auto-scaling groups, HPA
- **Resilience**: Health checks, automatic recovery
- **Security**: Defense in depth, zero trust
- **Observability**: Logging, metrics, tracing

**Example prompt:**
```
"Create a highly available, auto-scaling architecture for a web application
with load balancer, application servers in private subnets, and RDS database
with multi-AZ deployment"
```

## 🧪 Testing Infrastructure

### Validation and Testing

```bash
# Terraform validation
terraform validate
terraform plan

# Docker testing
docker build -t app:test .
docker run --rm app:test npm test

# Kubernetes validation
kubectl apply --dry-run=client -f kubernetes/

# CI/CD testing
act -j build  # Test GitHub Actions locally
```

**Ask Copilot:**
- "Generate tests for this Terraform module"
- "Create a smoke test script for the deployment"

## 🤝 Need Help?

- **Infrastructure questions?** Ask Copilot for best practices
- **Configuration issues?** Use `/fix` on error messages
- **Stuck?** Check [Troubleshooting Guide](../TROUBLESHOOTING.md)
- **Cloud-specific help?** Use `/explain` on generated code

## 🎯 Track Completion

You've successfully completed the DevOps track when you:
- ✅ Deployed infrastructure with Terraform
- ✅ Containerized and deployed an application
- ✅ Set up Kubernetes orchestration
- ✅ Created automated CI/CD pipeline
- ✅ Implemented security best practices
- ✅ Can explain and maintain the infrastructure

---

**Ready to build infrastructure with Copilot?** Start with [Challenge 3: Infrastructure as Code](../challenges/challenge-3-devops/README.md) 🏗️☁️
