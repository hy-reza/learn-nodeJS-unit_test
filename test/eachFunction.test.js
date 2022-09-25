// each() function use to avoid duplicate test code
import { sum } from "../src/sum.js";
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
