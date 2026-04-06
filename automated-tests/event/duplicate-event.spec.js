const payloads = require('../fixtures/event-payloads.json');

function processEventIds(events) {
  const seen = new Set();
  const processed = [];
  for (const evt of events) {
    if (!seen.has(evt.orderId + ':' + evt.eventType)) {
      seen.add(evt.orderId + ':' + evt.eventType);
      processed.push(evt);
    }
  }
  return processed;
}

describe('Duplicate event handling', () => {
  test('duplicate order.created only processes once', () => {
    const incoming = [payloads.orderCreated, payloads.orderCreated];
    const processed = processEventIds(incoming);
    expect(processed).toHaveLength(1);
  });
});
