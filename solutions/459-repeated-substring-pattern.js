/**
 * First solution: Brute force
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  for (let i = 1; i <= Math.floor(s.length / 2); i += 1) {
    if (s.length % i > 0) {
      continue;
    }

    const subStr = s.substr(0, i);
    let startIndex = i;
    let foundDiff = false;

    while (startIndex < s.length) {
      const next = s.substr(startIndex, i);
      if (next !== subStr) {
        foundDiff = true;
        break;
      }

      startIndex += i;
    }

    if (!foundDiff) {
      return true;
    }
  }

  return false;
};

/**
 * Second solution: Clever trick
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  // Repeat s, then strip the first and last character
  const ss = s.repeat(2).substr(1, (s.length * 2) - 2);

  // Return true if s is a substring of ss
  return ss.indexOf(s) > -1;
};
