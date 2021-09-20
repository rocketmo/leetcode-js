const _ = require("lodash");

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(n, edges) {
    // ans[i] represents the sum of distances at node i
    const ans = _.fill(Array(n), 0);

    // count[i] represents the number of nodes in the subtree with the root at node i
    const count = _.fill(Array(n), 1);

    // Construct the graph
    const graph = [];
    for (let i = 0; i < n; i += 1) {
        graph.push(new Set());
    }

    for (const [from, to] of edges) {
        graph[from].add(to);
        graph[to].add(from);
    }

    // Assume 0 is the root node
    dfs(0, -1);
    dfs2(0, -1);
    return ans;

    // Calculates the answer for the root node
    function dfs(nodeVal, parentVal) {
        for (const childVal of graph[nodeVal]) {
            if (childVal !== parentVal) {
                dfs(childVal, nodeVal);
                count[nodeVal] += count[childVal];
                ans[nodeVal] += ans[childVal] + count[childVal];
            }
        }
    }

    // Calculates the answer for the remaining nodes
    function dfs2(nodeVal, parentVal) {
        for (const childVal of graph[nodeVal]) {
            if (childVal !== parentVal) {
                ans[childVal] = ans[nodeVal] + n - (count[childVal] * 2);
                dfs2(childVal, nodeVal);
            }
        }
    }
};
