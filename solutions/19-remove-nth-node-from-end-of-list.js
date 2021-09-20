/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

/**
 * First solution: Using a stack
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const nodeStack = [];
    let currNode = head;

    while (currNode) {
        nodeStack.push(currNode);
        currNode = currNode.next;
    }

    for (let i = 0; i < n - 1; i += 1) {
        nodeStack.pop();
    }

    const nodeToRemove = nodeStack.pop();

    if (nodeToRemove === head) {
        return nodeToRemove.next;
    }

    const nextNode = nodeStack.pop();
    nextNode.next = nodeToRemove.next;

    return head;
};


/**
 * Second solution: Single pass through array
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // Create a dummy node and place it at the start of the lsit
    let dummy = new ListNode();
    dummy.next = head;

    // Create two nodes, move the front node n + 1 steps from the beginning
    let front = head;
    let back = dummy;

    for (let i = 0; i < n; i += 1) {
        front = front.next;
    }

    // Move both front and back nodes until the front node reaches the end
    while (front) {
        front = front.next;
        back = back.next;
    }

    // We've reached the nth node from the end, remove the node next to back
    back.next = back.next.next;

    return dummy.next;
};
