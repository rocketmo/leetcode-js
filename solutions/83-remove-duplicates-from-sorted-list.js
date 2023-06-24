const assert = require('assert');
const { ListNode } = require('../other/definitions');
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  const tmpHead = new ListNode(null);
  tmpHead.next = head;

  let prev = tmpHead;
  let curr = head;

  while (curr) {
    if (curr.val === prev.val) {
      prev.next = curr.next;
      curr = curr.next;
    } else {
      prev = curr;
      curr = prev.next;
    }
  }

  return tmpHead.next;
};

const list1 = convertArrayToList([1,1,2]);
const delList1 = deleteDuplicates(list1);
assert.equal(delList1.val, 1);
assert.equal(delList1.next.val, 2);
assert.equal(delList1.next.next, null);

const list2 = convertArrayToList([1,1,2,3,3]);
const delList2 = deleteDuplicates(list2);
assert.equal(delList2.val, 1);
assert.equal(delList2.next.val, 2);
assert.equal(delList2.next.next.val, 3);
assert.equal(delList2.next.next.next, null);

const list3 = convertArrayToList([0,0,0,0,0]);
const delList3 = deleteDuplicates(list3);
assert.equal(delList3.val, 0);
assert.equal(delList3.next, null);
