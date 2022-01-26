export const getNumberOfPointsInCircle = (radius) => {
  // реализация функцииlet
  let counter = 0;

  for (let i = -radius; i <= radius; i++) {
    for (let y = -radius; y <= radius; y++) {
      const l = (i ** 2 + y ** 2) ** 0.5;
      if (l <= radius) counter++;
    }
  }
  return counter;
};
