import {sayHi, myException} from '../src/exceptions.js'

//cek apakah terjadi error
test('Exception testing', () => {
  expect(() => sayHi()).toThrow();
  expect(() => sayHi()).toThrow(myException);
  expect(() => sayHi()).toThrow('Ini error yahhh');
})