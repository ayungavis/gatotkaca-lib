import { expect, test } from "vitest";

import { add, divide, multiply, sub } from "./functions";

test("add 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("sub 2 - 1 to equal 1", () => {
  expect(sub(2, 1)).toBe(1);
});

test("multiply 2 * 3 to equal 6", () => {
  expect(multiply(2, 3)).toBe(6);
});

test("divide 6 / 3 to equal 2", () => {
  expect(divide(6, 3)).toBe(2);
});
