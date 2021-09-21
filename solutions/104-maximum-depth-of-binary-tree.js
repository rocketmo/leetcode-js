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
var maxDepth = function(root) {
    let ans = 0;
    const stack = [ { node: root, depth: 0 } ];

    while (stack.length) {
        const { node, depth } = stack.pop();

        if (node) {
            ans = Math.max(ans, depth + 1);
            stack.push(
                { node: node.left, depth: depth + 1 },
                { node: node.right, depth: depth + 1 }
            );
        }
    }

    return ans;
};

assert.equal(maxDepth(convertArrayToBinaryTree([3,9,20,null,null,15,7])), 3);
assert.equal(maxDepth(convertArrayToBinaryTree([1,null,2])), 2);
assert.equal(maxDepth(convertArrayToBinaryTree([])), 0);
assert.equal(maxDepth(convertArrayToBinaryTree([1])), 1);
