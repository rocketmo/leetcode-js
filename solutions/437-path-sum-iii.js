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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
  let ans = 0;
  dfs(root, []);
  return ans;

  function dfs(node, path) {
    if (!node) {
      return;
    }

    let currSum = 0;
    path.push(node.val);

    for (let i = path.length - 1; i >= 0; i -= 1) {
      currSum += path[i];

      if (currSum === targetSum) {
        ans += 1;
      }
    }

    dfs(node.left, path);
    dfs(node.right, path);

    // Backtrack
    path.pop();
  }
};

assert.equal(pathSum(convertArrayToBinaryTree([10,5,-3,3,2,null,11,3,-2,null,1]), 8), 3);
assert.equal(pathSum(convertArrayToBinaryTree([5,4,8,11,null,13,4,7,2,null,null,5,1]), 22), 3);
