# Test Strategy

## Scope
The strategy covers:
- Manual functional and negative testing
- Event validation
- End-to-end asynchronous flow checks
- SQL data reconciliation
- Basic automation for critical happy-path and failure-path flows

## Test levels
- API testing
- Consumer/integration testing
- End-to-end testing
- Data validation

## Entry criteria
- API endpoint available
- Sample topics/queues available or simulated
- Stable sample payloads
- Accessible audit or reporting records

## Exit criteria
- All Priority 1 cases executed
- No open critical defects for the happy path
- Final-state reconciliation validated for core scenarios

## Coverage priorities
### Priority 1
- Order creation
- Payment authorization
- Inventory reservation
- End-to-end success flow
- Event sequence validation
- Data reconciliation

### Priority 2
- Duplicate event handling
- Invalid payload handling
- Payment failure
- Inventory failure

### Priority 3
- DLQ / poison message
- Consumer restart
- Eventual consistency timeout
