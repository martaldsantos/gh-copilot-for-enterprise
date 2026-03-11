# DevOps & Platform Engineering Track

**Duration:** 6-8 hours
**Difficulty:** Intermediate to Advanced
**Focus:** Infrastructure as Code, containerization, and deployment automation with GitHub Copilot

## Who Is This For

- DevOps Engineers and Platform Engineers
- Site Reliability Engineers (SRE)
- Cloud Engineers
- Infrastructure Architects

## Prerequisites

- Basic understanding of Azure cloud platform
- Familiarity with Docker containers
- Understanding of infrastructure concepts
- Basic knowledge of YAML and HCL (Terraform)
- CI/CD concepts

## Technology Stack

- **Terraform** -- Infrastructure as Code
- **Docker** -- Containerization
- **Kubernetes** -- Container orchestration
- **GitHub Actions** -- CI/CD pipelines
- **Azure** -- Cloud platform

## Getting Started

### 1. Configure Copilot Context (CRITICAL)

The file `.github/copilot-instructions.md` currently contains instructions for the hackathon organizers. **You must overwrite this file** with instructions relevant to your specific project.

1. Open `.github/copilot-instructions.md`.
2. **Delete its entire contents.**
3. Write your own instructions following the guidance below.

> **Why?** If you don't do this, Copilot will think it's helping organize a hackathon instead of helping you write code!

### 2. Create Your Custom Instructions

This file tells Copilot about your infrastructure context and standards. **Your goal is to create your own custom instructions file.**

**What to include:**

- Cloud provider and services in use (Azure)
- Infrastructure as Code tool preferences (Terraform)
- Naming conventions and tagging standards
- Security requirements and compliance needs

### 3. Create Custom Agents (`.github/agents/`)

Create specialized agents for different tasks. **Your goal is to create agents that match your workflow.**

**Agents to consider creating:**

- **Terraform Expert Agent** -- Specialized in IaC best practices, module design, and Azure resources
- **Kubernetes Engineer Agent** -- Focused on container orchestration, manifests, and Helm charts
- **Security Reviewer Agent** -- Expert in infrastructure security and compliance

**What to include in each agent:**

- Clear description of the agent's infrastructure expertise
- Specific instructions for resource creation and naming
- References to your organization's security standards

