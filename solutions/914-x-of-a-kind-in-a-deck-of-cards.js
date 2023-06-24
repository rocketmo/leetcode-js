/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  const countMap = new Map();

  // Count the number of cards in the deck for each number
  for (const num of deck) {
    if (!countMap.has(num)) {
      countMap.set(num, 0);
    }

    let count = countMap.get(num) + 1;
    countMap.set(num, count);
  }

  // Find the minimum count, if it equals zero, then we cannot choose a valid x
  let minCount = Number.MAX_SAFE_INTEGER;
  for (const count of countMap.values()) {
    minCount = Math.min(minCount, count);
  }

  if (minCount < 2) {
    return false;
  }

  // Find a common factor for each count combination; if a combination does not have a common
  // factor, we cannot choose a valid x.
  const counts = Array.from(countMap.values());
  for (let i = 0; i < counts.length; i += 1) {
    for (let j = i + 1; j < counts.length; j += 1) {
      if (!hasCommonFactor(counts[i], counts[j])) {
        return false;
      }
    }
  }

  return true;

  // Returns true if the two given numbers have a common factor greater than 1
  function hasCommonFactor(max, min) {
    if (max < min) {
      let tmp = max;
      max = min;
      min = tmp;
    }

    while (min > 1) {
      if (max % min === 0) {
        return true;
      }

      let tmp = min;
      min = max % min;
      max = tmp;
    }

    return false;
  }
};
