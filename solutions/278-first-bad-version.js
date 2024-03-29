const assert = require('assert');

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
  return function(n) {
    let left = 1;
    let right = n + 1;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  };
};

const fn = solution(num => { return num >= 4; });
assert.equal(fn(5), 4);
