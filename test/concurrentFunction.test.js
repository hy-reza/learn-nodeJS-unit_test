import {sayHello} from '../src/async.js'

// concurrent() function use to handle running async func in the same time
// use maxConcurentcy to decide how much test which can handled

describe('When async() function invoked', () => {
  const table = [{name : "Handy", expected : 'Hello Handy, nice to meet you !'}, {name : "Reza", expected : 'Hello Reza, nice to meet you !'}]

  it.concurrent.each(table)('Should got %expected when the invoke params is sayHello(%name)', async ({name, expected}) => {
    await expect(sayHello(name)).resolves.toBe(expected)
  })
})