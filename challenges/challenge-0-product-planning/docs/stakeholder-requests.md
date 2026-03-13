# Stakeholder Requests: TaskFlow v2.0

You have a fixed budget of **16 engineering weeks** for the v2.0 release. Below are
requests from four stakeholders. The total is 28 weeks -- 12 weeks over budget.

Your job: decide what gets funded, what gets cut, and what gets deferred. Then write
a one-page decision document explaining your allocation and how you would communicate
each "no" to the affected stakeholder.

---

## Request 1: VP of Engineering

**Ask:** Dedicate 8 weeks to paying down technical debt. The authentication system
uses a custom JWT implementation with known security edge cases. The test suite has
30% coverage and is unreliable. The database layer has no connection pooling and
crashes under load. The API has no rate limiting. Without this work, every new feature
gets slower to ship and we risk a security incident.

**Their argument:** "We are building on a shaky foundation. If we ship more features
without fixing the base, we will spend Q3 and Q4 firefighting instead of building.
I have already lost one senior engineer who cited code quality as their reason for
leaving."

---

## Request 2: CEO

**Ask:** Build a "Team Workspaces" feature in 10 weeks. This creates isolated
environments for different teams within the same organization, with their own task
boards, member management, and permissions. The CEO has verbal commitments from
3 enterprise prospects (total ARR: $180K) conditional on this feature shipping.

**Their argument:** "Our sales pipeline is stuck. Every enterprise prospect asks
the same question: can different teams have their own space? If we ship this by
end of quarter, we close $180K in ARR. If we don't, those deals go to Linear."

---

## Request 3: Head of Customer Support

**Ask:** Build a self-service knowledge base and in-app help center in 5 weeks.
Support ticket volume has grown 40% quarter-over-quarter. The team is at capacity
and the average first-response time has degraded from 2 hours to 11 hours. The
most common tickets are "how do I do X?" questions that a help center would deflect.

**Their argument:** "We cannot hire fast enough. If we do not reduce ticket volume,
response times will keep getting worse and we will start losing customers over
support quality. I estimate a self-service portal would deflect 35-40% of tier-1
tickets."

---

## Request 4: Lead Designer

**Ask:** Redesign the task creation and editing experience across web and mobile
in 5 weeks. Current usability testing shows a 45% task completion failure rate
for new users. The form has too many fields, no inline validation, poor mobile
layout, and no auto-save. Two competitors recently launched streamlined task
creation flows and users on social media are comparing us unfavorably.

**Their argument:** "We are bleeding new users at the onboarding step. 45% of
people who start creating a task give up before saving it. That is our core
feature. No amount of team workspaces or notifications matters if people cannot
create a task. The redesign directly attacks our worst retention metric."

---

## Your Decision Document

Write your allocation below. Account for exactly 16 weeks (within 1-week tolerance).
For each request, state: funded (fully or partially), deferred, or declined. For any
request you cut or reduce, explain what you would say to that stakeholder and what
conditions would change your decision in a future release.
