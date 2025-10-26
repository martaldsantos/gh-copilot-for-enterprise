// Task Manager API - Starter Code
// GitHub Copilot Hackathon - Challenge 1

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Task Manager API is running' });
});

// TODO: Add authentication routes
// Hint: Use Copilot to generate auth routes
// Example prompt: "Create authentication routes for register and login"

// TODO: Add task routes
// Hint: Ask Copilot to create CRUD routes for tasks

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📝 Ready to build your Task Manager API with GitHub Copilot!`);
});

module.exports = app;
