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
var isBalanced = function(root) {
  return isBalancedHelper(root) >= 0;
};

/**
 * Determines if the given tree is balanced.
 * @param root The root node of the tree
 * @returns -1 if the tree is unbalanced; the height of the tree if balanced
 */
function isBalancedHelper(root) {
  if (!root) {
    return true;
  }

  const leftTreeHeight = isBalancedHelper(root.left);
  const rightTreeHeight = isBalancedHelper(root.right);

  if (leftTreeHeight < 0 || rightTreeHeight < 0 || Math.abs(leftTreeHeight - rightTreeHeight) > 1) {
    return -1;
  }

  return Math.max(leftTreeHeight, rightTreeHeight) + 1;
}

const tree1 = convertArrayToBinaryTree([3,9,20,null,null,15,7]);
const tree2 = convertArrayToBinaryTree([1,2,2,3,3,null,null,4,4]);
const tree3 = convertArrayToBinaryTree([]);

assert.equal(isBalanced(tree1), true);
assert.equal(isBalanced(tree2), false);
assert.equal(isBalanced(tree3), true);
