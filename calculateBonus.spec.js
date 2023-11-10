const calculate = require("./calculateBonus");

test("Test numbers", () => {
  expect(calculate(10, 30)).toBe(40);
});

test("Test numbers less than 50", () => {
  expect(calculate(19, 30)).toBe(49);
});

test("Test numbers if sum equal 50", () => {
  expect(calculate(20, 30)).toBe(50);
});

test("Test borders numbers", () => {
  expect(calculate(21, 30)).toBe(50);
});

test("Test numbers if sum more than 50", () => {
  expect(calculate(20, 50)).toBe(50);
});
