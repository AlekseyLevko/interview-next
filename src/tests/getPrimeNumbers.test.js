import { getPrimeNumbers } from "../solutions/getPrimeNumbers";

test("Should output array with all prime numbers from 0 to 10", () => {
  expect(getPrimeNumbers(10)).toEqual([2, 3, 5, 7]);
});

test("Should output array with all prime numbers from 0 to 100", () => {
  expect(getPrimeNumbers(100)).toEqual([
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ]);
});
