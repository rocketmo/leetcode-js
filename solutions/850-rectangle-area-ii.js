/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var rectangleArea = function(rectangles) {
  const MOD = BigInt(1e9 + 7);
  const rectArr = [];
  let ans = 0n;

  for (const rect of rectangles) {
    addRectangle(rect, 0);
  }

  for (const [ x1, y1, x2, y2 ] of rectArr) {
    const width = BigInt(x2 - x1);
    const height = BigInt(y2 - y1);
    const area = width * height;
    ans = modulo(ans + area);
  }

  return Number(ans);


  // Add new rectangles to rectArr. If any rectangle overlaps one already in rectArr,
  // break it into non-overlapping rectangles and compare with the rest of the array.
  function addRectangle(rect, idx) {
    if (idx >= rectArr.length) {
      rectArr.push(rect);
    }

    const [ x1, y1, x2, y2 ] = rect;
    const [ x3, y3, x4, y4 ] = rectArr[idx];

    // No overlap
    if (x2 <= x3 || y2 <= y3 || x1 >= x4 || y1 >= y4) {
      addRectangle(rect, idx + 1);
      return;
    }

    // Split on left side
    if (x1 < x3) {
      addRectangle([ x1, y1, x3, y2 ], idx + 1);
    }

    // Split on right side
    if (x2 > x4) {
      addRectangle([ x4, y1, x2, y2 ], idx + 1);
    }

    // Split on bottom side
    if (y1 < y3) {
      addRectangle([ Math.max(x1, x3), y1, Math.min(x2, x4), y3 ], idx + 1);
    }

    // Split on top side
    if (y2 > y4) {
      addRectangle([ Math.max(x1, x3), y4, Math.min(x2, x4), y2 ], idx + 1);
    }
  }

  function modulo (bInt) {
    return bInt % MOD;
  }
};
