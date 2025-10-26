"""
Data models for Task Manager API
Use Copilot to expand these models!
"""

from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime
from enum import Enum

# TODO: Use Copilot to create comprehensive models
# Example: Ask Copilot "Create Pydantic models for User and Task with all necessary fields"

class TaskStatus(str, Enum):
    TODO = "todo"
    IN_PROGRESS = "in_progress"
    DONE = "done"

class TaskPriority(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"

# In-memory data store (for hackathon purposes)
users_db = []
tasks_db = []
