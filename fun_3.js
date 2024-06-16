function findGreatestCommonDivisor(a, b) {
  if (b === 0) {
    return a;
  } else {
    return findGreatestCommonDivisor(b, a % b);
  }
}

const num1 = 36;
const num2 = 24;
const gcd = findGreatestCommonDivisor(num1, num2);
console.log(gcd);