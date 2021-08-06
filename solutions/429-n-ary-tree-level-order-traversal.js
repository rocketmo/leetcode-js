/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const ans = [];
    const q = new Queue();
    q.enqueue({
        node: root,
        level: 0
    });

    while (q.size() > 0) {
        const curr = q.dequeue();

        if (!curr.node) {
            continue;
        }

        if (!ans[curr.level]) {
            ans[curr.level] = [];
        }

        ans[curr.level].push(curr.node.val);

        for (const child of curr.node.children) {
            q.enqueue({
                node: child,
                level: curr.level + 1
            });
        }
    }

    return ans;
};
