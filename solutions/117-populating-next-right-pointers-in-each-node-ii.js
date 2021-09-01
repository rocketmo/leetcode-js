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

        let newNodes = [];
        for (let i = 0; i < nodes.length; i += 1) {
            if (nodes[i].left) {
                newNodes.push(nodes[i].left);
            }

            if (nodes[i].right) {
                newNodes.push(nodes[i].right);
            }
        }

        if (!newNodes.length) {
            break;
        }

        nodes = newNodes;
    }

    return root;
};
