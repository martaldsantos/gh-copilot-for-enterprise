# ADR-0001: Record Architecture Decisions

## Status

Accepted

## Context

Product and technical decisions need to be documented so the team can understand
why choices were made. Without a record, decisions get revisited unnecessarily
or context is lost when team members change.

## Decision

We will use Architecture Decision Records (ADRs) as described by Michael Nygard
in his article "Documenting Architecture Decisions." Each ADR is a short markdown
file stored in `docs/adr/` and numbered sequentially.

## Consequences

- Every significant product or technical decision gets a short written record.
- New team members can read the ADR log to understand historical context.
- The team must commit to writing ADRs when decisions are made, not after the fact.
