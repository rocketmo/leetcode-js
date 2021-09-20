/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxProduct = function(root) {
    const sumTree = getSumTree(root);
    const stack = [ sumTree.left, sumTree.right ];
    let minDiff = Number.MAX_SAFE_INTEGER;
    let max = 0;

    while (stack.length) {
        const currNode = stack.pop();
        if (!currNode) { continue; }

        const op = sumTree.val - currNode.val;
        const diff = Math.abs(op - currNode.val); // Difference between the product operands

        if (diff < minDiff) {
            minDiff = diff;
            max = (op * currNode.val) % (1e9 + 7);

            if (minDiff === 0) { // Stop if the difference is 0; product cannot get any greater
                break;
            } else {
                stack.push(currNode.left, currNode.right);
            }
        } else if (currNode.val > op) { // Keep going if we are still approaching the min difference
            stack.push(currNode.left, currNode.right);
        }
    }

    return max;


    // Creates a new tree given the root node of a separate tree. Each node value in the new tree
    // is the sum of the node value and the values from the node's children at the same position
    // in the original tree.
    function getSumTree(rootNode) {
        if (!rootNode) {
            return null;
        }

        const left = getSumTree(rootNode.left);
        const right = getSumTree(rootNode.right);
        const sum = rootNode.val + (left?.val ?? 0) + (right?.val ?? 0);

        return new TreeNode(sum, left, right);
    }
};
