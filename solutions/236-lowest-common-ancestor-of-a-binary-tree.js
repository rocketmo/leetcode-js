/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const nodePathMap = new Map();
    nodePathMap.set("", root);

    const nodeSearchStack = [ "" ];
    let pPath = null;
    let qPath = null;

    // Search for p and q nodes
    while (nodeSearchStack.length > 0 && (!pPath || !qPath)) {
        const lastPath = nodeSearchStack.pop();
        let lastNode = nodePathMap.get(lastPath);

        if (!lastNode) {
            continue;
        }

        if (lastNode.val === p.val) {
            pPath = lastPath;
        } else if (lastNode.val === q.val) {
            qPath = lastPath;
        }

        nodeSearchStack.push(lastPath + "l");
        nodeSearchStack.push(lastPath + "r");

        nodePathMap.set(lastPath + "l", lastNode.left);
        nodePathMap.set(lastPath + "r", lastNode.right);
    }

    let lcaPath = "";
    for (let i = 0; i < pPath.length; i += 1) {
        const pDir = pPath[i];
        const qDir = qPath[i];

        if (pDir === qDir) {
            lcaPath += pDir;
        } else {
            break;
        }
    }

    return nodePathMap.get(lcaPath);
};
