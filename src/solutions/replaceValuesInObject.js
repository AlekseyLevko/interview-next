export const replaceValuesInObject = (data) => {
  // реализация функции
  if (typeof data === "string") return data.split(",").join(";");
  if (typeof data === "object") {
    for (let key in data) {
      data[key] = replaceValuesInObject(data[key]);
    }
  }
  return data;
};
