# Sample Defect Log

| ID | Title | Severity | Summary |
|---|---|---|---|
| EVT-001 | Duplicate `order.created` results in double reservation | Critical | Replay of the same message creates repeated inventory impact |
| EVT-002 | `payment.failed` still allows inventory processing | High | Downstream consumer does not gate correctly on payment outcome |
| EVT-003 | Missing `correlationId` in `inventory.reserved` | High | Traceability is broken across services |
| EVT-004 | Notification event sent before final order state update | Medium | User-visible communication leads persisted business state |
