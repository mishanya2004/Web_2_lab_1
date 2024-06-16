function sortStringAlphabetically(str) {
  return str.split("").sort().join("");
}

const word = "javascript";
const sortedWord = sortStringAlphabetically(word);
console.log(sortedWord);