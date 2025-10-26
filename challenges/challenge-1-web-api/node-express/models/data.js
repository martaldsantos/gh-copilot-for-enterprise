// In-memory data store (for hackathon purposes)
// In production, you would use a real database

let users = [];
let tasks = [];
let nextUserId = 1;
let nextTaskId = 1;

// TODO: Use Copilot to create User and Task data models
// Example: Ask Copilot "Create a User class with id, email, password, and createdAt properties"

module.exports = {
  users,
  tasks,
  getNextUserId: () => nextUserId++,
  getNextTaskId: () => nextTaskId++
};
