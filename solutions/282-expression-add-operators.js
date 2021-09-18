/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    const ans = [];
    const ops = [ "+", "-", "*" ]
    dfs(num, "", []);

    return ans;

    function dfs(num, expr, vals) {
        if (!num) {
            if (eval(vals) === target) {
                ans.push(expr);
            }

            return;
        }

        for (let i = 1; i <= num.length; i += 1) {
            const nextNum = parseInt(num.substr(0, i));

            if (!vals.length) {
                dfs(num.slice(i), `${nextNum}`, [ ...vals, nextNum ]);
            } else {
                for (const op of ops) {
                    const nextVals = [ ...vals ];

                    if (op === "-") {
                        nextVals.push(-nextNum);
                    } else if (op === "*") {
                        nextVals[nextVals.length - 1] *= nextNum;
                    } else {
                        nextVals.push(nextNum);
                    }

                    dfs(num.slice(i), `${expr}${op}${nextNum}`, nextVals);
                }
            }

            // Should not use numbers with leading 0s in expression, except 0
            if (i === 1 && num[0] === "0") {
                break;
            }
        }
    }

    function eval(vals) {
        return vals.reduce((acc, val) => {
            return acc + val;
        }, 0);
    }
};
