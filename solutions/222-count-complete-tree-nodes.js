const assert = require('assert');
const { convertArrayToBinaryTree } = require('../other/util');

function getHeight(root) {
  let height = 0;

  while (root) {
    root = root.left;
    height += 1;
  }

  return height;
}

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
var countNodes = function(root) {
  if (!root) {
    return 0;
  }

  const leftHeight = getHeight(root.left);
  const rightHeight = getHeight(root.right);

  if (leftHeight === rightHeight) {
    return (2 ** leftHeight) + countNodes(root.right);
  }

  return (2 ** rightHeight) + countNodes(root.left);
};

assert.equal(countNodes(convertArrayToBinaryTree([1,2,3,4,5,6])), 6);
assert.equal(countNodes(convertArrayToBinaryTree([])), 0);
assert.equal(countNodes(convertArrayToBinaryTree([1])), 1);
assert.equal(countNodes(convertArrayToBinaryTree([1,2,3,4])), 4);
