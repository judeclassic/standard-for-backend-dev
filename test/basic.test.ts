describe('Basic Test Suite', () => {
  it('should pass a basic test', () => {
    expect(1 + 1).toBe(2);
  });

  it('should have environment variables set', () => {
    expect(process.env.NODE_ENV).toBe('test');
    expect(process.env.ACCESS_TOKEN_SECRET).toBeDefined();
  });
});
