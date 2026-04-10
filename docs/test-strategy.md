# Test Strategy

## Objective

Validate that the order workflow behaves correctly across asynchronous services and that the final business outcome remains accurate, traceable, and replay-safe.

## Scope

Included in scope:
- API validation for order creation
- event contract and payload validation
- sequence and correlation checks
- integration checks between services
- end-to-end happy path and major failure paths
- SQL reconciliation and audit validation
- lightweight automation examples for critical flows

Out of scope:
- performance benchmarking at scale
- infrastructure hardening and broker configuration testing
- full UI automation

## Test levels

### 1. API testing
Validate request, response, business IDs, and initial record creation.

### 2. Event validation
Validate event type, required fields, topic routing, and schema integrity.

### 3. Integration testing
Validate cross-service outcomes, especially payment to inventory and inventory to notification dependencies.

### 4. End-to-end workflow testing
Validate the complete transaction lifecycle from order request to final state.

### 5. Data validation
Validate database state, audit sequence, and reconciliation across business tables.

## Priority coverage

### Priority 1
- order creation
- payment authorization
- inventory reservation
- final notification
- correlation ID continuity
- final-state reconciliation

### Priority 2
- payment failure
- inventory failure
- duplicate event handling
- invalid payload handling
- event ordering validation

### Priority 3
- retry behavior
- poison message routing
- consumer restart/recovery
- delayed processing window checks

## Entry criteria

- API endpoint or simulator available
- sample topics or event fixtures available
- database or audit tables accessible
- event contract agreed and baselined

## Exit criteria

- all Priority 1 scenarios executed
- no open critical defects on core success flow
- final-state reconciliation passes for baseline scenarios
- key failure scenarios reviewed and documented

## Release-readiness rule

A flow is not considered complete based only on API success. QA should confirm:
1. expected event emitted
2. downstream processing completed
3. final business status persisted
4. audit trail is complete and explainable
