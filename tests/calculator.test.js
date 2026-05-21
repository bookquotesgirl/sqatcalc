const { add, subtract, multiply, divide,average } = require("../src/calculator");

describe("calculator", () => {
  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtracts two numbers", () => {
    expect(subtract(7, 2)).toBe(5);
  });

  test("multiplies two numbers", () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test("divides two numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("throws when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });

  test("calculates the average of an array of numbers", () => {
    const numbers = [1, 2, 3, 4, 5];
    const expectedAverage = 3;
    expect(average(numbers)).toBe(expectedAverage);
  });

});