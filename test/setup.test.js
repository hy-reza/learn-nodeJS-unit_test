//this function will run before all test done
beforeAll(() => {
  console.info('Before All Test')
})

//this function will run after all test done
afterAll(() => {
  console.info('After All Test')
})

//this function will run before each test done
beforeEach(() => {
  console.info('Before Test')
})

//this function will run after each test done
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