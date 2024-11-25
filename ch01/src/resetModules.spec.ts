beforeEach(() => {
  jest.resetModules();
});
test('first import', async () => {
  const c = await import('./mockClass');
  (c as any).prop = 'replaced Property';
  expect(c).toBeDefined();
});

test.only('second import', async () => {
  const c = await import('./mockClass');
  expect((c as any).prop).toBeUndefined();
});
