/**
 * Definition for a binary tree node, with size of the tree at the node.
 */
function TreeSizeNode(val, left, right, size) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
  this.size = (size===undefined ? 1 : size);
}

/**
 * @param {number[]} parents
 * @return {number}
 */
var countHighestScoreNodes = function(parents) {
  const root = constructTree();
  appendSizes(root);

  let maxAns = 0;
  let numWithMax = 0;
  dfs(root, 0);
  return numWithMax;

  // Computes our answer
  function dfs(node, parentSize) {
    if (!node) {
      return;
    }

    let score = parentSize;
    let leftSize = node.left ? node.left.size : 0;
    let rightSize = node.right ? node.right.size : 0;

    if (leftSize) {
      score = score > 0 ? leftSize * score : leftSize;
    }

    if (rightSize) {
      score = score > 0 ? rightSize * score : rightSize;
    }

    if (score > maxAns) {
      maxAns = score;
      numWithMax = 1;
    } else if (score === maxAns) {
      numWithMax += 1;
    }

    dfs(node.left, parentSize === 0 ? node.size - leftSize : parentSize + 1 + rightSize);
    dfs(node.right, parentSize === 0 ? node.size - rightSize : parentSize + 1 + leftSize);
  }

  // Updates the size of the given node
  function appendSizes(node) {
    if (!node) {
      return 0;
    }

    const currSize = 1 + appendSizes(node.left) + appendSizes(node.right);
    node.size = currSize;

    return currSize;
  }

  // Constructs a binary tree from the given parents array
  function constructTree() {
    const nodeChildrenMap = new Map();
    for (let i = 0; i < parents.length; i += 1) {
      const parent = parents[i];
      if (parent >= 0) {
        const childList = nodeChildrenMap.get(parent) ?? [];
        childList.push(i);

        nodeChildrenMap.set(parent, childList);
      }
    }

    const root = new TreeSizeNode(0, undefined, undefined, 1);
    const nodeMap = new Map();
    nodeMap.set(0, root);

    const toAdd = [ 0 ];

    while (toAdd.length) {
      const next = toAdd.pop();
      const node = nodeMap.get(next);

      if (nodeChildrenMap.has(next)) {
        const childList = nodeChildrenMap.get(next);

        if (childList[0]) {
          node.left = new TreeSizeNode(childList[0], undefined, undefined, 1);
          toAdd.push(childList[0]);
          nodeMap.set(childList[0], node.left);
        }

        if (childList[1]) {
          node.right = new TreeSizeNode(childList[1], undefined, undefined, 1);
          toAdd.push(childList[1]);
          nodeMap.set(childList[1], node.right);
        }
      }
    }

    return root;
  }
};
