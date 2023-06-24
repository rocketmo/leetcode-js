/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let foundLastWord = false;
  let len = 0;

  for (let i = s.length - 1; i >= 0; i -= 1) {
    if (s[i] !== ' ') {
      len += 1;
      foundLastWord = true;
    } else if (foundLastWord) {
      break;
    }
  }

  return len;
};
