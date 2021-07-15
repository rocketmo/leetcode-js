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
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
    let trimmedRoot = root;

    while (true) {
        if (!trimmedRoot) {
            break;
        }

        if (trimmedRoot.val < low) {
            trimmedRoot = trimmedRoot.right;
        } else if (trimmedRoot.val > high) {
            trimmedRoot = trimmedRoot.left;
        } else {
            break;
        }
    }

    let nodeStack = [ trimmedRoot ];

    while (nodeStack.length) {
        const node = nodeStack.pop();

        if (!node) {
            continue;
        }

        if (node.left !== null) {
            while (node.left && node.left.val < low) {
                node.left = node.left.right;
            }

            nodeStack.push(node.left);
        }

        if (node.right !== null) {
            while (node.right && node.right.val > high) {
                node.right = node.right.left;
            }

            nodeStack.push(node.right);
        }
    }

    return trimmedRoot;
};
