const assert = require("assert");

/**
 * @param {string} s
 * @param {number[]} answers
 * @return {number}
 */
var scoreOfStudents = function(s, answers) {
    const correctAns = eval(s);
    const dp = new Map();
    const opMap = {
        "+": (a, b) => a + b,
        "*": (a, b) => a * b
    };

    const ansSet = dfs(s);
    let score = 0;

    for (const answer of answers) {
        if (answer === correctAns) {
            score += 5;
        } else if (ansSet.has(answer)) {
            score += 2;
        }
    }

    return score;

    function dfs(expr) {
        const ansSet = new Set();

        if (dp.has(expr)) {
            return dp.get(expr);
        } else if (expr.length === 0) {
            return ansSet;
        } else if (expr.length === 1) {
            ansSet.add(parseInt(expr));
            return ansSet;
        }

        for (let i = 0; i < expr.length - 2; i += 2) {
            const left = dfs(expr.slice(0, i + 1));
            const right = dfs(expr.slice(i + 2));
            const op = expr[i + 1];

            for (const leftVal of left.values()) {
                for (const rightVal of right.values()) {
                    const result = opMap[op](leftVal, rightVal);
                    if (result <= 1000) {
                        ansSet.add(result);
                    }
                }
            }
        }

        dp.set(expr, ansSet);
        return ansSet;
    }
};

assert.equal(scoreOfStudents("7+3*1*2", [20,13,42]), 7);
assert.equal(scoreOfStudents("3+5*2", [13,0,10,13,13,16,16]), 19);
assert.equal(scoreOfStudents("6+0*1", [12,9,6,4,8,6]), 10);
