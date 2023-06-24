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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) {
    return true;
  }

  const lStack = [ root.left ];
  const rStack = [ root.right ];

  while (lStack.length) {
    const lNode = lStack.pop();
    const rNode = rStack.pop();

    if (!lNode && !rNode) {
      continue;
    } else if (lNode && rNode && lNode.val === rNode.val) {
      lStack.push(lNode.left, lNode.right);
      rStack.push(rNode.right, rNode.left);
    } else {
      return false;
    }
  }

  return true;
};

assert(isSymmetric(convertArrayToBinaryTree([1])));
assert(isSymmetric(convertArrayToBinaryTree([])));
assert(isSymmetric(convertArrayToBinaryTree([1,2,2,3,4,4,3])));
assert.equal(isSymmetric(convertArrayToBinaryTree([1,2,2,null,3,null,3])), false);
