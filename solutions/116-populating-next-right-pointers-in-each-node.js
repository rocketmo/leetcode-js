/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) {
        return null;
    }

    let nodes = [ root ];

    while (true) {
        for (let i = 0; i < nodes.length - 1; i += 1) {
            nodes[i].next = nodes[i + 1];
        }

        if (!nodes[0].left) {
            break;
        }

        let newNodes = [];
        for (let i = 0; i < nodes.length; i += 1) {
            newNodes.push(nodes[i].left, nodes[i].right);
        }

        nodes = newNodes;
    }

    return root;
};
