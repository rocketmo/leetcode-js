/**
 * First solution: Just use built-in method (cheating!)
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle);
};

/**
 * Second solution: Brute force
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === '') {
    return 0;
  }

  for (let i = 0; i <= haystack.length - needle.length; i += 1) {
    for (let j = 0; j < needle.length; j += 1) {
      if (haystack[i + j] !== needle[j]) {
        break;
      } else if (j === needle.length - 1) {
        return i;
      }
    }
  }

  return -1;
};

// TODO: Implement using KMP algorithm
