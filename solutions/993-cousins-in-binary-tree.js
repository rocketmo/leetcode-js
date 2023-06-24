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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  const xInfo = findNode(root, null, x, 1);
  const yInfo = findNode(root, null, y, 1);

  if (xInfo && yInfo && xInfo.depth === yInfo.depth && xInfo.parent !== yInfo.parent) {
    return true;
  }

  return false;

  function findNode(currNode, parent, val, currDepth) {
    if (!currNode) {
      return null;
    }

    if (currNode.val === val) {
      return {
        parent,
        depth: currDepth
      };
    }

    const leftInfo = findNode(currNode.left, currNode, val, currDepth + 1);
    if (leftInfo) {
      return leftInfo;
    }

    return findNode(currNode.right, currNode, val, currDepth + 1);
  }
};

assert(isCousins(convertArrayToBinaryTree([1,2,3,null,4,null,5]), 5, 4));
assert.equal(isCousins(convertArrayToBinaryTree([1,2,3,4]), 4, 3), false);
assert.equal(isCousins(convertArrayToBinaryTree([1,2,3,null,4]), 2, 3), false);
