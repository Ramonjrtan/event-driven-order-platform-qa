# event-driven-order-platform-qa

QA portfolio repo for simulating asynchronous order processing across API, message broker, consumers, and database checks.

## What is included
- **Manual test pack (Excel)**
- **Automation starter files** in JavaScript
- **AsyncAPI contract**
- **Postman collection**
- **SQL validation queries**
- **Docker Compose** for a lightweight local stack scaffold
- **Docs** for architecture, strategy, and risk analysis

## Business flow
1. Order Service receives `POST /orders`
2. Order Service publishes `order.created`
3. Payment Service consumes `order.created` and publishes either `payment.authorized` or `payment.failed`
4. Inventory Service consumes `payment.authorized` and publishes either `inventory.reserved` or `inventory.failed`
5. Notification Service emits `notification.sent`
6. Final state is reconciled in audit/reporting storage

## Manual test design
Main workbook: [`Event_Driven_Order_Platform_QA_Test_Pack.xlsx`](./Event_Driven_Order_Platform_QA_Test_Pack.xlsx)

Tabs included:
- `Test_Cases`
- `Execution_Report`
- `Defect_Log`
- `RTM`
- `Test_Data`
- `Automation_Map`
- `Summary_Dashboard`

## Automation stack
- Postman for API trigger and smoke validation
- Node.js + Jest for lightweight automation examples
- JSON fixtures for event payload simulation

## Quick start
```bash
npm install
npm test
```

## Repo structure
```text
event-driven-order-platform-qa/
├── README.md
├── Event_Driven_Order_Platform_QA_Test_Pack.xlsx
├── docs/
├── postman/
├── automated-tests/
├── sql/
└── docker/
```

## Notes
This repository is intentionally lightweight and portfolio-focused. It demonstrates QA strategy, event-flow validation, idempotency checks, resilience coverage, and end-to-end data consistency checks without requiring a full production microservice implementation.
