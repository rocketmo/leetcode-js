const { TreeNode } = require('../other/definitions');

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
  if (!root1 && !root2) {
    return null;
  }

  const newRoot = new TreeNode((root1?.val ?? 0) + (root2?.val ?? 0));
  const toProcess = [
    {
      node1: root1?.left,
      node2: root2?.left,
      parent: newRoot,
      isLeft: true
    },
    {
      node1: root1?.right,
      node2: root2?.right,
      parent: newRoot,
      isLeft: false
    }
  ];

  while (toProcess.length > 0) {
    const { node1, node2, parent, isLeft } = toProcess.pop();

    if (!node1 && !node2) {
      continue;
    }

    if (!node2) {
      const child = addChild(node1.val, parent, isLeft);
      toProcess.push({ node1: node1.left, node2: null, parent: child, isLeft: true });
      toProcess.push({ node1: node1.right, node2: null, parent: child, isLeft: false });
      continue;
    }

    if (!node1) {
      const child = addChild(node2.val, parent, isLeft);
      toProcess.push({ node1: null, node2: node2.left, parent: child, isLeft: true });
      toProcess.push({ node1: null, node2: node2.right, parent: child, isLeft: false });
      continue;
    }

    const child = addChild(node2.val + node1.val, parent, isLeft);
    toProcess.push({ node1: node1.left, node2: node2.left, parent: child, isLeft: true });
    toProcess.push({ node1: node1.right, node2: node2.right, parent: child, isLeft: false });
  }


  return newRoot;


  function addChild(val, parent, isLeft) {
    if (isLeft) {
      parent.left = new TreeNode(val);
      return parent.left;
    }

    parent.right = new TreeNode(val);
    return parent.right;
  }
};
