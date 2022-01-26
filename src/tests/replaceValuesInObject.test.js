import { replaceValuesInObject } from "../solutions/replaceValuesInObject";

const input1 = {
  domains: "first.com, second.com, third.by",
  users: [
    {
      name: "Alex",
      hobbies: "programming, music, computer games",
      favoriteColors: ["black, red, green"],
    },
    {
      name: "Eugen",
      hobbies: "movies, video editing",
      favoriteColor: ["white, red"],
    },
  ],
};

const expectedOutput1 = {
  domains: "first.com; second.com; third.by",
  users: [
    {
      name: "Alex",
      hobbies: "programming; music; computer games",
      favoriteColors: ["black; red; green"],
    },
    {
      name: "Eugen",
      hobbies: "movies; video editing",
      favoriteColor: ["white; red"],
    },
  ],
};

test("Should replace symbols ',' in object", () => {
  expect(replaceValuesInObject(input1)).toEqual(expectedOutput1);
});

const input2 = [
  "1, 2, 3",
  {
    person: {
      name: "Justin",
      children: "Andy, Jack, Kate",
    },
  },
  {
    person: {
      name: "Liza",
      children: "Andy, Jack, Kate",
    },
  },
];

const expectedOutput2 = [
  "1; 2; 3",
  {
    person: {
      name: "Justin",
      children: "Andy; Jack; Kate",
    },
  },
  {
    person: {
      name: "Liza",
      children: "Andy; Jack; Kate",
    },
  },
];

test("Should replace symbols ',' in object", () => {
  expect(replaceValuesInObject(input2)).toEqual(expectedOutput2);
});
