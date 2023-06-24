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
var sumOfLeftLeaves = function(root) {
  let sum = 0;
  helper(root);
  return sum;

  function helper(node, isLeft) {
    if (!node) {
      return;
    }

    if (!node.left && !node.right) {
      sum += isLeft ? node.val : 0;
      return;
    }

    helper(node.left, true);
    helper(node.right, false);
  }
};

assert.equal(sumOfLeftLeaves(convertArrayToBinaryTree([3,9,20,null,null,15,7])), 24);
assert.equal(sumOfLeftLeaves(convertArrayToBinaryTree([1])), 0);
