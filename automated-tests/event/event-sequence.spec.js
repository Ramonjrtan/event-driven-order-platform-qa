const payloads = require('../fixtures/event-payloads.json');

describe('Event sequence', () => {
  test('happy path follows the expected order', () => {
    const sequence = [
      payloads.orderCreated.eventType,
      payloads.paymentAuthorized.eventType,
      payloads.inventoryReserved.eventType,
      payloads.notificationSent.eventType,
    ];
    expect(sequence).toEqual([
      'order.created',
      'payment.authorized',
      'inventory.reserved',
      'notification.sent',
    ]);
  });
});
