# Risk Analysis

| Risk | Impact | Example | Mitigation |
|---|---|---|---|
| Duplicate processing | Critical | Double charge or double reservation | Idempotency checks and duplicate-event tests |
| Out-of-order messages | High | Inventory processed before payment authorization | Sequence validation and state guards |
| Invalid payload | High | Missing orderId breaks consumer processing | Schema validation and DLQ handling |
| Retry side effects | High | Retry leads to duplicate business effect | Replay-safe design and reconciliation checks |
| Delayed processing | Medium | Eventual consistency window exceeds SLA | Timeout monitoring and delayed-event tests |
| Notification coupling | Medium | Customer comms failure blocks core transaction | Separate notification retry from transaction state |
