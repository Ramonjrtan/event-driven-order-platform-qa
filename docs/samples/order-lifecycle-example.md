# Order Lifecycle Example

## Scenario
Order `ORD-1001` is submitted successfully and moves through the happy path.

## Expected evidence
- API returns `orderId = ORD-1001`
- `order.created` is emitted once
- `payment.authorized` follows the same `correlationId`
- `inventory.reserved` follows payment success
- `notification.sent` is emitted after the final outcome is established
- SQL reconciliation shows aligned order, payment, and inventory statuses
