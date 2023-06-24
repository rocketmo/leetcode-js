/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const dp = [
    ['()']
  ];

  for (let i = 1; i < n; i += 1) {
    const ans = [];
    const ansSet = new Set();

    for (const str of dp[i - 1]) {
      for (let i = 0; i < str.length; i += 1) {
        if (str[i] === ')') {
          const tempAns1 = `${str.substr(0, i)}()${str.substr(i)}`;
          const tempAns2 = `${str.substr(0, i + 1)}()${str.substr(i + 1)}`;

          if (!ansSet.has(tempAns1)) {
            ansSet.add(tempAns1);
            ans.push(tempAns1);
          }

          if (!ansSet.has(tempAns2)) {
            ansSet.add(tempAns2);
            ans.push(tempAns2);
          }
        }
      }
    }

    dp.push(ans);
  }

  return dp[n - 1];
};
