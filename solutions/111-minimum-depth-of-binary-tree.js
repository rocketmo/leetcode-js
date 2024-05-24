const assert = require('assert');
const { convertArrayToBinaryTree } = require('../other/util');

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
var minDepth = function(root) {
  if (!root) {
    return 0;
  }

  const leftHeight = minDepth(root.left);
  const rightHeight = minDepth(root.right);

  if (!leftHeight) {
    return rightHeight + 1;
  } else if (!rightHeight) {
    return leftHeight + 1;
  }

  return Math.min(leftHeight, rightHeight) + 1;
};

const tree1 = convertArrayToBinaryTree([3,9,20,null,null,15,7]);
const tree2 = convertArrayToBinaryTree([2,null,3,null,4,null,5,null,6]);
const tree3 = convertArrayToBinaryTree([]);

assert.equal(minDepth(tree1), 2);
assert.equal(minDepth(tree2), 5);
assert.equal(minDepth(tree3), 0);
