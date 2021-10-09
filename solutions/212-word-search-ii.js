const _ = require("lodash");

class TrieNode {
    constructor(val, isWord) {
        this.val = val;
        this.isWord = isWord || false;
        this.children = new Map();
    }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const m = board.length;
    const n = board[0].length;
    const trieHead = constructTrie();
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const ans = new Set();

    const visited = [];
    _.times(m, () => {
        visited.push(_.fill(Array(n), false));
    });

    for (let i = 0; i < m; i += 1) {
        for (let j = 0; j < n; j += 1) {
            if (trieHead.children.has(board[i][j])) {
                dfs(i, j, trieHead.children.get(board[i][j]));
            }
        }
    }

    return Array.from(ans.values());

    function constructTrie() {
        const head = new TrieNode("", false);

        for (const word of words) {
            let curr = head;
            let wordIdx = 0;
            let substr = "";

            while (wordIdx < word.length) {
                const nextChar = word[wordIdx];
                substr += nextChar;

                if (!curr.children.has(nextChar)) {
                    curr.children.set(nextChar, new TrieNode(substr, false));
                }

                curr = curr.children.get(nextChar);
                wordIdx += 1;
            }

            curr.isWord = true;
        }

        return head;
    }

    function dfs(row, col, trieNode) {
        if (visited[row][col]) {
            return;
        }

        if (trieNode.isWord) {
            ans.add(trieNode.val);
        }

        if (trieNode.children.size === 0) {
            return;
        }

        visited[row][col] = true;
        for (const [rowOffset, colOffset] of directions) {
            const nextRow = row + rowOffset;
            const nextCol = col + colOffset;

            if (nextRow >= 0 && nextRow < m && nextCol >= 0 && nextCol < n &&
                trieNode.children.has(board[nextRow][nextCol])) {
                const nextNode = trieNode.children.get(board[nextRow][nextCol]);
                dfs(nextRow, nextCol, nextNode);
            }
        }

        // Backtrack
        visited[row][col] = false;
    }
};
