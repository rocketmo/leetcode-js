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
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    const ordered = [];
    inOrderTraversal(root);
    return constructBalancedTree(ordered);

    function inOrderTraversal(node) {
        if (!node) {
            return;
        }

        inOrderTraversal(node.left);
        ordered.push(node);
        inOrderTraversal(node.right);
    }

    function constructBalancedTree(arr) {
        if (!arr || !arr.length) {
            return null;
        }

        const mid = Math.floor(arr.length / 2);
        const root = arr[mid];
        root.left = constructBalancedTree(arr.slice(0, mid));
        root.right = constructBalancedTree(arr.slice(mid + 1));

        return root;
    }
};
