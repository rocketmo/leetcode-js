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
var deepestLeavesSum = function(root) {
  let deepestLevel = 0;
  let deepestLeaves = [];
  findDeepestLeaves(root, 1);

  return deepestLeaves.reduce((acc, val) => acc + val, 0);


  function findDeepestLeaves(node, level) {
    if (!node) {
      return;
    }

    if (level > deepestLevel) {
      deepestLevel = level;
      deepestLeaves = [ node.val ];
    } else if (level === deepestLevel) {
      deepestLeaves.push(node.val);
    }

    findDeepestLeaves(node.left, level + 1);
    findDeepestLeaves(node.right, level + 1);
  }
};
