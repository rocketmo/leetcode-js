/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
  const threshold = Math.floor((arr.length / 4));
  let currCount = 0;
  let currNum = -1;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === currNum) {
      currCount += 1;
    } else {
      currNum = arr[i];
      currCount = 1;
    }

    if (currCount > threshold) {
      return currNum;
    }
  }

  return null;

};
