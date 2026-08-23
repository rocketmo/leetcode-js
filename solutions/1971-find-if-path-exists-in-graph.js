const assert = require('assert');

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
  if (source === destination) return true;

  const graph = Array.from({ length: n }, () => []);

  for (const [node, neighbor] of edges) {
    graph[node].push(neighbor);
    graph[neighbor].push(node);
  }

  const visited = new Set([source]);
  const queue = [source];

  for (let index = 0; index < queue.length; index += 1) {
    const node = queue[index];

    for (const neighbor of graph[node]) {
      if (neighbor === destination) return true;

      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return false;

};

assert.equal(validPath(3, [[0, 1], [1, 2], [2, 0]], 0, 2), true);
assert.equal(validPath(6, [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], 0, 5), false);
assert.equal(validPath(1, [], 0, 0), true);
assert.equal(validPath(5, [[0, 1], [1, 2], [2, 3], [3, 4]], 0, 4), true);
assert.equal(validPath(4, [[0, 1]], 2, 3), false);
