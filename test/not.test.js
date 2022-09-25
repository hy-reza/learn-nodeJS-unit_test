//Semua matcher support not matcher

test('Not string testing', () => {
  const value = 'Handy Reza Alfanda'
  expect(value).not.toMatch(/cholid/)
  // expect(value).toBe('Handy Reza Alfanda')
})

test('Not number test', () => {
  const num = 100 + 99 
  expect(num).not.toBeGreaterThan(3000)
  expect(num).not.toBeGreaterThanOrEqual(3000000000)
  expect(num).not.toBeLessThan(10)
  expect(num).not.toBeLessThanOrEqual(8)
})