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
var countDominantNodes = function(root) {
  const { numberOfDominantNodes } = countDominantNodesRecursive(root);
  return numberOfDominantNodes;
};

function countDominantNodesRecursive(root) {
  if (!root) {
    return { numberOfDominantNodes: 0, max: -Infinity };
  }

  if (!root.left && !root.right) {
    return { numberOfDominantNodes: 1, max: root.val };
  }

  const left = countDominantNodesRecursive(root.left);
  const right = countDominantNodesRecursive(root.right);

  const max = Math.max(left.max, right.max);
  let numberOfDominantNodes = left.numberOfDominantNodes + right.numberOfDominantNodes;

  if (root.val >= max) {
    numberOfDominantNodes++;
  }

  return { numberOfDominantNodes, max: Math.max(max, root.val) };
}

const tree = convertArrayToBinaryTree([5,3,8,2,4,7,1]);
assert.equal(countDominantNodes(tree), 5);
