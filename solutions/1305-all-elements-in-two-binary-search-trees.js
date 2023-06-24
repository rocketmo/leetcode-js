/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
  const nums1 = getNums(root1);
  const nums2 = getNums(root2);

  const combined = [];
  let i1 = 0, i2 = 0;

  while (i1 < nums1.length || i2 < nums2.length) {
    if (i1 >= nums1.length) {
      combined.push(nums2[i2]);
      i2 += 1;
    } else if (i2 >= nums2.length) {
      combined.push(nums1[i1]);
      i1 += 1;
    } else if (nums1[i1] < nums2[i2]) {
      combined.push(nums1[i1]);
      i1 += 1;
    } else {
      combined.push(nums2[i2]);
      i2 += 1;
    }
  }

  return combined;


  function getNums(root) {
    if (!root) {
      return [];
    }

    const left = getNums(root.left);
    const right = getNums(root.right);

    return [ ...left, root.val, ...right];
  }
};
