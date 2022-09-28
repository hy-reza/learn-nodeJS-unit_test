import {sayHelloCallback} from '../src/sayHello'

describe('When sayHello() function invoke', () => { 
  it('mock matcher ', () => {
    const callback = jest.fn()
    callback.mockImplementation((name) => `${name}, nice to meet you`)

    expect(sayHelloCallback("reza", callback)).toBe('Hello reza, nice to meet you')
    expect(sayHelloCallback("cholid", callback)).toBe('Hello cholid, nice to meet you')
    //cek apakah callback pernah di panggil
    expect(callback).toHaveBeenCalled()
    //cek apakah callback di panggil (n) kali
    expect(callback).toHaveBeenCalledTimes(2)
    //cek params value
    expect(callback).toHaveBeenCalledWith("reza")
    expect(callback).toHaveBeenCalledWith("cholid")

  })
})