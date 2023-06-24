const _ = require('lodash');

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var colorTheGrid = function(m, n) {
  const COLORS = [ 'R', 'G', 'B'];
  const possibleRows = getAllPossibleRows();
  const neighbourMap = getNeighbourMap();
  const dp = memoize();

  return getAnswer();


  // Dynamic programming
  // dp[r][i] === number of possible grids where the ith row is `r`
  function memoize() {
    const dp = {};

    for (const row of possibleRows) {
      dp[row] = _.fill(Array(n), 0);
      dp[row][0] = 1;
    }

    for (let i = 1; i < n; i += 1) {
      for (const row of possibleRows) {
        for (const neighbour of neighbourMap.get(row)) {
          dp[row][i] = modulo(dp[row][i] + dp[neighbour][i - 1]);
        }
      }
    }

    return dp;
  }

  // Returns all possible colored rows
  function getAllPossibleRows() {
    let allRows = [...COLORS];

    for (let i = 1; i < m; i += 1) {
      const tempRows = [];

      for (const row of allRows) {
        for (const color of COLORS) {
          if (color === row[row.length - 1]) { continue; }
          tempRows.push(`${row}${color}`);
        }
      }

      allRows = tempRows;
    }

    return allRows;
  }

  // Returns a mapping from a colored row to an array of possible neighbours
  function getNeighbourMap() {
    const neighbourMap = new Map();

    for (const row of possibleRows) {
      const possibleNeighbours = [];
      for (const row2 of possibleRows) {
        if (isValidNeighbour(row, row2)) {
          possibleNeighbours.push(row2);
        }
      }

      neighbourMap.set(row, possibleNeighbours);
    }

    return neighbourMap;
  }

  // Returns true if there are no matching colors in adjacent columns in each row
  function isValidNeighbour(row1, row2) {
    for (let i = 0; i < row1.length; i += 1) {
      if (row1[i] === row2[i]) {
        return false;
      }
    }

    return true;
  }

  // Returns the sum of possible grids of length n
  function getAnswer() {
    return Object.keys(dp).reduce((acc, row) => {
      return modulo(acc + dp[row][n - 1]);
    }, 0);
  }

  function modulo(num) {
    return num % (1e9 + 7);
  }
};
