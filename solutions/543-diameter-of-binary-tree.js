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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let ans = 0;
    findDiameter(root);

    return ans;

    function findDiameter(node) {
        if (!node) {
            return 0;
        }

        const leftLen = findDiameter(node.left);
        const rightLen = findDiameter(node.right);
        ans = Math.max(ans, leftLen + rightLen);

        return Math.max(leftLen, rightLen) + 1;
    }
};

assert.equal(diameterOfBinaryTree(convertArrayToBinaryTree([1,2,3,4,5])), 3);
assert.equal(diameterOfBinaryTree(convertArrayToBinaryTree([1,2])), 1);
