/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  s = s.trim();
  let num = 0;
  let digitIndex = 0;
  let negate = false;
  let maxNum = 2 ** 31;

  if (digitIndex < s.length && /\+|-/.test(s[digitIndex])) {
    negate = s[digitIndex] === '-';
    digitIndex += 1;
  }

  while (digitIndex < s.length && /[0-9]/.test(s[digitIndex])) {
    num = (num * 10) + Number(s[digitIndex]);

    if (negate && num >= maxNum) {
      num = maxNum;
      break;
    } else if (!negate && num >= maxNum - 1) {
      num = maxNum - 1;
      break;
    }

    digitIndex += 1;
  }

  return (negate ? -num : num);

};
