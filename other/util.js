const { Queue } = require("@datastructures-js/queue");
const { ListNode, TreeNode } = require("./definitions");

/**
 * Converts an array into a singly-linked list.
 * @param {any[] | null} arr
 * @returns {ListNode | null} Head of the list
 */
function convertArrayToList(arr) {
    if (!arr || !arr.length) {
        return null;
    }

    let head = new ListNode(arr[0]);
    let currNode = head;

    for (let i = 1; i < arr.length; i += 1) {
        currNode.next = new ListNode(arr[i]);
        currNode = currNode.next;
    }

    return head;
}

/**
 * Converts a singly-linked list into an array.
 * @param {ListNode | null} head Head of the list
 * @returns {any[]}
 */
function convertListToArray(head) {
    if (!head) {
        return [];
    }

    const arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    return arr;
}

/**
 * Converts an array into a binary tree.
 * @param {any[] | null} arr
 * @returns {TreeNode | null} Head of the list
 */
function convertArrayToBinaryTree(arr) {
    if (!arr || !arr.length || arr[0] === null || arr[0] === undefined) {
        return null;
    }

    const head = new TreeNode(arr[0]);
    const nodeQueue = [ head ];
    let nodeIdx = 0;
    let arrIdx = 1;

    while (arrIdx < arr.length && nodeIdx < nodeQueue.length) {
        const node = nodeQueue[nodeIdx];

        if (arr[arrIdx] !== null && arr[arrIdx] !== undefined) {
            node.left = new TreeNode(arr[arrIdx]);
            nodeQueue.push(node.left);
        }

        arrIdx += 1;

        if (arr[arrIdx] !== null && arr[arrIdx] !== undefined) {
            node.right = new TreeNode(arr[arrIdx]);
            nodeQueue.push(node.right);
        }

        arrIdx += 1;
        nodeIdx += 1;
    }

    return head;
}

/**
 * Converts a binary tree to an array.
 * @param {TreeNode | null} arr Head of the list
 * @returns {any[]}
 */
function convertBinaryTreeToArray(head) {
    if (!head) {
        return [];
    }

    const arr = [ head.val ];
    const queue = new Queue([ head ]);
    let buffer = [];

    while(queue.size() > 0) {
        const node = queue.dequeue();
        addNode(node.left);
        addNode(node.right);
    }

    return arr;

    function addNode(node) {
        if (node) {
            arr.push(...buffer, node.val);
            buffer = [];
            queue.enqueue(node);
        } else {
            buffer.push(null);
        }
    }
}

exports.convertArrayToList = convertArrayToList;
exports.convertListToArray = convertListToArray;
exports.convertArrayToBinaryTree = convertArrayToBinaryTree;
exports.convertBinaryTreeToArray = convertBinaryTreeToArray;
