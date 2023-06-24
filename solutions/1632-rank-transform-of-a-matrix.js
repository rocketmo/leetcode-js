const _ = require('lodash');

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var matrixRankTransform = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  const ans = [];
  for (let i = 0; i < m; i += 1) {
    ans.push(_.fill(Array(n), 0));
  }

  // For each unique number, map to each coordinate it can be found in matrix
  const numMap = new Map();
  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      const num = matrix[i][j];

      if (!numMap.has(num)) {
        numMap.set(num, []);
      }

      numMap.get(num).push([i, j]);
    }
  }

  // Sort each unique number (ascending order)
  const ranks = Array.from(numMap.keys());
  ranks.sort((a, b) => a - b);

  const maxRankRow = _.fill(Array(m), 0);
  const maxRankCol = _.fill(Array(n), 0);

  // Assign ranks for each value, going from lowest to greatest
  for (let i = 0; i < ranks.length; i += 1) {
    const num = ranks[i];

    // Repeat until all coordinates with the same value have been ranked
    while (numMap.get(num).length > 0) {
      const rowsUsed = new Set();
      const colsUsed = new Set();
      const coords = numMap.get(num);

      // Get all coordinates connected by similar rows & columns
      const [ rootx, rooty ] = coords[0];
      rowsUsed.add(rootx);
      colsUsed.add(rooty);

      const coordsUsed = new Set();
      coordsUsed.add(0);

      while (true) {
        let added = 0;
        for (let i = 1; i < coords.length; i += 1) {
          if (coordsUsed.has(i)) { continue; }

          const [ currx, curry ] = coords[i];
          if (rowsUsed.has(currx) || colsUsed.has(curry)) {
            rowsUsed.add(currx);
            colsUsed.add(curry);
            coordsUsed.add(i);
            added += 1;
          }
        }

        if (added === 0) { break; }
      }

      const connectedCoords = [];
      const remainder = [];

      for (let i = 0; i < coords.length; i += 1) {
        if (coordsUsed.has(i)) {
          connectedCoords.push(coords[i]);
        } else {
          remainder.push(coords[i]);
        }
      }

      // Put remaining coordinates back into numMap
      numMap.set(num, remainder);

      // Find max rank of all connected coordinates
      let maxRank = 0;
      for (const [ currx, curry ] of connectedCoords) {
        maxRank = Math.max(maxRank, Math.max(maxRankRow[currx], maxRankCol[curry]) + 1);
      }

      // Update max rank for connected rows and columns; set answer for connected coordinates
      for (const [ currx, curry ] of connectedCoords) {
        maxRankRow[currx] = maxRankCol[curry] = ans[currx][curry] = maxRank;
      }
    }
  }

  return ans;
};
