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
var reverseList = function(head) {
  if (!head) {
    return head;
  }

  let currHead = head;
  let currNode = head.next;
  currHead.next = null;

  while (currNode) {
    let tmp = currNode.next;
    currNode.next = currHead;
    currHead = currNode;
    currNode = tmp;
  }

  return currHead;
};
