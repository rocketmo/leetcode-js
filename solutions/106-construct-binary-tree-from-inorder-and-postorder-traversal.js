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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const orderMap = new Map();
    for (let i = 0; i < inorder.length; i += 1) {
        orderMap.set(inorder[i], i);
    }

    return helper(0, inorder.length, 0, postorder.length);

    function helper(inStart, inEnd, postStart, postEnd) {
        if (postEnd <= postStart) {
            return null;
        }

        const idx = orderMap.get(postorder[postEnd - 1]);
        const root = new TreeNode(inorder[idx]);
        root.left = helper(inStart, idx, postStart, postStart + idx - inStart);
        root.right = helper(idx + 1, inEnd, postEnd - inEnd + idx, postEnd - 1);

        return root;
    }
};
