/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Two pointers solution
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slowNode = head;
    let fastNode = head;

    while (slowNode?.next && fastNode?.next?.next) {
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;

        if (slowNode === fastNode) {
            return true;
        }
    }

    return false;
};
