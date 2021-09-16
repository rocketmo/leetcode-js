/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
    const knightMoves = [
        [-2, -1],
        [-2, 1],
        [2, -1],
        [2, 1],
        [1, 2],
        [1, -2],
        [-1, -2],
        [-1, 2]
    ];

    const validKnightMoves = [];
    const dp = [];

    for (let i = 0; i < n; i += 1) {
        dp.push([]);
        validKnightMoves.push([]);
        for (let j = 0; j < n; j += 1) {
            dp[i].push(_.fill(Array(k + 1), -1));

            const validStack = [];
            for (const [ rowOffset, colOffset ] of knightMoves) {
                const nextRow = i + rowOffset;
                const nextCol = j + colOffset;

                if (nextRow >= 0 && nextRow < n && nextCol >= 0 && nextCol < n) {
                    validStack.push([ nextRow, nextCol ]);
                }
            }

            validKnightMoves[i].push(validStack);
        }
    }

    return helper(row, column, k, 1);

    function helper(r, c, move) {
        if (move === 0) {
            return 1;
        }

        if (dp[r][c][move] >= 0) {
            return dp[r][c][move];
        }

        const validMoves = validKnightMoves[r][c];

        let ans = 0;
        for (const [ nextRow, nextCol ] of validMoves) {
            ans += helper(nextRow, nextCol, move - 1) / 8;
        }

        dp[r][c][move] = ans;
        return ans;
    }
};
