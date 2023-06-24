const assert = require('assert');
const { convertArrayToList } = require('../other/util');

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  let str = '';
  let currNode = head;

  while (currNode) {
    str += currNode.val;
    currNode = currNode.next;
  }

  return parseInt(str, 2);
};

assert.equal(getDecimalValue(convertArrayToList([1,0,1])), 5);
assert.equal(getDecimalValue(convertArrayToList([0])), 0);
assert.equal(getDecimalValue(convertArrayToList([1])), 1);
assert.equal(getDecimalValue(convertArrayToList([1,0,0,1,0,0,1,1,1,0,0,0,0,0,0])), 18880);
assert.equal(getDecimalValue(convertArrayToList([0,0,0])), 0);
