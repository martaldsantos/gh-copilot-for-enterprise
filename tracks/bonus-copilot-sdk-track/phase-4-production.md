# Phase 4: Production-Ready

[Back to Copilot SDK Track](../bonus-copilot-sdk-track.md)

**Estimated:** 1-2 hours

## 10. Testing

- Unit tests for custom tool implementations (verify they return correct data)
- Integration tests that create a real `CopilotClient` session and exercise tool calls
- Mock external APIs (GitHub) for deterministic test results
- Aim for >70% coverage on your tool and agent logic

## 11. Deployment to Azure

- Package the application for deployment (compile TypeScript, bundle dependencies)
- Deploy to Azure App Service or Azure Container Apps
- Configure environment variables for GitHub authentication
- Verify the deployed application works end-to-end with the Copilot CLI backend
- Document the deployment steps so other team members can run it

---

Previous: [Phase 3: Advanced Features](phase-3-advanced-features.md)
