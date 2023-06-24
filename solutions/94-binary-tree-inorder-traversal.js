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
var inorderTraversal = function(root) {
  const ans = [];
  helper(root);

  return ans;

  function helper(node) {
    if (!node) {
      return;
    }

    helper(node.left);
    ans.push(node.val);
    helper(node.right);
  }
};

assert.deepEqual(inorderTraversal(convertArrayToBinaryTree([1,null,2,3])), [1,3,2]);
assert.deepEqual(inorderTraversal(convertArrayToBinaryTree([])), []);
assert.deepEqual(inorderTraversal(convertArrayToBinaryTree([1])), [1]);
assert.deepEqual(inorderTraversal(convertArrayToBinaryTree([1,2])), [2,1]);
assert.deepEqual(inorderTraversal(convertArrayToBinaryTree([1,null,2])), [1,2]);
assert.deepEqual(inorderTraversal(
  convertArrayToBinaryTree([1,null,2,3,4,5,null,7,6,null,10,8,9,12,11])),
[1,5,10,3,2,8,7,9,4,12,6,11]);
