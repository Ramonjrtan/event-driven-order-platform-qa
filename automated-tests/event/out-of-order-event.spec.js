const payloads = require('../fixtures/event-payloads.json');

describe('Out-of-order protection', () => {
  test('inventory should not be considered valid before payment authorization', () => {
    const received = [
      payloads.orderCreated.eventType,
      payloads.inventoryReserved.eventType,
      payloads.paymentAuthorized.eventType,
    ];

    const paymentIndex = received.indexOf('payment.authorized');
    const inventoryIndex = received.indexOf('inventory.reserved');

    expect(paymentIndex).toBeGreaterThan(-1);
    expect(inventoryIndex).toBeGreaterThan(-1);
    expect(paymentIndex).toBeLessThan(inventoryIndex);
  });
});
