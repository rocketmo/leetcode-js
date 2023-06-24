/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const sCharMap = new Map();
  const tCharSet = new Set();

  for (let i = 0; i < s.length; i += 1) {
    const sChar = s[i];
    const tChar = t[i];

    if ((sCharMap.has(sChar) && sCharMap.get(sChar) !== tChar) ||
           (!sCharMap.has(sChar) && tCharSet.has(tChar))) {
      return false;
    } else if (!sCharMap.has(sChar)) {
      sCharMap.set(sChar, tChar);
      tCharSet.add(tChar);
    }
  }

  return true;
};
