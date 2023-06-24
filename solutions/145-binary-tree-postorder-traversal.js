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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  const ans = [];
  helper(root);
  return ans;

  function helper(node) {
    if (!node) {
      return;
    }

    helper(node.left);
    helper(node.right);
    ans.push(node.val);
  }
};

assert.deepEqual(postorderTraversal(convertArrayToBinaryTree([1,null,2,3])), [3,2,1]);
assert.deepEqual(postorderTraversal(convertArrayToBinaryTree([])), []);
assert.deepEqual(postorderTraversal(convertArrayToBinaryTree([1])), [1]);
assert.deepEqual(postorderTraversal(convertArrayToBinaryTree([1,2])), [2,1]);
assert.deepEqual(postorderTraversal(convertArrayToBinaryTree([1,null,2])), [2,1]);
