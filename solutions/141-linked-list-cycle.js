/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let currNode = head;

    while (currNode) {
        if (currNode.visited) {
            return true;
        }

        currNode.visited = true;
        currNode = currNode.next;
    }

    return false;
};
