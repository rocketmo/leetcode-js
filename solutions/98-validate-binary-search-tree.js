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
 * @return {boolean}
 */
var isValidBST = function(root) {
    return helper(root, null, null);

    function helper(node, minVal, maxVal) {
        if (!node) {
            return true;
        }

        if ((minVal !== null && node.val <= minVal) || (maxVal !== null && node.val >= maxVal)) {
            return false;
        }

        return helper(node.left, minVal, node.val) && helper(node.right, node.val, maxVal);
    }
};

assert.equal(isValidBST(convertArrayToBinaryTree([2,1,3])), true);
assert.equal(isValidBST(convertArrayToBinaryTree([5,1,4,null,null,3,6])), false);
