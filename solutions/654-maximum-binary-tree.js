const { TreeNode } = require("../other/definitions");

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if (!nums || !nums.length) {
        return null;
    }

    let max = nums[0];
    let maxIdx = 0;

    for (let i = 1; i < nums.length; i += 1) {
        if (nums[i] > max) {
            max = nums[i];
            maxIdx = i;
        }
    }

    const root = new TreeNode(max);
    root.left = constructMaximumBinaryTree(nums.slice(0, maxIdx));
    root.right = constructMaximumBinaryTree(nums.slice(maxIdx + 1));

    return root;
};
