test('Number test', () => {
  const num = 4 + 4 
  expect(num).toBeGreaterThan(3)
  expect(num).toBeGreaterThanOrEqual(8)
  expect(num).toBeLessThan(10)
  expect(num).toBeLessThanOrEqual(8)
})