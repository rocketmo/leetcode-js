const assert = require("assert");
const { convertArrayToBinaryTree } = require("../other/util");

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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const ordered = [];
    inOrderTraversal(root);
    return ordered[k - 1];

    function inOrderTraversal(node) {
        if (!node || ordered.length >= k) {
            return;
        }

        inOrderTraversal(node.left);
        ordered.push(node.val);
        inOrderTraversal(node.right);
    }
};

assert.equal(kthSmallest(convertArrayToBinaryTree([3,1,4,null,2]), 1), 1);
assert.equal(kthSmallest(convertArrayToBinaryTree([5,3,6,2,4,null,null,1]), 3), 3);
