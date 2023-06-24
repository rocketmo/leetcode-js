const assert = require('assert');
const { TreeNode } = require('../other/definitions');
const { convertBinaryTreeToArray } = require('../other/util');

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  let head = null;
  const stack = [];

  for (const val of preorder) {
    const node = new TreeNode(val);
    if (!head) {
      head = node;
    } else if (val < peakLast().val) {
      peakLast().left = node;
    } else {
      let parentNode = stack.pop();
      while (stack.length && peakLast().val < val) {
        parentNode = stack.pop();
      }

      parentNode.right = node;
    }

    stack.push(node);
  }

  return head;

  function peakLast() {
    return stack[stack.length - 1];
  }
};

const test1 = bstFromPreorder([8,5,1,7,10,12]);
assert.deepEqual(convertBinaryTreeToArray(test1), [8,5,10,1,7,null,12]);

const test2 = bstFromPreorder([1,3]);
assert.deepEqual(convertBinaryTreeToArray(test2), [1,null,3]);
