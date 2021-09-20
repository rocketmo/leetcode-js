/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let currNode = root;

    while (true) {
        if (p.val < currNode.val && q.val < currNode.val) {
            currNode = currNode.left;
        } else if (p.val > currNode.val && q.val > currNode.val) {
            currNode = currNode.right;
        } else {
            break;
        }
    }

    return currNode;
};
