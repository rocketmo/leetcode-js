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
var sumEvenGrandparent = function(root) {
  let ans = 0;
  const stack = [ { node: root, isParentEven: false, isGrandParentEven: false } ];

  while (stack.length) {
    const { node, isParentEven, isGrandParentEven } = stack.pop();
    if (!node) { continue; }

    if (isGrandParentEven) {
      ans += node.val;
    }

    const isEven = node.val % 2 === 0;
    stack.push(
      { node: node.left, isParentEven: isEven, isGrandParentEven: isParentEven },
      { node: node.right, isParentEven: isEven, isGrandParentEven: isParentEven }
    );
  }

  return ans;
};
