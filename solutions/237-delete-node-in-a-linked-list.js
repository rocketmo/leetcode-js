/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    let curr = node;

    while (true) {
        curr.val = curr.next.val;
        if (!curr?.next?.next) {
            curr.next = null;
            break;
        }

        curr = curr.next;
    }
};
