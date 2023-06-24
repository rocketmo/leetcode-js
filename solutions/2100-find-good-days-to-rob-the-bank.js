const assert = require('assert');

/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function(security, time) {
  // days[i][0] => Number of days prior to the ith day where # of guards are non-increasing
  // days[i][1] => Number of days after the ith day where # of guards are non-decreasing
  const days = [];

  for (let i = 0; i < security.length; i += 1) {
    const daysPrior = (i === 0 || security[i] > security[i - 1]) ? 0 : 1 + days[i - 1][0];
    days.push([daysPrior]);
  }

  for (let i = security.length - 1; i >= 0; i -= 1) {
    const hasDecreasingGuards = (i === security.length - 1 || security[i] > security[i + 1]);
    const daysAfter = hasDecreasingGuards ? 0 : 1 + days[i + 1][1];
    days[i].push(daysAfter);
  }

  // Go through all days and list all that have `time` days with non-increasing # of guards prior
  // and `time` days with non-decreasing # of guards after
  const ans = [];
  for (let i = 0; i < days.length; i += 1) {
    if (days[i][0] >= time && days[i][1] >= time) {
      ans.push(i);
    }
  }

  return ans;
};

assert.deepEqual(goodDaysToRobBank([5,3,3,3,5,6,2], 2), [2,3]);
assert.deepEqual(goodDaysToRobBank([1,1,1,1,1], 0), [0,1,2,3,4]);
assert.deepEqual(goodDaysToRobBank([1,2,3,4,5,6], 2), []);
assert.deepEqual(goodDaysToRobBank([1], 5), []);
