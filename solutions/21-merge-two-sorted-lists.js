/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let currNode1 = l1;
    let currNode2 = l2;
    let newListHead = null;
    let lastListNode = null;

    while (currNode1 || currNode2) {
        let nextNode;

        if (!currNode1) {
            nextNode = currNode2;
            currNode2 = currNode2.next;
        } else if (!currNode2) {
            nextNode = currNode1;
            currNode1 = currNode1.next;
        } else if (currNode1.val < currNode2.val) {
            nextNode = currNode1;
            currNode1 = currNode1.next;
        } else {
            nextNode = currNode2;
            currNode2 = currNode2.next;
        }

        if (!newListHead) {
            newListHead = nextNode;
        }

        if (lastListNode) {
            lastListNode.next = nextNode;
        }

        nextNode.next = null;
        lastListNode = nextNode;
    }

    return newListHead;
};
