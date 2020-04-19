function countPositivesSumNegatives(input) {
  if (input.length === 0 || !input) return [];
  let count = input.filter(i => i > 0).length;
  let negatives = input
    .filter(i => i < 0)
    .reduce((total, current) => {
      return total + -current;
    }, 0);
  return [count, -negatives];
}

console.log(countPositivesSumNegatives([1, 4, 6, 7, 1, 1, 1, 2, -6 - 9]));
console.log(
  countPositivesSumNegatives([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    -11,
    -12,
    -13,
    -14,
    -15
  ])
);
console.log(
  countPositivesSumNegatives([
    0,
    2,
    3,
    0,
    5,
    6,
    7,
    8,
    9,
    10,
    -11,
    -12,
    -13,
    -14
  ])
);
