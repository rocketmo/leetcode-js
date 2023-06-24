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
var sumNumbers = function(root) {
  let sum = 0;
  dfs(root, 0);
  return sum;

  function dfs(node, currSum) {
    if (!node) {
      return;
    }

    currSum = (currSum * 10) + node.val;

    if (!node.left && !node.right) {
      sum += currSum;
    } else {
      dfs(node.left, currSum);
      dfs(node.right, currSum);
    }
  }
};

assert.equal(sumNumbers(convertArrayToBinaryTree([1,2,3])), 25);
assert.equal(sumNumbers(convertArrayToBinaryTree([4,9,0,5,1])), 1026);
