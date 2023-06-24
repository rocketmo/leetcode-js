/**
 * @param {string} num
 * @param {number[]} change
 * @return {string}
 */
var maximumNumber = function(num, change) {
  let foundSubStr = false;
  const digits = num.split('');

  for (let i = 0; i < digits.length; i += 1) {
    const digit = Number(digits[i]);

    if (change[digit] > digit || (change[digit] >= digit && foundSubStr)) {
      foundSubStr = true;
      digits[i] = String(change[digit]);
    } else if (foundSubStr) {
      break;
    }
  }

  return digits.join('');
};
