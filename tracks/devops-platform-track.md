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

### 1. Configure Copilot Context (CRITICAL)

The file `.github/copilot-instructions.md` currently contains instructions for the hackathon organizers. **You must overwrite this file** with instructions relevant to your specific project.

1. Open `.github/copilot-instructions.md`.
2. **Delete its entire contents.**
3. Use the example below as a starting point for your new instructions.

> 💡 **Why?** If you don't do this, Copilot will think it's helping organize a hackathon instead of helping you write code!

### 2. Navigate to Your Challenge

Open the folder `challenges/challenge-3-devops/` in your workspace. This is where you will be working.

---

### 3. Create Your Custom Instructions

This file tells Copilot about your infrastructure context and standards. **Your goal is to create your own custom instructions file.**

**What to include:**
- Cloud provider and services in use (Azure)
- Infrastructure as Code tool preferences (Terraform)
- Naming conventions and tagging standards
- Security requirements and compliance needs

> 💡 **Looking for examples?** Check out the [github/awesome-copilot](https://github.com/github/awesome-copilot) repository for real-world examples of custom instruction files and best practices.

### 2. Create Custom Agents (`.github/agents/`)

Create specialized agents for different tasks. **Your goal is to create agents that match your workflow.**

**Agents to consider creating:**
- **Terraform Expert Agent** - Specialized in IaC best practices, module design, and Azure resources
- **Kubernetes Engineer Agent** - Focused on container orchestration, manifests, and Helm charts
- **Security Reviewer Agent** - Expert in infrastructure security and compliance

**What to include in each agent:**
- Clear description of the agent's infrastructure expertise
- Specific instructions for resource creation and naming
- References to your organization's security standards

> 💡 **Looking for examples?** Check out the [github/awesome-copilot](https://github.com/github/awesome-copilot) repository for custom agent templates and ideas.
>
> **Tip**: Reference your agents in chat using `@agent-name` to get specialized assistance!

---

## 🗺️ Track Structure

### Your Challenge: DevOps - Infrastructure as Code
**Duration:** 4-6 hours  
**Focus:** Complete infrastructure automation

#### 🎯 Objective

Design and implement cloud infrastructure using Terraform and containerize applications with Docker. Learn how GitHub Copilot's **Agent mode** can accelerate infrastructure coding, provide best practices, and help with complex multi-file configurations.

#### 📋 Requirements

Build a complete infrastructure stack for a "Quote of the Day" web application (Node.js):

**Core Features**
1. **Containerization (Docker)**
   - Create a **multi-stage** Dockerfile for the Node.js app
   - Optimize image size (Alpine)
   - Build and run locally

2. **Kubernetes Orchestration**
   - Create Deployment with 3 replicas
   - Create LoadBalancer Service
   - Create **ConfigMap** for environment variables
   - Configure health checks (liveness probes)

3. **Cloud Infrastructure (Terraform)**
   - Provision Azure Resource Group
   - Provision Azure Container Registry (ACR)
   - Provision Azure Kubernetes Service (AKS)
   - (Bonus) Provision **Azure Key Vault** for secrets

4. **CI/CD Pipeline (Bonus)**
   - Build and push Docker image to ACR
   - Deploy to Kubernetes

**Quality Requirements**
- Infrastructure security best practices
- Cost optimization
- High availability setup
- Monitoring and logging
- Documentation

#### 🚀 Getting Started

### Step 1: Explore the Starter Code
- `app/`: Contains the source code and Dockerfile for the web application.
- `kubernetes/`: Place your Kubernetes manifests here.
- `terraform/`: Place your Terraform configuration here.

### Step 2: Use Copilot to Build
- **Docker**: Open `app/Dockerfile` and ask Copilot: "Create a multi-stage Dockerfile for a Node.js application."
- **Kubernetes**: Open `kubernetes/deployment.yaml` and ask: "Create a Kubernetes deployment for the quote-app with 3 replicas, ConfigMap env vars, and a LoadBalancer service."
- **Terraform**: Open `terraform/azure/main.tf` and ask: "Create an Azure Resource Group, ACR, and AKS cluster using Terraform."

#### 💡 Copilot Tips

- **Infrastructure Explanations**: Use `/explain` to understand complex Terraform modules or Kubernetes manifests.
- **Security Checks**: Ask Copilot "Are there any security issues in this Dockerfile?" or "How can I secure this S3 bucket in Terraform?"
- **Translation**: Ask Copilot to translate a `docker-compose.yml` file into Kubernetes manifests.

**Copilot Skills You'll Learn:**
- Infrastructure code generation from descriptions
- Terraform best practices and patterns
- Natural language prompts for configuration documentation
- Security and compliance guidance
- Docker optimization techniques
- `/explain` for understanding infrastructure patterns

📖 [Start Challenge 3](../challenges/challenge-3-devops/)

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
# Add public subnets in swedencentral
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
