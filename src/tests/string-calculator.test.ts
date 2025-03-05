import { StringCalculator } from "../string-calculator";

describe("StringCalculator", () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test("returns 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  test("returns number itself for a single number", () => {
    expect(calculator.add("1")).toBe(1);
  });

  test("returns sum of two numbers", () => {
    expect(calculator.add("1,2")).toBe(3);
  });

  test("handles multiple numbers", () => {
    expect(calculator.add("1,2,3,4")).toBe(10);
  });

  test("supports new line as delimiter", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  test("supports custom single-character delimiter", () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
  });

  test("supports custom multi-character delimiter", () => {
    expect(calculator.add("//[***]\n1***2***3")).toBe(6);
  });

  test("throws error for negative numbers", () => {
    expect(() => calculator.add("1,-2,3,-4")).toThrow(
      "negative numbers not allowed: -2, -4"
    );
  });

  test("ignores numbers greater than 1000", () => {
    expect(calculator.add("2,1001")).toBe(2);
  });
});
