"""
Task Manager API - Starter Code
GitHub Copilot Hackathon - Challenge 1
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Task Manager API",
    description="GitHub Copilot Hackathon Challenge 1",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "ok", "message": "Task Manager API is running"}

# TODO: Add authentication routes
# Hint: Use Copilot to generate auth routes
# Example prompt: "Create authentication endpoints for register and login using FastAPI"

# TODO: Add task routes
# Hint: Ask Copilot to create CRUD endpoints for tasks with FastAPI

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
