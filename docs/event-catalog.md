# Event Catalog

## order.created
Raised after a valid order is accepted and persisted.

Required business checks:
- `orderId` exists and is unique
- `correlationId` is present
- amount and quantity are valid
- event is published once for the same order request

## payment.authorized
Raised when payment authorization succeeds.

Required business checks:
- links to the same `orderId`
- payment status is `AUTHORIZED`
- emitted only after `order.created`

## payment.failed
Raised when payment authorization fails.

Required business checks:
- failure reason is captured
- inventory reservation must not continue
- order should settle to a non-success outcome

## inventory.reserved
Raised when stock is reserved successfully after payment approval.

Required business checks:
- emitted only for authorized payments
- quantity aligns with order request
- reservation is not duplicated on replay

## inventory.failed
Raised when stock cannot be reserved.

Required business checks:
- failure reason is visible
- final state reflects unresolved order fulfillment

## notification.sent
Raised when customer communication is sent for the completed business outcome.

Required business checks:
- not treated as proof that payment or inventory succeeded
- must reference the correct order and correlation IDs
