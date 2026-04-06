# Architecture Overview

## Purpose
This project simulates QA validation for an asynchronous order platform.

## Logical flow
```mermaid
flowchart LR
    A[Client / Postman] --> B[Order Service]
    B -->|publishes order.created| C[(Kafka Topic)]
    C --> D[Payment Service]
    D -->|payment.authorized / payment.failed| E[(Kafka Topic)]
    E --> F[Inventory Service]
    F -->|inventory.reserved / inventory.failed| G[(Kafka Topic)]
    G --> H[Notification Service]
    H --> I[(Audit / Reporting DB)]
```

## QA focus areas
- API request and response validation
- Event payload integrity
- Correct event sequencing
- Duplicate event handling
- Retry and recovery behavior
- Final-state reconciliation

## Key non-functional risks
- Duplicate processing
- Out-of-order event arrival
- Poison messages
- Eventual consistency delays
- Partial failure between services

