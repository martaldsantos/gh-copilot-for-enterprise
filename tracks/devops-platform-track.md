# DevOps & Platform Engineering Track

**Duration:** 6-8 hours

**Difficulty:** ★★☆ to ★★★

**Focus:** Infrastructure as Code, containerization, and deployment automation with GitHub Copilot

## Who Is This For

- DevOps Engineers and Platform Engineers
- Site Reliability Engineers (SRE)
- Cloud Engineers
- Infrastructure Architects

## Prerequisites

- **Azure subscription** (required for Stages 3-5 -- Terraform provisioning, Key Vault, CI/CD deployment)
- **Azure Kubernetes Service (AKS)** access or ability to create one (Stage 3 provisions it, Stages 4-5 use it)
- Basic understanding of Azure cloud platform
- Familiarity with Docker containers
- Understanding of infrastructure concepts
- Basic knowledge of YAML and HCL (Terraform)
- CI/CD concepts

> ⚠️ **No Azure subscription?** Stages 1 (Docker) and 2 (Kubernetes with a local cluster like minikube or kind) can be completed without Azure. For Stages 3-5, you need a valid Azure subscription with permissions to create resource groups, ACR, and AKS resources.

## Technology Stack

- **Terraform** -- Infrastructure as Code
- **Docker** -- Containerization
- **Kubernetes** -- Container orchestration
- **GitHub Actions** -- CI/CD pipelines
- **Azure** -- Cloud platform

## Getting Started

Follow the [common setup steps](getting-started.md) first (clean start, custom instructions, custom agents), then continue below.

### Custom Instructions for This Track

**What to include:**

- Cloud provider and services in use (Azure)
- Infrastructure as Code tool preferences (Terraform)
- Naming conventions and tagging standards
- Security requirements and compliance needs

### Suggested Agents

**Agents to consider creating:**

- **Terraform Expert Agent** -- Specialized in IaC best practices, module design, and Azure resources
- **Kubernetes Engineer Agent** -- Focused on container orchestration, manifests, and Helm charts
- **Security Reviewer Agent** -- Expert in infrastructure security and compliance

### Open the Challenge

Navigate to `challenges/challenge-3-devops/`. Explore the starter code: `app/` has the working application, `kubernetes/` and `terraform/` have minimal scaffolds. Work through the stages in order.

---

## Stages

| Stage | Name | Difficulty | Est. Time | Key Deliverable |
|-------|------|------------|-----------|----------------|
| 1 | [Containerization and Local Development](devops-platform-track/stage-1-containerization.md) | ★★☆ | 60-75 min | Multi-stage Dockerfile, Docker Compose, security scan |
| 2 | [Kubernetes Orchestration](devops-platform-track/stage-2-kubernetes.md) | ★★☆ | 60-90 min | Deployment, Service, ConfigMap, HPA, NetworkPolicy |
| 3 | [Terraform Infrastructure](devops-platform-track/stage-3-terraform.md) | ★★★ | 60-90 min | Azure RG, ACR, AKS with variables and remote state |
| 4 | [Observability and Security Hardening](devops-platform-track/stage-4-observability.md) | ★★★ | 60-90 min | Fix broken Key Vault module, pod security, metrics endpoint |
| 5 | [CI/CD Pipeline and Deployment Strategy](devops-platform-track/stage-5-cicd.md) | ★★★ | 60-90 min | GitHub Actions, blue/green deployment, DR runbook |

The application is already complete -- your job is the infrastructure. Copilot generates valid Dockerfile, YAML, and HCL syntax, but Stage 4 requires debugging broken Terraform and Stage 5 requires deployment strategy decisions that need operational judgment.

> **Short on time?** Skip NetworkPolicy in Stage 2, skip remote state in Stage 3, do only the Key Vault debug in Stage 4, and focus on the GitHub Actions workflow only in Stage 5.

## Tips for Using Copilot on This Track

**Describe infrastructure in comments:**

```hcl
# Create an Azure VNet with CIDR 10.0.0.0/16
# Add public subnets in swedencentral
# Add private subnets in the same AZs
# Configure NAT gateway and routing tables
```

**Generate Kubernetes manifests:**

```yaml
# Create Deployment with:
# - 3 replicas
# - Rolling update strategy
# - Resource limits: 200m CPU, 256Mi memory
# - Liveness and readiness probes on /health
```

**Multi-stage Docker builds:**

```dockerfile
# Create a multi-stage Dockerfile for Node.js app
# Stage 1: Build with all dependencies
# Stage 2: Production with minimal image size
# Use alpine base, non-root user, optimized caching
```

**CI/CD pipelines:**

```yaml
# GitHub Actions workflow to:
# 1. Run Terraform validate and plan
# 2. Build and scan Docker image
# 3. Push to registry
# 4. Deploy to Kubernetes
# 5. Run smoke tests
```

## Resources

- [Copilot Guide](../docs/copilot-guide.md)
- [Prompt Engineering Guide](../docs/prompt-engineering.md)
- [Troubleshooting Guide](../TROUBLESHOOTING.md)
- [Facilitator Guide](../FACILITATOR_GUIDE.md)
