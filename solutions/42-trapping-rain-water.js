/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const peaks = [];
  let totalWater = 0;

  // Find all peaks in the elevation
  for (let i = 0; i < height.length; i += 1) {
    const greaterThanLeft = i === 0 || height[i] >= height[i - 1];
    const greaterThanRight = i === (height.length - 1) || height[i] >= height[i + 1];

    if (greaterThanLeft && greaterThanRight) {
      peaks.push(i);
    }
  }

  // Calculate amount of trapped water between peaks
  for (let i = 0; i < peaks.length - 1; i += 1) {
    const left = peaks[i];

    // Find right peak
    let right = peaks[i + 1];
    if (height[left] > height[right]) {
      for (let j = i + 1; j < peaks.length; j += 1) {
        let currIndex = peaks[j];

        if (height[currIndex] >= height[right]) {
          right = currIndex;
          i = j - 1;
        }

        if (height[currIndex] >= height[left]) {
          break;
        }
      }
    }

    const minPeakHeight = Math.min(height[left], height[right]);

    for (let j = left + 1; j < right; j += 1) {
      const currHeight = height[j];
      totalWater += Math.max(0, minPeakHeight - currHeight);
    }
  }

  return totalWater;
};

// TODO: Solve with dynamic programming
