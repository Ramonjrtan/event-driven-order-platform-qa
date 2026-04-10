# Execution Guide

## Recommended order of execution

1. Run API request for order creation
2. Inspect generated event payloads
3. Validate downstream service outcomes
4. Run SQL checks for audit trail and final state
5. Review negative scenarios such as duplicates and invalid payloads
6. Record results in the Excel test pack and sample report

## Minimum evidence for a pass

- API response with valid IDs
- matching events with correct order and correlation IDs
- correct final status in database or audit tables
- no unexplained duplicates
- business outcome consistent across order, payment, and inventory records

## Common review questions

- Did the API succeed but the workflow fail later?
- Did a retry create a second business effect?
- Did a failure path still emit the wrong downstream event?
- Does the database prove the same result as the event trail?
