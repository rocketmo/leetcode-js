const { ListNode } = require('../other/definitions');

/**
 * First solution: Stack, requires O(k) memory
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  const stack = [];
  let newHead = null;
  let currNodeNew = null;
  let currNodeOld = head;

  while (currNodeOld) {
    stack.push(currNodeOld);
    currNodeOld = currNodeOld.next;

    if (stack.length < k) {
      continue;
    }

    while (stack.length > 0) {
      if (!newHead) {
        newHead = stack.pop();
        newHead.next = null;
        currNodeNew = newHead;
      } else {
        const next = stack.pop();
        currNodeNew.next = next;
        next.next = null;
        currNodeNew = next;
      }
    }

    currNodeNew.next = currNodeOld;
  }

  return newHead;

};

/**
 * Second solution: Recursion, requires O(n/k) memory
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let curr = head;
  let count = 0;

  while (curr && count !== k) {
    curr = curr.next;
    count++;
  }

  if (count === k) {
    curr = reverseKGroup(curr, k);

    while (count > 0) {
      const tmp = head.next;
      head.next = curr;
      curr = head;
      head = tmp;
      count -= 1;
    }

    head = curr;
  }

  return head;
};

/**
 * Third solution: Keep track of the left and right node for each group to be reversed, and reverse
 * in-place. Also, keep track of the last node of the previous so that we can connect to the next
 * group. Requires O(1) memory.
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let dummy = new ListNode(0, head);
  let prevGroupEnd = dummy;
  let left = head, right = head, count = 0;

  while (right) {
    if (count < k) {
      right = right.next;
      count += 1;
    }

    if (count === k) {
      let tmpLeft = left;
      let tmpRight = right;

      while (count > 0) {
        const tmp = tmpLeft.next;
        tmpLeft.next = tmpRight;
        tmpRight = tmpLeft;
        tmpLeft = tmp;
        count -= 1;
      }

      prevGroupEnd.next = tmpRight;
      prevGroupEnd = left;
      left = right;

    }
  }

  return dummy.next;
};
