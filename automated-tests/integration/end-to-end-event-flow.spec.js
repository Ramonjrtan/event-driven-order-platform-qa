const payloads = require('../fixtures/event-payloads.json');

describe('End-to-end flow', () => {
  test('core IDs remain traceable across the full happy path', () => {
    expect(payloads.orderCreated.orderId).toBe(payloads.paymentAuthorized.orderId);
    expect(payloads.paymentAuthorized.orderId).toBe(payloads.inventoryReserved.orderId);
    expect(payloads.inventoryReserved.orderId).toBe(payloads.notificationSent.orderId);
  });
});
