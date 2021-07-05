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
 var addTwoNumbers = function(l1, l2) {
    let currentListNode1 = l1;
    let currentListNode2 = l2;
    let carryover = 0;

    const sum = new ListNode();
    let currentSumNode = sum;

    while (true) {
        const val1 = currentListNode1?.val ?? 0;
        const val2 = currentListNode2?.val ?? 0;
        const valSum = val1 + val2 + carryover;

        currentSumNode.val = valSum >= 10 ? valSum - 10 : valSum;
        carryover = valSum >= 10 ? 1 : 0;

        currentListNode1 = currentListNode1?.next;
        currentListNode2 = currentListNode2?.next;

        if (!currentListNode1 && !currentListNode2) {
            if (carryover) {
                currentSumNode.next = new ListNode(carryover);
            }

            break;
        }

        currentSumNode.next = new ListNode();
        currentSumNode = currentSumNode.next;
    }

    return sum;
};
