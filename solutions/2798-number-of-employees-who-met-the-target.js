const assert = require('assert');

/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
  return hours.filter((h) => h >= target).length;
};

assert.equal(numberOfEmployeesWhoMetTarget([1, 2, 3], 2), 2);
