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
var preorderTraversal = function(root) {
  const ans = [];
  helper(root);
  return ans;

  function helper(node) {
    if (!node) {
      return;
    }

    ans.push(node.val);
    helper(node.left);
    helper(node.right);
  }
};

assert.deepEqual(preorderTraversal(convertArrayToBinaryTree([1,null,2,3])), [1,2,3]);
assert.deepEqual(preorderTraversal(convertArrayToBinaryTree([])), []);
assert.deepEqual(preorderTraversal(convertArrayToBinaryTree([1])), [1]);
assert.deepEqual(preorderTraversal(convertArrayToBinaryTree([1,2])), [1,2]);
assert.deepEqual(preorderTraversal(convertArrayToBinaryTree([1,null,2])), [1,2]);
assert.deepEqual(preorderTraversal(convertArrayToBinaryTree([1,4,3,2])), [1,4,2,3]);
