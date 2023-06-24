/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
  let longestKey = keysPressed[0];
  let longestTime = releaseTimes[0];

  for (let i = 1; i < releaseTimes.length; i += 1) {
    let currTime = releaseTimes[i] - releaseTimes[i - 1];
    let currKey = keysPressed[i];

    if (currTime > longestTime || (currTime === longestTime && currKey > longestKey)) {
      longestKey = currKey;
      longestTime = currTime;
    }
  }

  return longestKey;
};
