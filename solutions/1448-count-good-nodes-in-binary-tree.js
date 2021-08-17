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
var goodNodes = function(root) {
    const stack = [{
        node: root,
        max: null
    }];

    let ans = 0;
    while (stack.length) {
        let { node, max } = stack.pop();

        if (!node) {
            continue;
        }

        if (max === null || node.val >= max) {
            max = node.val;
            ans += 1;
        }

        if (node.left) {
            stack.push({
                node: node.left,
                max
            });
        }

        if (node.right) {
            stack.push({
                node: node.right,
                max
            });
        }
    }

    return ans;
};
