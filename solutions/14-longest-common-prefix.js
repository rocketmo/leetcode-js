/**
 * Vertical scanning solution
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 1) {
    return strs[0];
  }

  let lcp = '';
  for (let i = 0; i < strs[0].length; i += 1) {
    let hasCommonChar = true;

    for (let j = 1; j < strs.length; j += 1) {
      if (strs[j][i] !== strs[0][i]) {
        hasCommonChar = false;
        break;
      }
    }

    if (hasCommonChar) {
      lcp += strs[0][i];
    } else {
      break;
    }
  }

  return lcp;
};
