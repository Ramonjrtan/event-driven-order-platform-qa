# Risk Analysis

| Risk | Impact | Example Failure | Why It Matters | QA Mitigation |
|---|---|---|---|---|
| Duplicate processing | Critical | Double charge or duplicate reservation | Replays can create financial or inventory errors | Idempotency checks, duplicate event tests, reconciliation |
| Out-of-order events | High | Inventory action occurs before payment approval | Business state becomes invalid | Sequence validation and timestamp review |
| Invalid payload | High | Missing `orderId` breaks consumer logic | Downstream services cannot complete safely | Contract validation and poison message tests |
| Retry side effects | High | Retry succeeds but creates repeated business action | Recovery logic must remain replay-safe | Retry tests plus duplicate detection queries |
| Delayed processing | Medium | Final state not updated within SLA | Users and downstream jobs see stale status | Eventual consistency checks and timeout monitoring |
| Partial failure | High | Payment succeeds but inventory fails | System must settle to the correct final state | E2E failure-path validation and audit review |
| Notification coupling | Medium | Notification failure blocks core transaction | Non-critical services should not corrupt core state | Separate outcome validation from notification status |
