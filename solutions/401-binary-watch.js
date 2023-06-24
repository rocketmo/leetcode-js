/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
  const hours = [ 1, 2, 4, 8 ];
  const minutes = [ 1, 2, 4, 8, 16, 32 ];
  const ans = new Set();
  dfs(0, 0, 0, 0, 0);

  return Array.from(ans.values());

  function dfs(hourIdx, minIdx, currHour, currMin, onCount) {
    if (hourIdx >= hours.length && minIdx >= minutes.length) {
      if (onCount === turnedOn) {
        ans.add(`${currHour}:${padMin(currMin)}`);
      }
    } else if (hourIdx < hours.length) {
      if (currHour + hours[hourIdx] < 12) {
        dfs(hourIdx + 1, minIdx, currHour + hours[hourIdx], currMin, onCount + 1);
        dfs(hourIdx + 1, minIdx, currHour, currMin, onCount);
      } else {
        dfs(hours.length, minIdx, currHour, currMin, onCount);
      }
    } else {
      if (currMin + minutes[minIdx] < 60) {
        dfs(hourIdx, minIdx + 1, currHour, currMin + minutes[minIdx], onCount + 1);
        dfs(hourIdx, minIdx + 1, currHour, currMin, onCount);
      } else {
        dfs(hourIdx, minutes.length, currHour, currMin, onCount);
      }
    }
  }

  function padMin(min) {
    if (min < 10) {
      return `0${min}`;
    }

    return min.toString();
  }
};
