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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
  const ans = [];
  const deleteSet = new Set(to_delete);
  helper(root, null);
  return ans;

  function helper(node, parent, isLeft) {
    if (!node) {
      return;
    }

    if (deleteSet.has(node.val)) {
      if (parent) {
        if (isLeft) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      }

      helper(node.left, null);
      helper(node.right, null);
    } else {
      if (!parent) {
        ans.push(node);
      }

      helper(node.left, node, true);
      helper(node.right, node, false);
    }
  }
};
