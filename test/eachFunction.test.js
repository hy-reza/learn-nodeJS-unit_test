// each() function use to avoid duplicate test code
import { sum } from "../src/sum.js";
//first way (using nested array)
describe("When the sum function is called", () => {
  const table = [
    [30, 15, 15],
    [60, 30, 30],
    [120, 60, 60],
  ];
  it.each(table)(
    "Should return %i if the invoke is sum(%i, %i)",
    (expected, a, b) => {
      expect(sum(a, b)).toBe(expected);
    }
  );
});

// second way (using object destructuring)
describe("When the sum function is called", () => {
  const table = [
    {expected: 30, a: 15, b: 15},
    {expected: 60, a: 30, b: 30},
    {expected: 120, a: 60, b: 60},
  ];
  it.each(table)(
    "Should return %expected if the invoke is sum(%a, %b)",
    ({expected, a, b}) => {
      expect(sum(a, b)).toBe(expected);
    }
  );
});
