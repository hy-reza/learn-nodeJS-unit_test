import { sumAll, sumAllAndReturn} from "../src/sum";
import { getBalance } from "../src/async"

//penggunaan mock simple
it('Mock', () => {
  const callback = jest.fn()

  sumAll([10,10], callback)
  sumAll([50,50], callback)


  expect(callback.mock.calls.length).toBe(2)
  expect(callback.mock.calls[0][0]).toBe(20)
  expect(callback.mock.calls[1][0]).toBe(100)

})

//penggunaan mock dengan return value statis
it('Mock simple return', () => {
  const callback = jest.fn()
  callback.mockReturnValueOnce(40)
  callback.mockReturnValueOnce(80)

  expect(sumAllAndReturn([10,10,10], callback)).toBe(40)
  expect(sumAllAndReturn([10,10,10], callback)).toBe(80)

  expect(callback.mock.results[0].value).toBe(40)
  expect(callback.mock.results[1].value).toBe(80)
})

//penggunaan mock dengan return dinamis berdasarkan parameter
it("Mock implementation", () => {
  const callback = jest.fn()
  callback.mockImplementation((total) => total * 2)

  expect(sumAllAndReturn([10,10,10], callback)).toBe(60)
  expect(sumAllAndReturn([10,10,10,10,10], callback)).toBe(100)

  expect(callback.mock.results[0].value).toBe(60)
  expect(callback.mock.results[1].value).toBe(100)
})

it("Mock async", async () => {
  const callback = jest.fn()
  callback.mockResolvedValueOnce(1000)

  await expect(getBalance('Reza', callback)).resolves.toEqual({
    name : 'Reza',
    balance : 1000
  })
})