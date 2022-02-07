// native methods
const reverser = (str) => str.split("").reverse().join("");

// decrementing loop
const reverserLoop = (x) => {
  let newStr = "";
  len = x.length - 1;
  for (let i = len; i >= 0; i--) {
    newStr += x[i];
  }
  return newStr;
};