> Check out [github/awesome-copilot](https://github.com/github/awesome-copilot) for real-world examples of custom instructions and agent templates.
>
> **Tip**: Reference your agents in chat using `@agent-name` to get specialized assistance.

### 4. Open the Challenge

Navigate to `challenges/challenge-3-devops/`. Explore the starter code: `app/` has the working application, `kubernetes/` and `terraform/` have minimal scaffolds. Work through the stages in order.

---

## Stages

| Stage | Name | Difficulty | Est. Time | Key Deliverable |
|-------|------|------------|-----------|----------------|
| 1 | Containerization and Local Development | Intermediate | 60-75 min | Multi-stage Dockerfile, Docker Compose, security scan |
| 2 | Kubernetes Orchestration | Intermediate | 60-90 min | Deployment, Service, ConfigMap, HPA, NetworkPolicy |
| 3 | Terraform Infrastructure | Advanced | 60-90 min | Azure RG, ACR, AKS with variables and remote state |
| 4 | Observability and Security Hardening | Advanced | 60-90 min | Fix broken Key Vault module, pod security, metrics endpoint |
| 5 | CI/CD Pipeline and Deployment Strategy | Advanced | 60-90 min | GitHub Actions, blue/green deployment, DR runbook |

The application is already complete -- your job is the infrastructure. Copilot generates valid Dockerfile, YAML, and HCL syntax, but Stage 4 requires debugging broken Terraform and Stage 5 requires deployment strategy decisions that need operational judgment.

> **Short on time?** Skip NetworkPolicy in Stage 2, skip remote state in Stage 3, do only the Key Vault debug in Stage 4, and focus on the GitHub Actions workflow only in Stage 5.

### Stage 1: Containerization and Local Development

**Difficulty:** Intermediate | **Time:** 60-75 min

Containerize the Node.js application and set up a local development workflow.

#### Tasks

1. Complete the multi-stage Dockerfile in `app/Dockerfile`. Use `node:18-alpine` as base. Include a non-root user, optimized layer caching, and minimal final image.
2. Create a Docker Compose file (`docker-compose.yml`) for local development with hot-reload: volume mount the source directory, use nodemon for file watching.
3. Container security: scan the built image with `trivy` or `docker scout`. Fix any HIGH or CRITICAL vulnerabilities.

#### Verification

- `docker build` succeeds and final image is under 100MB
- `docker compose up` serves the application with live reload on code changes
- Security scan reports no HIGH or CRITICAL CVEs

---

### Stage 2: Kubernetes Orchestration

**Difficulty:** Intermediate | **Time:** 60-90 min

Deploy the application to Kubernetes with production-grade configuration.

#### Tasks

1. Complete `kubernetes/deployment.yaml`: 3 replicas, resource limits (CPU: 200m, Memory: 256Mi), liveness probe on `/api/quote`, readiness probe on `/health`, rolling update strategy, environment variables from ConfigMap.
2. Complete `kubernetes/service.yaml`: LoadBalancer type, port 80 to targetPort 3000.
3. Complete `kubernetes/configmap.yaml`: externalize application configuration.
4. Create `kubernetes/hpa.yaml`: HorizontalPodAutoscaler scaling between 2-5 replicas based on CPU (target 70%).
5. Create `kubernetes/networkpolicy.yaml`: deny all ingress except traffic from the Service.

#### Verification

- `kubectl apply --dry-run=client -f kubernetes/` passes for all manifests
- Deployment shows correct probe configuration in `kubectl describe`
- HPA and NetworkPolicy are syntactically valid

---

### Stage 3: Terraform Infrastructure

**Difficulty:** Advanced | **Time:** 60-90 min

Provision Azure infrastructure using Terraform with proper variable management.

#### Tasks

1. Complete `terraform/azure/main.tf`: configure Azure provider, provision Resource Group, Azure Container Registry (Basic SKU), and Azure Kubernetes Service (system node pool, 1-3 nodes).
2. Create `terraform/azure/variables.tf`: all configurable values (region, resource names, SKU, node count, etc.) must be variables with defaults and descriptions.
3. Create `terraform/azure/outputs.tf`: output ACR login server, AKS cluster name, kubeconfig command, and resource group name.
4. Configure a remote state backend using Azure Storage Account.

#### Verification

- `terraform validate` passes
- `terraform plan` shows the expected resources (RG, ACR, AKS)
- All configurable values are variables (not hardcoded)
- Outputs are defined and meaningful

---

### Stage 4: Observability and Security Hardening

**Difficulty:** Advanced | **Time:** 60-90 min

This stage includes a broken Terraform module that you must debug.

#### Tasks

1. **Bug hunt**: Open `stage-4-broken/keyvault.tf`. It contains a Terraform module for Azure Key Vault integration with 3 bugs: a wrong access policy reference, a missing dependent resource, and an incorrect AKS identity configuration. Fix all three and integrate the module into your main Terraform configuration.
2. Add pod security context to the Kubernetes deployment: `runAsNonRoot: true`, `readOnlyRootFilesystem: true`, drop ALL Linux capabilities.
3. Add a Prometheus-style metrics endpoint to the Node.js app: `GET /metrics` returning request count and latency histogram in Prometheus text format.
4. Create `kubernetes/cronjob.yaml`: a CronJob that periodically checks the application health endpoint and logs the result.

#### Verification

- All 3 Key Vault Terraform bugs identified and fixed
- Pods run as non-root with read-only filesystem
- `/metrics` returns Prometheus-formatted data
- CronJob manifest is valid and runs on schedule

#### What Copilot Helps With vs. What Requires Your Judgment

Copilot generates Terraform resources, pod security contexts, and CronJob manifests well. But debugging the broken Key Vault module requires understanding Azure identity models and Terraform resource dependencies -- Copilot may generate plausible but incorrect fixes if the root cause is not identified first.

---

### Stage 5: CI/CD Pipeline and Deployment Strategy

**Difficulty:** Advanced | **Time:** 60-90 min

Automate everything and plan for failure.

#### Tasks

1. Create a GitHub Actions workflow in `.github/workflows/deploy.yml`: lint Dockerfile, build and push image to ACR, scan image for vulnerabilities, run `terraform plan` on PRs and `terraform apply` on merge to main, deploy to AKS.
2. Blue/green deployment: create `kubernetes/deployment-blue.yaml` and `kubernetes/deployment-green.yaml`. Configure the service to point to one color at a time. Document the switchover procedure.
3. Add Terraform cost estimation using `infracost` as a step in the GitHub Actions workflow.
4. Write a disaster recovery runbook in `docs/disaster-recovery-runbook.md` covering: backup procedures for application data and Terraform state, restore steps, RTO/RPO targets with justification, and rollback process for each deployment type.

#### Verification

- GitHub Actions YAML is valid (test with `actionlint` or a YAML linter)
- Blue/green deployment manifests are complete with switchover documentation
- DR runbook covers all required scenarios with specific procedures

---

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
