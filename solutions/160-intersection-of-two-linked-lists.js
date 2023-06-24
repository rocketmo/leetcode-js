/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * First solution: Set
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  const nodeSet = new Set();
  let currNodeA = headA;

  while (currNodeA) {
    nodeSet.add(currNodeA);
    currNodeA = currNodeA.next;
  }

  let currNodeB = headB;
  while (currNodeB) {
    if (nodeSet.has(currNodeB)) {
      return currNodeB;
    }

    currNodeB = currNodeB.next;
  }

  return null;

};

/**
 * Second solution: Find lengths of two lists
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let lenA = getLength(headA);
  let lenB = getLength(headB);

  let currA = headA;
  let currB = headB;

  while (currA && currB) {
    if (currA === currB) {
      return currA;
    }

    if (lenA > lenB) {
      currA = currA.next;
      lenA -= 1;
    } else if (lenB > lenA) {
      currB = currB.next;
      lenB -= 1;
    } else {
      currA = currA.next;
      currB = currB.next;
      lenA -= 1;
      lenB -= 1;
    }
  }

  return null;

  function getLength(head) {
    let len = 0;
    let node = head;

    while (node) {
      len += 1;
      node = node.next;
    }

    return len;
  }
};
