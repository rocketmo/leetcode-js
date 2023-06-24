/**
 * This might be cheating...
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  s.reverse();
};

/**
 * Another solution, using a pointer
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let i = 0;

  while (i < s.length - 1 - i) {
    // Swap left and right characters
    let right = s.length - 1 - i;
    let rightVal = s[right];
    s[right] = s[i];
    s[i] = rightVal;

    i += 1;
  }
};
