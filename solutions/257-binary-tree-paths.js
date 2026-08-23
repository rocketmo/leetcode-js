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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const ans = [];
  const currentNodes = [
    {
      node: root,
      path: '',
    }
  ];

  while (currentNodes.length) {
    const { node, path } = currentNodes.pop();

    if (!node.left && !node.right) {
      ans.push(`${path}${node.val}`);
    }

    if (node.right) {
      currentNodes.push({
        node: node.right,
        path: `${path}${node.val}->`,
      });
    }

    if (node.left) {
      currentNodes.push({
        node: node.left,
        path: `${path}${node.val}->`,
      });
    }
  }

  return ans;
};
