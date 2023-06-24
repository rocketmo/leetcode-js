const assert = require('assert');

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
  for (let i = 0; i < image.length; i += 1) {
    let left = 0;
    let right = image[i].length - 1;

    while (left <= right) {
      if (left === right) {
        image[i][left] = invert(image[i][left]);
      } else {
        const tmp = image[i][left];
        image[i][left] = invert(image[i][right]);
        image[i][right] = invert(tmp);
      }

      left += 1;
      right -= 1;
    }
  }

  return image;

  function invert(num) {
    if (num === 0) {
      return 1;
    }

    return 0;
  }
};

assert.deepEqual(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]), [[1,0,0],[0,1,0],[1,1,1]]);
assert.deepEqual(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]),
  [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]);
