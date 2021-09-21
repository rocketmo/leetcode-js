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

exports.convertArrayToList = convertArrayToList;
exports.convertArrayToBinaryTree = convertArrayToBinaryTree;
