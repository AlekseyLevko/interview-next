export const cloneDeep = (data) => {
  // реализация функции
  const clone = Array.isArray(data) ? [] : {};
  for (const key in data) {
    if (typeof data[key] !== "object" || data[key] === null) {
      clone[key] = data[key];
    } else {
      clone[key] = cloneDeep(data[key]);
    }
  }
  return clone;
};
