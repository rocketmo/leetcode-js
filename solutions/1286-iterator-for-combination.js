const assert = require('assert');

/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
  this.characters = characters;
  this.combinationLength = combinationLength;
  this.nextIdx = [];

  for (let i = 0; i < combinationLength; i += 1) {
    this.nextIdx.push(i);
  }
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
  if (!this.hasNext()) {
    return '';
  }

  let nextStr = '';
  for (const idx of this.nextIdx) {
    nextStr += this.characters[idx];
  }

  this.updateNextIdx();
  return nextStr;
};

/**
 * @return {void}
 */
CombinationIterator.prototype.updateNextIdx = function() {
  let hasUpdated = false;

  for (let i = 0; i < this.nextIdx.length; i += 1) {
    const comboIdx = this.nextIdx.length - 1 - i;
    const charIdx = this.nextIdx[comboIdx];

    if (charIdx + i + 1 < this.characters.length) {
      this.nextIdx[comboIdx] = charIdx + 1;
      for (let j = 0; j < i; j += 1) {
        this.nextIdx[comboIdx + j + 1] = charIdx + j + 2;
      }

      hasUpdated = true;
      break;
    }
  }

  // No next combination
  if (!hasUpdated) {
    this.nextIdx = [];
  }
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
  return this.nextIdx.length > 0;
};

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

const comboIter = new CombinationIterator('abc', 2);
assert.equal(comboIter.next(), 'ab');
assert.equal(comboIter.hasNext(), true);
assert.equal(comboIter.next(), 'ac');
assert.equal(comboIter.hasNext(), true);
assert.equal(comboIter.next(), 'bc');
assert.equal(comboIter.hasNext(), false);
