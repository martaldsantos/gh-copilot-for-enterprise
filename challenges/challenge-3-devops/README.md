# Challenge 3: DevOps - Infrastructure as Code 🏗️

**Difficulty**: Intermediate  
**Duration**: 4-6 hours  
**Team**: DevOps Engineers, Platform Engineers

## 🎯 Objective

Design and implement cloud infrastructure using Terraform and containerize applications with Docker. Learn how GitHub Copilot can accelerate infrastructure coding, provide best practices, and help with complex configurations.

## 📚 What You'll Learn

- Using Copilot for Infrastructure as Code (Terraform)
- Containerization best practices with Docker
- Kubernetes manifest generation
- CI/CD pipeline configuration
- Using Copilot for infrastructure documentation
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

## 💡 Copilot Tips for This Challenge

### 1. Infrastructure Patterns

**Ask Copilot for complete configurations:**
```
"Create a Terraform configuration for an Azure VNet with public and private subnets 
across 3 availability zones, with NAT gateway and proper routing"
```

### 2. Use Copilot for Documentation

Highlight Terraform resources and ask:
```
Explain this infrastructure setup and its components
```

### 3. Security Best Practices

```
Ask: "What security best practices should I follow for this infrastructure?"
```

### 4. Docker Optimization

```python
# Comment-driven Docker development:
# Create a multi-stage Dockerfile for a Node.js app
# Use alpine base, install only production dependencies
# Run as non-root user, optimize layer caching
```

## 📝 Step-by-Step Guide

### Phase 1: Cloud Infrastructure with Terraform (30 min)

1. **Initialize Terraform Project**
   
   💡 **Copilot Prompt:**
   ```
   "Create a Terraform main.tf file with provider configuration for Azure,
   including backend for state management in Azure Storage"
   ```

2. **Network Configuration**
   ```hcl
   # Create VNET with CIDR 10.0.0.0/16
   # Add public subnets in 2 zones (10.0.1.0/24, 10.0.2.0/24)
   # Add private subnets in 2 zones (10.0.10.0/24, 10.0.11.0/24)
   # Configure NAT Gateway for outbound internet access
   ```
   
   Let Copilot generate the complete network setup!

3. **Security Groups**
   ```
   Ask Copilot: "Create security groups for:
   - ALB: Allow HTTP(80) and HTTPS(443) from internet
   - App servers: Allow traffic only from ALB
   - Database: Allow PostgreSQL(5432) only from app servers"
   ```

4. **Compute Resources**
   ```hcl
   # Create Virtual Machine Scale Set
   # Use Standard_B1s instances with Ubuntu 22.04
   # Min: 2, Max: 6, Desired: 2
   # Include custom_data script to install Docker
   ```

5. **Load Balancer**
   ```
   "Create Application Load Balancer with:
   - Listeners for HTTP (redirect to HTTPS) and HTTPS
   - Target group for app servers on port 8080
   - Health check endpoint /health"
   ```

6. **Database**
   ```hcl
   # Create Azure Database for PostgreSQL
   # Zone-redundant deployment, B_Gen5_1 tier
   # Automated backups, encryption enabled
   # Place in private subnet
   ```

### Phase 2: Containerization with Docker (20 min)

1. **Create Optimized Dockerfile**
   
   💡 **Ask Copilot:**
   ```
   "Create a multi-stage Dockerfile for a Node.js Express app:
   - Stage 1: Build with dependencies
   - Stage 2: Production with minimal footprint
   - Use node:18-alpine base
   - Run as non-root user
   - Optimize for layer caching"
   ```

2. **Docker Compose for Local Dev**
   ```yaml
   # Create docker-compose.yml with:
   # - App service (build from Dockerfile)
   # - PostgreSQL database
   # - Redis cache
   # - Volume mounts for development
   ```

3. **Health Checks**
   ```dockerfile
   # Add HEALTHCHECK instruction to Dockerfile
   # Check HTTP endpoint every 30s
   ```

4. **Security Scanning**
   ```
   "Create .dockerignore file to exclude unnecessary files
   Add labels for metadata following OCI standards"
   ```

### Phase 3: Kubernetes Manifests (25 min)

