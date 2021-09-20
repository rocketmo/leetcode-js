const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

    // Populate min priority queue with the head node of each list
    const pq = new MinPriorityQueue({ priority: node => node.val });

    for (const node of lists) {
        if (node) {
            pq.enqueue(node);
        }
    }

    // Add node with lowest value to the new list, add next node to the priority;
    // continue until the priority queue is empty
    let newList = null;
    let currNode = null;

    while (pq.size() > 0) {
        const node = pq.dequeue().element;

        if (!newList) {
            newList = node;
            currNode = newList;
        } else {
            currNode.next = node;
            currNode = node;
        }

        if (node.next) {
            pq.enqueue(node.next);
        }
    }

    return newList;
};
