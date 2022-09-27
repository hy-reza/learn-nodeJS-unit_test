import {sayHello} from '../src/async.js'

test('Async function testing', async () => {
  const greeting = await sayHello('Reza')
  expect(greeting).toBe('Hello Reza, nice to meet you !')
  expect(greeting).not.toBe('Name is empty !')
})

// test('Async matcher testing', async () => {
//   await expect(sayHello('Reza')).resolves.toBe("Hello Reza, nice to meet you !")
//   await expect(sayHello()).rejects.toBe("Name is empty !")
// })