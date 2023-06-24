const { TreeNode } = require('../other/definitions');

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  let curr = root;

  if (!root) {
    return new TreeNode(val);
  }

  while (true) {
    if (val > curr.val) {
      if (!curr.right) {
        curr.right = new TreeNode(val);
        break;
      }

      curr = curr.right;
    } else {
      if (!curr.left) {
        curr.left = new TreeNode(val);
        break;
      }

      curr = curr.left;
    }
  }

  return root;
};
