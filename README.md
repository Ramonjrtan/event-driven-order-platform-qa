# Event-Driven Order Platform QA

A recruiter-ready QA portfolio that demonstrates how to test an asynchronous, event-driven order platform across API, event stream, consumer, and database layers.

## What this repo shows

This project is built to highlight senior QA thinking for modern distributed systems. It focuses on validating:

- end-to-end business flow correctness across services
- event publishing, consumption, and sequencing
- eventual consistency and final-state validation
- duplicate handling, retries, poison messages, and partial failures
- data reconciliation across operational and audit tables

## Why this project matters

In event-driven systems, a successful API response does not automatically mean the business transaction completed correctly. Failures can happen later in the flow due to invalid payloads, consumer issues, duplicate messages, delayed processing, or broken downstream integrations.

This repo demonstrates how QA goes beyond UI or API checks and validates the full chain:

`API -> event -> consumer -> database -> final business state`

## System under test

The sample platform simulates an order workflow where services communicate asynchronously.

### Core services

- Order Service
- Payment Service
- Inventory Service
- Notification Service

### Typical happy-path sequence

1. `order.created`
2. `payment.authorized`
3. `inventory.reserved`
4. `notification.sent`

### Failure examples covered

- `payment.failed`
- `inventory.failed`
- duplicate message processing
- poison or invalid payload handling
- retry and recovery behavior
- out-of-order events

## QA scope

### Functional validation
- order creation request and response validation
- required event generation and routing checks
- consumer-side business outcome verification

### Asynchronous workflow validation
- expected event order across the transaction lifecycle
- eventual consistency checks within the allowed processing window
- propagation of correlation IDs and business keys across events

### Data and reconciliation validation
- orders versus payments versus inventory alignment
- final-state correctness in audit tables
- missing, duplicate, and mismatched record detection

### Negative and resilience testing
- duplicate events and idempotency
- invalid payloads and poison message handling
- retry safety and replay-safe behavior
- partial failures and downstream recovery

## Repository structure

```text
event-driven-order-platform-qa/
├── automated-tests/        # Lightweight API, event, and integration checks
├── docker/                 # Optional local compose setup
├── docs/                   # Architecture, strategy, risk, runbook, event catalog
├── postman/                # API collection and sample request payloads
├── reports/                # Sample execution and defect summaries
├── sql/                    # Reconciliation, sequence, audit, and DQ queries
├── test-artifacts/         # Excel-based manual test pack and related artifacts
└── README.md
```

## Key artifacts

### 1) Manual QA pack
Structured Excel pack for scenario coverage, execution tracking, and traceability.

Files:
- `test-artifacts/Event_Driven_Order_Platform_QA_Test_Pack.xlsx`

### 2) API and payload assets
- Postman collection for order creation
- sample payloads for core events
- AsyncAPI contract for topic and message structure

### 3) SQL validation layer
Expanded SQL checks for:
- final-state validation
- audit trace review
- order versus payment reconciliation
- duplicate event detection
- missing event detection
- sequence validation by timestamp

### 4) Automation examples
Simple Node.js checks that illustrate:
- payload field validation
- duplicate event protection
- sequence expectations
- core ID traceability across the flow

## Senior QA approach behind this repo

This project is intentionally designed around the risks that matter most in asynchronous systems:

- **final state over surface response**: success is validated at the business outcome level, not just the API layer
- **traceability across systems**: order ID and correlation ID are tracked through the full chain
- **risk-based coverage**: duplicate processing, out-of-order execution, and eventual consistency are treated as first-class risks
- **data as source of truth**: SQL reconciliation is used to confirm whether distributed processing produced the correct result

## Suggested recruiter talking points

Use this repo to demonstrate experience or readiness in:

- distributed and event-driven architectures
- backend and API testing
- transaction and workflow validation
- reconciliation-heavy systems such as fintech, retail, or logistics platforms
- senior QA ownership beyond simple UI checks

## Tools used

- Postman
- Node.js / JavaScript
- SQL
- AsyncAPI
- Docker Compose
- Excel test pack for manual coverage and execution tracking

## Disclaimer

This repository is a portfolio simulation built for learning and demonstration. The workflows and data are generalized and do not contain proprietary client logic or confidential production assets.
