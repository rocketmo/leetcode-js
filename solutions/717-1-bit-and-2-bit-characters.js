/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  const last = bits.length - 1;

  if (bits[last] === 1) {
    return false;
  }

  let oneCount = 0;
  for (let i = last - 1; i >= 0; i -= 1) {
    if (bits[i] === 1) {
      oneCount += 1;
    } else break;
  }

  return (oneCount % 2 === 0);
};
