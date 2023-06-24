/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
  let startZeroes = 0;
  let endOnes = 0;

  // Count number of zeroes at start of string
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] !== '0') { break; }
    startZeroes += 1;
  }

  // Count number of ones at end of string
  for (let i = s.length - 1; i >= 0; i -= 1) {
    if (s[i] !== '1') { break; }
    endOnes += 1;
  }

  // Count numbers in between
  const numMidZeroes = [ 0 ];

  for (let i = startZeroes; i < s.length - endOnes; i += 1) {
    if (s[i] === '0') {
      numMidZeroes.push(numMidZeroes[numMidZeroes.length - 1] + 1);
    } else {
      numMidZeroes.push(numMidZeroes[numMidZeroes.length - 1]);
    }
  }

  // Answer is the minimum number of changes after splitting the middle string
  return numMidZeroes.reduce((acc, val, idx) => {
    const leftOnes = idx - val,
      rightZeroes = numMidZeroes[numMidZeroes.length - 1] - val;
    return Math.min(acc, leftOnes + rightZeroes);
  }, Number.MAX_SAFE_INTEGER);
};
