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
var swapPairs = function(head) {
    let prevNode = null;
    let swapNode1 = null;
    let swapNode2 = null;
    let currNode = head;

    while (currNode) {
        if (!swapNode1) {
            swapNode1 = currNode;
            currNode = currNode.next;
        } else {
            swapNode2 = currNode;
            currNode = currNode.next;
            swapNode2.next = swapNode1;
            swapNode1.next = currNode;

            if (!prevNode) {
                head = swapNode2;
            } else {
                prevNode.next = swapNode2;
            }

            prevNode = swapNode1;
            swapNode1 = null;
            swapNode2 = null;
        }
    }

    return head;
};
