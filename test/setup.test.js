//this function will run before each test 
beforeEach(() => {
  console.info('Before Test')
})

//this function will run after each test 
afterEach(() => {
  console.info('After Test')
})

test('Test 1', () => {
  const name = 'Reza'
  expect(name).toBe('Reza')
  console.info('First Test')
})

test('Test 2', () => {
  const name = 'Handy'
  expect(name).toBe('Handy')  
  console.info('Second Test')
})