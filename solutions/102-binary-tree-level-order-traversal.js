const assert = require("assert");
const { convertArrayToBinaryTree } = require("../other/util");
const { Queue } = require("@datastructures-js/queue");

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const queue = new Queue([ { node: root, level: 0 } ]);
    const ans = [];

    while (queue.size() > 0) {
        const { node, level } = queue.dequeue();

        if (!node) {
            continue;
        }

        if (!ans[level]) {
            ans[level] = [];
        }

        ans[level].push(node.val);
        queue.enqueue({ node: node.left, level: level + 1 });
        queue.enqueue({ node: node.right, level: level + 1 });
    }

    return ans;
};

assert.deepEqual(levelOrder(convertArrayToBinaryTree([3,9,20,null,null,15,7])),
    [[3],[9,20],[15,7]]);
assert.deepEqual(levelOrder(convertArrayToBinaryTree([1])), [[1]]);
assert.deepEqual(levelOrder(convertArrayToBinaryTree([])), []);
