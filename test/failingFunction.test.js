import { sayHello } from "../src/sayHello";


// another option to test when function got error instead using exception error matcher
describe('When the sayHello() function invoked', () => { 
  it('Will success when the params is string of name ', ()=> {
    expect(sayHello('Reza')).toBe('Hello Reza')
  })
  it.failing('Should got an error if there is no name argument sended to the function', () => {
    sayHello(null)
  })
})