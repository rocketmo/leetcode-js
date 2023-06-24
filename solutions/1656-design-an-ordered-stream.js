const assert = require('assert');

/**
 * @param {number} n
 */
var OrderedStream = function(n) {
  this.stream = Array(n);
  this.idx = 0;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
  const ret = [];
  this.stream[idKey - 1] = value;

  while (this.stream[this.idx]) {
    ret.push(this.stream[this.idx]);
    this.idx += 1;
  }

  return ret;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */

const os = new OrderedStream(5);
assert.deepEqual(os.insert(3, 'ccccc'), []);
assert.deepEqual(os.insert(1, 'aaaaa'), ['aaaaa']);
assert.deepEqual(os.insert(2, 'bbbbb'), ['bbbbb', 'ccccc']);
assert.deepEqual(os.insert(5, 'eeeee'), []);
assert.deepEqual(os.insert(4, 'ddddd'), ['ddddd', 'eeeee']);
