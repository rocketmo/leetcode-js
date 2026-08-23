const assert = require('assert');

// Definition for a _Node.
function _Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
  if (node === null) {
    return null;
  }

  const clones = new Map([[node, new _Node(node.val)]]);
  const queue = [node];

  for (let index = 0; index < queue.length; index += 1) {
    const current = queue[index];
    const currentClone = clones.get(current);

    for (const neighbor of current.neighbors) {
      if (!clones.has(neighbor)) {
        clones.set(neighbor, new _Node(neighbor.val));
        queue.push(neighbor);
      }

      currentClone.neighbors.push(clones.get(neighbor));
    }
  }

  return clones.get(node);
};

assert.equal(cloneGraph(null), null);

const singleNode = new _Node(1);
const singleNodeClone = cloneGraph(singleNode);
assert.notStrictEqual(singleNodeClone, singleNode);
assert.equal(singleNodeClone.val, 1);
assert.deepEqual(singleNodeClone.neighbors, []);

const graph = [1, 2, 3, 4].map((value) => new _Node(value));
graph[0].neighbors = [graph[1], graph[3]];
graph[1].neighbors = [graph[0], graph[2]];
graph[2].neighbors = [graph[1], graph[3]];
graph[3].neighbors = [graph[0], graph[2]];

const graphClone = cloneGraph(graph[0]);
assert.notStrictEqual(graphClone, graph[0]);
assert.deepEqual(graphClone.neighbors.map((neighbor) => neighbor.val), [2, 4]);
assert.notStrictEqual(graphClone.neighbors[0], graph[1]);
assert.notStrictEqual(graphClone.neighbors[1], graph[3]);
assert.strictEqual(graphClone.neighbors[0].neighbors[0], graphClone);
assert.strictEqual(graphClone.neighbors[1].neighbors[0], graphClone);
