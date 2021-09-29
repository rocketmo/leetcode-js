const { ListNode } = require("../other/definitions");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    const listSize = getSize(head);

    const partSize = Math.floor(listSize / k);
    let extraNodes = listSize % k;
    let currNode = head;

    const ans = [];
    for (let i = 0; i < k; i += 1) {
        let head = new ListNode(); // Temporary head node
        let currPartNode = head;
        let currPartSize = 0;

        while (currPartSize < partSize) {
            // Add current node to our list part
            currPartNode.next = currNode;

            // Go to next node
            currNode = currNode.next;

            // Update tail of part list
            currPartNode = currPartNode.next;
            currPartNode.next = null;

            currPartSize += 1;
        }

        // Append an extra node onto this part list
        if (extraNodes > 0) {
            currPartNode.next = currNode;
            currNode = currNode.next;
            currPartNode.next.next = null;
            extraNodes -= 1;
        }

        // Push the node next to our temporary head node onto the answer
        ans.push(head.next);
    }

    return ans;

    function getSize(head) {
        let listSize = 0;
        let currNode = head;

        while (currNode) {
            listSize += 1;
            currNode = currNode.next;
        }

        return listSize;
    }
};
