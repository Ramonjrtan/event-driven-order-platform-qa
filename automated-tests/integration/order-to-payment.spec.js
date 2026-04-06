const payloads = require('../fixtures/event-payloads.json');

describe('Order to payment integration', () => {
  test('payment can authorize a created order', () => {
    expect(payloads.orderCreated.orderId).toBe(payloads.paymentAuthorized.orderId);
    expect(payloads.paymentAuthorized.paymentStatus).toBe('AUTHORIZED');
  });
});
