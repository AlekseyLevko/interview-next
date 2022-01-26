export const getPrimeNumbers = (n) => {
  // реализация функции
  const primeNumbers = [];

  nextNumber: for (let i = 2; i <= n; i++) {
    for (let y = 2; y < i; y++) {
      if (i % y === 0) continue nextNumber;
    }
    primeNumbers.push(i);
  }

  return primeNumbers;
};
