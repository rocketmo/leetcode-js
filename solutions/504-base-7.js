/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  if (num === 0) {
    return '0';
  }

  let base7 = '';
  let sign = num < 0 ? '-' : '';
  let absVal = Math.abs(num);

  while (absVal > 0) {
    const digit = absVal % 7;
    absVal = Math.floor(absVal / 7);

    base7 = `${digit}${base7}`;
  }


  return sign + base7;
};
