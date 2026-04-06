const payloads = require('../fixtures/event-payloads.json');

describe('Payment to inventory integration', () => {
  test('authorized payment can lead to reserved inventory', () => {
    expect(payloads.paymentAuthorized.orderId).toBe(payloads.inventoryReserved.orderId);
    expect(payloads.inventoryReserved.inventoryStatus).toBe('RESERVED');
  });

  test('failed payment should not continue inventory reservation', () => {
    expect(payloads.paymentFailed.paymentStatus).toBe('FAILED');
    expect(payloads.inventoryFailed.reason).toBe('OUT_OF_STOCK');
  });
});
