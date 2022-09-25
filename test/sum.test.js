import {sum} from '../src/sum.js'

test('sum (1,2) must be equal to 3', () => {
  const result = sum(1, 2)
  expect(result).toBe(3)
})