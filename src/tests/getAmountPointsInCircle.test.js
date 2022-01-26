import { getAmountPointsInCircle } from "../solutions/getAmountPointsInCircle";

test("Should be 13 points in a circle with a radius of 2", () => {
  expect(getAmountPointsInCircle(2)).toEqual(13);
});

test("Should be 3141549 points in a circle with a radius of 1000", () => {
  expect(getAmountPointsInCircle(1000)).toEqual(3141549);
});
