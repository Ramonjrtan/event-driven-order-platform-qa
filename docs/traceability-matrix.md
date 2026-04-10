# Traceability Matrix

| Requirement / Risk | Validation Method | Main Artifact |
|---|---|---|
| Order request creates a valid business transaction | API test + DB validation | Postman collection, Excel pack |
| `order.created` contains required fields | Payload/schema validation | AsyncAPI, fixtures, automated-tests/api |
| Payment follows order creation correctly | Integration test | automated-tests/integration/order-to-payment.spec.js |
| Inventory follows authorized payment only | Integration test | automated-tests/integration/payment-to-inventory.spec.js |
| Duplicate messages do not create repeated business effects | Idempotency test + SQL duplicate check | automated-tests/event/duplicate-event.spec.js, sql/data-quality/duplicate-events.sql |
| Event ordering remains valid | Sequence test + audit query | automated-tests/event/event-sequence.spec.js, sql/sequence/event-order-validation.sql |
| Final state is correct across tables | Reconciliation SQL | sql/reconciliation/* |
| Invalid payloads are isolated safely | Negative tests | automated-tests/event/poison-message.spec.js |
| Retries recover without data corruption | Retry test + audit review | automated-tests/event/retry-behavior.spec.js |
