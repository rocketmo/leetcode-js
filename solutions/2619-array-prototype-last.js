const assert = require('assert');

Array.prototype.last = function() {
  if (this.length) {
    return this[this.length - 1];
  }

  return -1;
};

const arr1 = [1, 2, 3];
const arr2 = [];

assert.equal(arr1.last(), 3);
assert.equal(arr2.last(), -1);
