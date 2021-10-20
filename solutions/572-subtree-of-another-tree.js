const assert = require("assert");
const { convertArrayToBinaryTree } = require("../other/util");

function areTreesEqual(root1, root2) {
    if ((!root1 && !root2)) {
        return true;
    }

    if (!root1 || !root2) {
        return false;
    }

    if (root1.val !== root2.val) {
        return false;
    }

    return areTreesEqual(root1.left, root2.left) && areTreesEqual(root1.right, root2.right);
}

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (!root && !subRoot) {
        return true;
    }

    if (!root || !subRoot) {
        return false;
    }

    if (areTreesEqual(root, subRoot)) {
        return true;
    }

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

assert.equal(isSubtree(
    convertArrayToBinaryTree([3,4,5,1,2]),
    convertArrayToBinaryTree([4,1,2])
), true);

assert.equal(isSubtree(
    convertArrayToBinaryTree([3,4,5,1,2,null,null,null,null,0]),
    convertArrayToBinaryTree([4,1,2])
), false);
