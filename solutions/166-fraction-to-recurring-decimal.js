/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  let isPositive = ((numerator <= 0 && denominator <= 0) || (numerator >= 0 && denominator >= 0));
  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);

  let str = Math.floor(numerator / denominator).toString();
  let rem = numerator % denominator;

  if (rem > 0) {
    str += '.';
    let currIdx = str.length;
    const prevDec = new Map();

    while (rem > 0) {
      const curr = rem * 10;
      if (prevDec.has(curr)) {
        const idx = prevDec.get(curr);
        const subStr = str.substr(idx);
        str = `${str.substr(0, idx)}(${subStr})`;
        break;
      }

      const quotient = Math.floor(curr / denominator);
      prevDec.set(curr, currIdx);
      str += quotient.toString();
      rem = curr % denominator;
      currIdx += 1;
    }
  }

  if (!isPositive) {
    return `-${str}`;
  }

  return str;
};
