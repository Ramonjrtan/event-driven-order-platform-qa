const payloads = require('../fixtures/event-payloads.json');

describe('Create order API', () => {
  test('order.created payload contains key business fields', () => {
    expect(payloads.orderCreated.eventType).toBe('order.created');
    expect(payloads.orderCreated.orderId).toMatch(/^ORD-/);
    expect(payloads.orderCreated.correlationId).toMatch(/^CORR-/);
  });
});
