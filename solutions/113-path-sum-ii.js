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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  return dfs(root, 0, []);

  function dfs(currNode, currSum, currPath) {

    if (!currNode) {
      return [];
    } else if (currSum + currNode.val === targetSum && !currNode.left && !currNode.right) {
      return [ [ ...currPath, currNode.val ] ];
    }

    const paths = [];

    if (currNode.left) {
      paths.push(...dfs(currNode.left, currSum + currNode.val,
        [ ...currPath, currNode.val] ));
    }

    if (currNode.right) {
      paths.push(...dfs(currNode.right, currSum + currNode.val,
        [ ...currPath, currNode.val] ));
    }

    return paths;
  }
};
