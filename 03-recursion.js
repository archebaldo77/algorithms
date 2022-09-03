// Сложность O(n);

const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }

  if (n < 0) {
    throw new Error(`n must be 0 or greater`);
  }

  return n * factorial(n - 1);
};
