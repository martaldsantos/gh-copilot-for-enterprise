# User Story Critique Exercise

The following 5 user stories were written by a junior PM. Each one contains a
common anti-pattern. Your job is to identify the specific problem in each story
and rewrite it correctly.

For each story, write:

1. What is wrong (name the anti-pattern)
2. The corrected version with proper acceptance criteria

---

## Story A

**As a** user,
**I want** the system to use WebSocket connections with Redis pub/sub for real-time
notifications instead of polling,
**so that** I get instant updates.

**Acceptance Criteria:**

- [ ] WebSocket connection established on page load
- [ ] Redis pub/sub channel created per user
- [ ] Reconnection logic with exponential backoff

---

## Story B

**As a** team lead,
**I want** to manage my team's work better.

**Acceptance Criteria:**

- [ ] Team management works as expected
- [ ] Users are satisfied with the feature

---

## Story C

**As a** product manager,
**I want** a complete reporting and analytics module with dashboards, exportable
reports, custom chart builders, scheduled email reports, real-time KPI widgets,
historical trend analysis, and team comparison views,
**so that** I can make data-driven decisions about team performance.

**Acceptance Criteria:**

- [ ] Dashboard shows all relevant metrics
- [ ] Reports can be exported to PDF, CSV, and Excel
- [ ] Charts are interactive and customizable
- [ ] Emails are sent on schedule
- [ ] Historical data is available for at least 12 months
- [ ] Team comparisons are fair and accurate

---

## Story D

**As a** developer,
**I want** task notifications,
**so that** I know when something happens.

**Acceptance Criteria:**

- [ ] Notifications are sent
- [ ] Notifications look good
- [ ] System handles notifications well

---

## Story E

**As a** team lead,
**I want** to see a burndown chart for each sprint,
**so that** I can track progress and identify blockers early.

**Acceptance Criteria:**

- [ ] Burndown chart shows completed vs. remaining story points over time
- [ ] Chart updates daily
- [ ] Chart is visually appealing
- [ ] Team velocity is calculated automatically
- [ ] Sprint scope changes are shown but the chart should not change when scope changes
- [ ] Chart accurately reflects actual progress at all times
