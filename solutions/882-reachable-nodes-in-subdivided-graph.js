const _ = require("lodash");

/**
 * @param {number[][]} edges
 * @param {number} maxMoves
 * @param {number} n
 * @return {number}
 */
var reachableNodes = function(edges, maxMoves, n) {
    // Create the graph
    const edgeMap = new Map();
    for (const [ u, v, cnt ] of edges) {
        if (!edgeMap.has(u)) {
            const subMap = new Map();
            subMap.set(v, cnt);
            edgeMap.set(u, subMap);
        } else {
            edgeMap.get(u).set(v, cnt);
        }

        if (!edgeMap.has(v)) {
            const subMap = new Map();
            subMap.set(u, cnt);
            edgeMap.set(v, subMap);
        } else {
            edgeMap.get(v).set(u, cnt);
        }
    }

    // Dijkstra's algorithm

    // Keep track of reachable nodes and the moves to get there
    const stack = [ { node: 0, moves: 0 } ];

    // dist[i][i] === number of moves to reach the ith node
    // dist[i][j] === number of sub-nodes we can reach by going from i to j, if i !== j
    // If dist[i][i] === -1, ith node is not reachable
    // If dist[i][j] === -1, we cannot reach any sub-nodes going from i to j
    const dist = [];
    for (let i = 0; i < n; i += 1) {
        dist.push(_.fill(Array(n), -1));
    }

    // Start with the 0th node
    dist[0][0] = 0;

    while (stack.length) {
        const { node, moves } = stack.pop();

        // Node has no edges
        if (!edgeMap.has(node)) {
            continue;
        }

        // Go through each edge connected to the current node
        const subMap = edgeMap.get(node);
        for (const other of subMap.keys()) {
            const cnt = subMap.get(other);

            // We can reach all sub-nodes in the current edge
            if (moves + cnt <= maxMoves) {
                dist[node][other] = cnt;

                const movesToOther = moves + cnt + 1;

                // We can reach the other node in the edge; check if the other node has been
                // visited or if we can do it in fewer moves than the last visit
                if (movesToOther <= maxMoves &&
                    (dist[other][other] < 0 || dist[other][other] > movesToOther)) {
                    dist[other][other] = movesToOther;
                    stack.push({ node: other, moves: movesToOther });
                }
            }

            // Otherwise, count the number of sub-nodes we can reach
            else {
                const diff = maxMoves - moves;
                dist[node][other] = Math.max(dist[node][other], diff);
            }
        }
    }

    // Total up the nodes
    let ans = 0;
    for (let i = 0; i < n; i += 1) {
        for (let j = i; j < n; j += 1) {

            // Node in original graph is reachable
            if (i === j && dist[i][j] > -1) {
                ans += 1;
            }

            // Nodes between i and j are reachable
            else if (i !== j && (dist[i][j] > - 1 || dist[j][i] > -1)) {

                // Count the number of reachable nodes between i and j, coming from both sides
                // Do not add duplicate notes if they are reachable from both sides
                const cnt1 = dist[i][j] > - 1 ? dist[i][j] : 0;
                const cnt2 = dist[j][i] > - 1 ? dist[j][i] : 0;
                ans += Math.min(cnt1 + cnt2, edgeMap.get(i).get(j));
            }
        }
    }

    return ans;
};
