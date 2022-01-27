import { cloneDeep } from "../solutions/cloneDeep";

const dataWithoutArrays = {
  user: {
    name: "Alex",
    age: 27,
    sizes: {
      height: 185,
      weight: 85,
    },
  },
};

const cloneDataWithoutArrays = cloneDeep(dataWithoutArrays);
test("cloneDataWithoutArrays should be qual to dataWithoutArrays", () => {
  expect(dataWithoutArrays).toEqual(cloneDataWithoutArrays);
});

test("References to nested objects should not be equal", () => {
  expect(
    dataWithoutArrays.user.sizes === cloneDataWithoutArrays.user.sizes
  ).toEqual(false);
});

const dataWithArrays = {
  domains: ["first.com", "second.com", "third.by"],
  users: [
    {
      name: "Alex",
      hobbies: ["programming", "music", "computer games"],
      favoriteColors: ["black", "red", "green"],
    },
    {
      name: "Eugen",
      hobbies: ["movies", "video editing"],
      favoriteColor: ["white", "red"],
    },
  ],
  info: {
    active: true,
    dependencies: ["google.com"],
  },
};

const cloneDataWithArrays = cloneDeep(dataWithArrays);

test("cloneDataWithArrays should be qual to dataWithArrays", () => {
  expect(dataWithArrays).toEqual(cloneDataWithArrays);
});

test("References to nested arrays should not be equal", () => {
  expect(dataWithArrays.users === cloneDataWithArrays.users).toEqual(false);
});

test("References to nested objects should not be equal", () => {
  expect(dataWithArrays.info === cloneDataWithArrays.info).toEqual(false);
});

const dataWithNull = {
  user: "Alex",
  dependencies: null,
};

test("Should handle null correctly", () => {
  expect(cloneDeep(dataWithNull)).toEqual(dataWithNull);
});
