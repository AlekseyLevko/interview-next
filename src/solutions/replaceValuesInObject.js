export const replaceValuesInObject = (data) => {
  if (typeof data === "string") return data.split(",").join(";");
  if (typeof data === "object") {
    for (let key in data) {
      data[key] = replaceValuesInObject(data[key]);
    }
  }
  return data;
};

const data = {
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
