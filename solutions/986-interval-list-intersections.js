/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
  const ans = [];
  let i = 0;
  let j = 0;

  while (i < firstList.length && j < secondList.length) {
    const [ starti, endi ] = firstList[i];
    const [ startj, endj ] = secondList[j];

    if (starti >= startj && starti <= endj) {
      ans.push([ starti, Math.min(endi, endj)]);
    } else if (startj >= starti && startj <= endi) {
      ans.push([ startj, Math.min(endi, endj)]);
    }

    if (endi > endj) {
      j += 1;
    } else {
      i += 1;
    }
  }

  return ans;
};
