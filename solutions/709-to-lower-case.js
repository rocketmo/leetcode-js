/**
 * 1st solution: Use built-in string method
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
  return s.toLowerCase();
};

/**
 * Second solution: Convert each character to lower case in a loop
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
  const lowerCode = 'A'.charCodeAt(0);
  const upperCode = 'Z'.charCodeAt(0);
  const diff = 'a'.charCodeAt(0) - lowerCode;

  let newStr = '';
  for (let i = 0; i < s.length; i += 1) {
    const currCharCode = s.charCodeAt(i);
    if (currCharCode >= lowerCode && currCharCode <= upperCode) {
      const nextCharCode = currCharCode + diff;
      newStr += String.fromCharCode(nextCharCode);
    } else {
      newStr += s[i];
    }
  }

  return newStr;
};
