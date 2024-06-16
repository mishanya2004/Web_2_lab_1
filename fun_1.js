function splitStringToWords(str) {
  str = str.trim();
  const words = str.split(" ");
  return words;
}

const str = "   Hello world!    ";
const words = splitStringToWords(str);
console.log(words); // ["Hello", "world!"]