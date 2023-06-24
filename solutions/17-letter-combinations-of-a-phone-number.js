/**
 * First solution
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const dict = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  };

  let ans = [];

  for (let i = 0; i < digits.length; i += 1) {
    if (ans.length === 0) {
      ans.push(...dict[digits[i]]);
      continue;
    }

    const newAns = [];
    for (const str of ans) {
      for (const char of dict[digits[i]]) {
        newAns.push(str + char);
      }
    }

    ans = newAns;
  }

  return ans;
};

/**
 * Second solution: Cleaner version, using a queue
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const dict = [ '', '', 'abc', 'def', 'ghi', 'jkl', 'mno',
    'pqrs', 'tuv', 'wxyz' ];

  let ans = [];

  for (let i = 0; i < digits.length; i += 1) {
    if (ans.length === 0) {
      ans.push(...dict[digits[i]]);
      continue;
    }

    while (ans[0].length === i) {
      const curr = ans.shift();
      for (const char of dict[digits[i]]) {
        ans.push(curr + char);
      }
    }
  }

  return ans;
};
