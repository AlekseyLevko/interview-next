import { getGroupedAnagrams } from "../solutions/getGroupedAnagrams";

test("Should output grouped anagrams", () => {
  expect(
    getGroupedAnagrams(["why", "hello", "ohell", "lloeh", "my", "ywh"])
  ).toEqual([["why", "ywh"], ["hello", "ohell", "lloeh"], ["my"]]);
});

test("Should output grouped anagrams", () => {
  expect(getGroupedAnagrams(["cat", "dog", "bird"])).toEqual([
    ["cat"],
    ["dog"],
    ["bird"],
  ]);
});

test("Should output grouped anagrams", () => {
  expect(getGroupedAnagrams(["anagram", "gramana", "gram"])).toEqual([
    ["anagram", "gramana"],
    ["gram"],
  ]);
});

test("Should output grouped anagrams", () => {
  expect(getGroupedAnagrams(["night", "stone", "pig", "thing", "gip"])).toEqual(
    [["night", "thing"], ["stone"], ["pig", "gip"]]
  );
});

test("Should output grouped anagrams", () => {
  expect(
    getGroupedAnagrams([
      "night",
      "stone",
      "pig",
      "thing",
      "gip",
      "ipg",
      "hello",
      "ightn",
      "onest",
      "inght",
    ])
  ).toEqual([
    ["night", "thing", "ightn", "inght"],
    ["stone", "onest"],
    ["pig", "gip", "ipg"],
    ["hello"],
  ]);
});
