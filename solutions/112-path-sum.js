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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) {
        return false;
    }

    return helper(root, root.val);

    function helper(node, currSum) {
        if (!node) {
            return false;
        }

        if (!node.left && !node.right) {
            return currSum === targetSum;
        }

        if ((node.left && helper(node.left, currSum + node.left.val)) ||
            (node.right && helper(node.right, currSum + node.right.val))) {
            return true;
        }

        return false;
    }
};

assert(hasPathSum(convertArrayToBinaryTree([5,4,8,11,null,13,4,7,2,null,null,null,1]), 22));
assert.equal(hasPathSum(convertArrayToBinaryTree([1,2,3]), 5), false);
assert.equal(hasPathSum(convertArrayToBinaryTree([1,2]), 0), false);
assert.equal(hasPathSum(convertArrayToBinaryTree([1,2]), 2), false);
assert.equal(hasPathSum(convertArrayToBinaryTree([]), 0), false);
