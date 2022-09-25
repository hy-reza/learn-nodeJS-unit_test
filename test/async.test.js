import {sayHello} from '../src/async.js'

test('Async function testing', async () => {
  const greeting = await sayHello('Reza')
  expect(greeting).toBe('Hello Reza, nice to meet you !')
  expect(greeting).not.toBe('Name is empty !')
})