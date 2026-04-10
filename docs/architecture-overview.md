# Architecture Overview

## Summary

This sample platform models an event-driven order lifecycle where a single business transaction crosses multiple services and completes asynchronously.

The design emphasizes the kinds of risks QA must validate in modern distributed systems: eventual consistency, partial failures, duplicate messages, and traceability across services.

## Service landscape

### Order Service
Receives the initial order request and emits `order.created` after the order record is persisted.

### Payment Service
Consumes `order.created`, attempts authorization, and emits either `payment.authorized` or `payment.failed`.

### Inventory Service
Consumes payment success events and attempts stock reservation. It emits `inventory.reserved` or `inventory.failed`.

### Notification Service
Consumes the final business outcome and emits `notification.sent` after customer communication is recorded.

## Reference flow

```text
Client/API
  -> Order Service
      -> order.created
          -> Payment Service
              -> payment.authorized / payment.failed
                  -> Inventory Service
                      -> inventory.reserved / inventory.failed
                          -> Notification Service
                              -> notification.sent
```

## Business keys that must remain traceable

- `orderId`
- `correlationId`
- `customerId`
- `itemId`

These identifiers are used in both functional and reconciliation checks.

## Validation points by layer

### API layer
- request accepted with valid payload
- order persisted with the correct initial state
- response returns usable business identifiers

### Event layer
- correct topic and event type emitted
- required fields populated
- payload matches contract
- correlation ID carried forward correctly

### Consumer layer
- consumers process only valid and relevant events
- downstream actions occur once
- retries do not create duplicate business effects

### Data layer
- final order status reflects the actual outcome
- payment and inventory state align with the order state
- audit records show a complete and explainable trail

## QA implications

Testing should not stop at the initial API success response. A real pass condition requires confirming that the full transaction finished correctly across:

- emitted events
- consumer outcomes
- persisted data
- audit trail
- user-visible final status
