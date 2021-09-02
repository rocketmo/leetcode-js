/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let count = 1;
    let midNode = head;
    let currNode = head.next;

    while (currNode) {
        count += 1;

        if (count == 2) {
            midNode = midNode.next;
            count = 0;
        }

        currNode = currNode.next;
    }

    return midNode;
};
