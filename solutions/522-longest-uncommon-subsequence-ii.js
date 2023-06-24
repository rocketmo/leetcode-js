/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function(strs) {
  // Sort by string length, longest to shortest
  strs.sort((a, b) => b.length - a.length);

  // For each string, check if it is a common subsequence in all other strings
  for (let i = 0; i < strs.length; i += 1) {
    let isUncommon = true;

    for (let j = 0; j < strs.length; j += 1) {
      // Do not compare string with itself
      if (i === j) { continue; }

      // Skip any string that is shorter
      if (strs[i].length > strs[j].length) {
        break;
      }

      // Check if there is a common subsequence
      if (strs[i] === strs[j] ||
                (strs[i].length < strs[j].length && hasSubSeq(strs[j], strs[i]))) {
        isUncommon = false;
        break;
      }
    }

    // String is not a subsequence in any other string, we have our answer
    if (isUncommon) {
      return strs[i].length;
    }
  }

  return -1;


  // Returns true if subSeq is a subsequence of str
  function hasSubSeq(str, subSeq) {
    let subIdx = 0;

    for (let i = 0; i < str.length && subIdx < subSeq.length; i += 1) {
      if (str[i] === subSeq[subIdx]) {
        subIdx += 1;
      }
    }

    return subIdx === subSeq.length;
  }
};
