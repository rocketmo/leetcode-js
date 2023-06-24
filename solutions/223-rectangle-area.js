/**
 * Also see P850 (Rectangle Area II)
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  const rectArr = [ [ ax1, ay1, ax2, ay2 ] ];

  // Second rectangle does not overlap the first rectangle
  if (ax2 <= bx1 || ay2 <= by1 || ax1 >= bx2 || ay1 >= by2) {
    rectArr.push([ bx1, by1, bx2, by2 ]);
  }

  // The two rectangles overlap
  // Split second rectangle into non-overlapping rectangles
  else {
    // Split on left side
    if (bx1 < ax1) {
      rectArr.push([ bx1, by1, ax1, by2 ]);
    }

    // Split on right side
    if (bx2 > ax2) {
      rectArr.push([ ax2, by1, bx2, by2 ]);
    }

    // Split on bottom side
    if (by1 < ay1) {
      rectArr.push([ Math.max(bx1, ax1), by1, Math.min(bx2, ax2), ay1 ]);
    }

    // Split on top side
    if (by2 > ay2) {
      rectArr.push([ Math.max(bx1, ax1), ay2, Math.min(bx2, ax2), by2 ]);
    }
  }

  // Calculate total area
  return rectArr.reduce((acc, [ x1, y1, x2, y2 ]) => {
    return acc + ((x2 - x1) * (y2 - y1));
  }, 0);
};
