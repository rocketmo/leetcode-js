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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  let ans = 0;
  const stack = [ root ];

  while (stack.length) {
    const node = stack.pop();

    if (!node) {
      continue;
    }

    if (node.val >= low && node.val <= high) {
      ans += node.val;
      stack.push(node.left);
      stack.push(node.right);
    } else if (node.val > high) {
      stack.push(node.left);
    } else if (node.val < low) {
      stack.push(node.right);
    }
  }

  return ans;
};
