/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
  let over = true;
  let maxLen = 1;
  let currLen = 1;
  let currNum = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    if ((over && arr[i] > currNum) || (!over && arr[i] < currNum)) {
      over = !over;
      currLen += 1;
      maxLen = Math.max(maxLen, currLen);
    } else if (arr[i] !== currNum) {
      currLen = 2;
      maxLen = Math.max(maxLen, currLen);
    } else {
      currLen = 1;
    }

    currNum = arr[i];
  }

  return maxLen;
};
