// TODO: Use Copilot to expand these TypeScript types for the Task Dashboard
// Ask: "Create TypeScript interfaces for Task, User, TaskFilters, and API responses"

// Example structure to get you started:
export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate?: Date;
  createdAt: Date;
  // TODO: Add more properties as needed
}

export enum TaskStatus {
  TODO = 'todo',
  IN_PROGRESS = 'in_progress',
  DONE = 'done',
}

export enum TaskPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

// TODO: Add more types like User, TaskFilters, API response types, etc.
