export const randomString = () => {
  const num = Math.random();
  if (num > 0.5) {
    return "green";
  } else {
    return "red";
  }
};
