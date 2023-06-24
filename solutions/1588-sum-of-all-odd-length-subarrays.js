const assert = require('assert');

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
  let ans = 0;

  for (let i = 0; i < arr.length; i += 1) {
    ans += arr[i];
        
    let currSum = arr[i];
    let count = 0;
    let currIdx = i + 1;

    while (currIdx < arr.length) {
      currSum += arr[currIdx];
      count += 1;

      if (count === 2) {
        ans += currSum;
        count = 0;
      }

      currIdx += 1;
    }
  }

  return ans;
};

assert.equal(sumOddLengthSubarrays([1,4,2,5,3]), 58);
assert.equal(sumOddLengthSubarrays([1,2]), 3);
assert.equal(sumOddLengthSubarrays([10,11,12]), 66);
