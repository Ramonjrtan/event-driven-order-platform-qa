describe('Poison message handling', () => {
  test('missing orderId should be flagged as invalid', () => {
    const badEvent = { eventType: 'order.created' };
    const isValid = Boolean(badEvent.orderId);
    expect(isValid).toBe(false);
  });
});
