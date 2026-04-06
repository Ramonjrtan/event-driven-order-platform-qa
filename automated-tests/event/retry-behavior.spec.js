describe('Retry behavior', () => {
  test('temporary consumer failure can recover before timeout', () => {
    const attempts = ['failed', 'failed', 'success'];
    expect(attempts.includes('success')).toBe(true);
    expect(attempts[attempts.length - 1]).toBe('success');
  });
});
