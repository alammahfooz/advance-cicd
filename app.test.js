
const { add, subtract, multiply } = require('./app');

test('add function check', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtract function check', () => {
  expect(subtract(10, 4)).toBe(6);
});

test('multiply function check', () => {
  expect(multiply(3, 4)).toBe(12);
});

