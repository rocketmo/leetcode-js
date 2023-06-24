/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function(arr) {
  arr.sort((a, b) => a - b);
  const numMap = new Map();

  for (const num of arr) {
    let other;

    if (numMap.has(num * 2)) {
      other = num * 2;
    } else if (num % 2 === 0 && numMap.has(num / 2)) {
      other = num / 2;
    } else {
      let count = numMap.has(num) ? numMap.get(num) + 1 : 1;
      numMap.set(num, count);
      continue;
    }

    let count = numMap.get(other) - 1;
    if (count === 0) {
      numMap.delete(other);
    } else {
      numMap.set(other, count);
    }
  }

  return numMap.size === 0;
};
