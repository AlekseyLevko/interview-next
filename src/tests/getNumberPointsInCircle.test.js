import { getNumberOfPointsInCircle } from "../solutions/getNumberOfPointsInCircle";

test("Should be 13 points in a circle with a radius of 2", () => {
  expect(getNumberOfPointsInCircle(2)).toEqual(13);
});

test("Should be 3141549 points in a circle with a radius of 1000", () => {
  expect(getNumberOfPointsInCircle(1000)).toEqual(3141549);
});
