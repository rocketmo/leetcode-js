/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const charCount = new Map();
  for (const char of s) {
    const currCount = charCount.get(char) ?? 0;
    charCount.set(char, currCount + 1);
  }

  const charCountArr = [];
  for (const char of charCount.keys()) {
    charCountArr.push({ char, count: charCount.get(char) });
  }

  charCountArr.sort((a, b) => b.count - a.count);

  let str = '';
  for (const { char, count } of charCountArr) {
    for (let i = 0; i < count; i += 1) {
      str += char;
    }
  }

  return str;
};
