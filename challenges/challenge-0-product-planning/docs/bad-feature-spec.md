# Feature Specification: Task Assignment and Team Notifications

This spec was written by a colleague. It contains 5 problems. Review it carefully,
identify each problem, and write the corrected version.

---

## Feature Name

Task Assignment with Team Notifications

## Overview

Allow team leads to assign tasks to team members. When a task is assigned, the
assignee receives a notification. This feature is critical for team collaboration
and will drive adoption among larger teams.

## User Personas Affected

- Team Lead (assigns tasks)
- Developer (receives assignments)

## User Flow

1. Team lead opens a task detail view.
2. Team lead clicks "Assign" and selects a team member from a dropdown.
3. System sends a notification to the assignee via the notification microservice.
4. Assignee sees the notification in the app.
5. Assignee clicks the notification to navigate to the task.

## Requirements

### Functional Requirements

- FR-1: Team leads can assign any task to any user in the system.
- FR-2: A task can be assigned to multiple users simultaneously.
- FR-3: Assignees receive an in-app notification when a task is assigned to them.
- FR-4: The task detail view shows the current assignee(s).
- FR-5: Assigning a task to a user who is already assigned should reassign with
  a new notification.
- FR-6: A task can only have one assignee at a time.

### Non-Functional Requirements

- NFR-1: The assignment action should be fast.
- NFR-2: The notification system should be reliable.
- NFR-3: The feature should scale to support large teams.

## Out of Scope

- Email notifications (future release)
- Calendar integration

## Open Questions

- Should we support bulk assignment (assigning one task to multiple people)?

## Dependencies

- User management API (exists)
- Task CRUD API (exists)

## Acceptance Criteria

- [ ] Team leads can assign tasks
- [ ] Notifications are delivered
- [ ] Feature works for teams of any size
