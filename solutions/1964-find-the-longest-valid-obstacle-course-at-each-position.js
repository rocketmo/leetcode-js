/**
 * Finds the longest non-decreasing subsequence
 * @param {number[]} obstacles
 * @return {number[]}
 */
var longestObstacleCourseAtEachPosition = function(obstacles) {
  const sequence = [];
  const ans = [];

  for (let i = 0; i < obstacles.length; i += 1) {
    const num = obstacles[i];

    if (sequence.length === 0 || num >= sequence[sequence.length - 1]) {
      sequence.push(num);
      ans.push(sequence.length);
    } else {
      // Binary search to find smallest number greater than num
      let left = 0;
      let right = sequence.length;

      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (sequence[mid] <= num) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }

      sequence[left] = num;
      ans.push(left + 1);
    }
  }

  return ans;
};
