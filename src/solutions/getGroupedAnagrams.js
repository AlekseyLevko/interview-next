export const getGroupedAnagrams = (anagrams) => {
  // реализация функции
  const sortedAnagrams = anagrams.map((anagram) =>
    anagram.split("").sort().join("")
  );

  const groupedAnagramIndexes = {};

  sortedAnagrams.forEach((value, index) => {
    if (groupedAnagramIndexes[value] === undefined) {
      groupedAnagramIndexes[value] = [index];
    } else {
      groupedAnagramIndexes[value] = [...groupedAnagramIndexes[value], index];
    }
  });

  return Object.values(groupedAnagramIndexes).map((indexGroup) => {
    return indexGroup.map((index) => anagrams[index]);
  });
};
