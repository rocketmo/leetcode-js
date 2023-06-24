/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
  let trueCount = 0;
  let falseCount = 0;
  let backIdx = 0;
  let ans = 0;

  for (let i = 0; i < answerKey.length; i += 1) {
    trueCount += (answerKey[i] === 'T') ? 1 : 0;
    falseCount += (answerKey[i] === 'F') ? 1 : 0;

    while (trueCount > k && falseCount > k) {
      trueCount -= (answerKey[backIdx] === 'T') ? 1 : 0;
      falseCount -= (answerKey[backIdx] === 'F') ? 1 : 0;
      backIdx += 1;
    }

    ans = Math.max(ans, trueCount + falseCount);
  }

  return ans;
};