1. **Deployment Configuration**
   ```yaml
   # Create Deployment manifest with:
   # - 3 replicas
   # - Resource limits: CPU 200m, Memory 256Mi
   # - Liveness and readiness probes
   # - Rolling update strategy
   ```
   
   💡 **Copilot will generate the complete YAML!**

2. **Service Definition**
   ```
   Ask: "Create a Kubernetes Service of type LoadBalancer
   exposing port 80 to container port 8080"
   ```

3. **ConfigMap and Secrets**
   ```yaml
   # Create ConfigMap for app configuration
   # Create Secret for database credentials (base64 encoded)
   # Mount both as environment variables in Deployment
   ```

4. **Horizontal Pod Autoscaler**
   ```
   "Create HPA for the deployment:
   - Min: 3, Max: 10 replicas
   - Target CPU utilization: 70%"
   ```

5. **Ingress Configuration**
   ```yaml
   # Create Ingress with:
   # - Host-based routing
   # - TLS termination
   # - Path-based routing for /api and /web
   ```

### Phase 4: CI/CD Pipeline (20 min)

1. **GitHub Actions Workflow**
   
   💡 **Copilot Prompt:**
   ```
   "Create a GitHub Actions workflow that:
   1. Runs on push to main
   2. Runs tests
   3. Builds Docker image
   4. Pushes to Docker Hub
   5. Deploys to Kubernetes using kubectl"
   ```

2. **Testing Stage**
   ```yaml
   # Add job for:
   # - Terraform validate and plan
   # - Dockerfile linting with hadolint
   # - Kubernetes manifest validation
   ```

3. **Infrastructure Deployment**
   ```
   "Add a job to apply Terraform changes:
   - Use Terraform GitHub Actions
   - Require manual approval for production
   - Show plan before apply"
   ```

4. **Rollback Strategy**
   ```yaml
   # Create a separate workflow for rollback
   # Allow manual trigger with version input
   # Use kubectl rollout undo
   ```

### Phase 5: Monitoring & Documentation (15 min)

1. **Add Monitoring**
   ```
   Ask Copilot: "Add Prometheus monitoring:
   - ServiceMonitor for app metrics
   - Grafana dashboard ConfigMap"
   ```

2. **Logging Configuration**
   ```yaml
   # Configure centralized logging
   # Use Fluentd DaemonSet to collect logs
   ```

3. **Documentation**
   - Ask Copilot to document Terraform files
   - Document architecture decisions
   - Create deployment runbook

## ✅ Completion Checklist

### Infrastructure (Terraform)
- [ ] VNET with public/private subnets created
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

1. **Multi-Region Setup**: Deploy to multiple Azure regions
2. **Blue-Green Deployment**: Implement blue-green deployment strategy
3. **Service Mesh**: Add Istio for service mesh
4. **GitOps**: Implement ArgoCD for GitOps workflow
5. **Cost Optimization**: Add auto-shutdown for dev environments
6. **Disaster Recovery**: Implement backup and restore procedures

## 🧪 Testing Your Infrastructure

```bash
# Validate Terraform
terraform validate
terraform plan

# Test Docker build
docker build -t myapp:test .
docker run -p 8080:8080 myapp:test

# Validate Kubernetes manifests
kubectl apply --dry-run=client -f kubernetes/

# Run pipeline locally with act
act -j build
```

## 📊 Success Metrics

- Infrastructure deployment time: _____ minutes
- Number of manual steps vs automated: _____
- Copilot code generation percentage: ____%
- Security best practices implemented: _____/10

## 🎓 Key Learnings

Document:
1. How did Copilot help with Terraform?
2. Were Docker suggestions production-ready?
3. Did Copilot suggest good security practices?
4. What infrastructure patterns did you learn?

## 📚 Resources

- [Terraform Azure Provider](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs)
- [Docker Documentation](https://docs.docker.com/)
- [Kubernetes Documentation](https://kubernetes.io/docs/)
- [Copilot Best Practices](../docs/best-practices.md)

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
- Ask Copilot for infrastructure best practices
- Use `/explain` on complex configurations
- Check the `/docs` folder for guides

Build with confidence! 🏗️☁️
