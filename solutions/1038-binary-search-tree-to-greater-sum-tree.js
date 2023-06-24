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
var bstToGst = function(root) {
  let gSum = 0;
  updateSum(root);
  return root;

  function updateSum (node) {
    if (!node) {
      return;
    }

    updateSum(node.right);

    gSum += node.val;
    node.val = gSum;

    updateSum(node.left);
  }
};
