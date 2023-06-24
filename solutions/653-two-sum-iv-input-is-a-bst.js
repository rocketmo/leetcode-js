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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const numSet = new Set();
  const nodeStack = [ root ];

  while (nodeStack.length) {
    const currNode = nodeStack.pop();
    if (!currNode) { continue; }

    const diff = k - currNode.val;
    if (numSet.has(diff)) {
      return true;
    }

    numSet.add(currNode.val);
    nodeStack.push(currNode.left);
    nodeStack.push(currNode.right);
  }

  return false;
};
