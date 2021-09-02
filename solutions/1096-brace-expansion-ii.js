/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function(expression) {
    const wordSet = helper(expression, isUnion(expression));
    const wordArr = Array.from(wordSet.values());
    wordArr.sort((a, b) => a.localeCompare(b));
    return wordArr;

    // Returns true if the given expression is a union expression
    function isUnion(expr) {
        let leftBrackets = 0;
        let rightBrackets = 0;

        for (let i = 0; i < expr.length; i += 1) {
            if (expr[i] === "{") {
                leftBrackets += 1;
            } else if (expr[i] === "}") {
                rightBrackets += 1;
            }

            // If there is a comma next to a full expression, it is a union
            if (leftBrackets === rightBrackets && expr[i] === ",") {
                return true;
            }
        }

        // Otherwise it is a contanenation
        return false;
    }

    function stripOuterBrackets(expr) {
        if (expr[0] === "{" && expr[expr.length - 1] === "}") {
            return expr.substr(1, expr.length - 2);
        }

        return expr;
    }

    /**
     *
     * @param {string} expr The expression string
     * @param {boolean} isList True if the given expression is a union
     * @returns {Set<string>} Set with all words generated from the expression
     */
    function helper(expr, isList) {
        // Base expression - just a single character
        if (expr.length === 1) {
            return new Set([ expr ]);
        }

        // Union
        if (isList) {
            let leftBracketCount = 0;
            let rightBracketCount = 0;
            const subExpr = [];
            let subExprStart = 0;

            for (let i = 0; i < expr.length; i += 1) {
                if (expr[i] === "{") {
                    leftBracketCount += 1;
                } else if (expr[i] === "}") {
                    rightBracketCount += 1;
                }

                // Get the sub-expression between the commas
                if (leftBracketCount === rightBracketCount && expr[i] === ",") {
                    const newExpr = expr.substring(subExprStart, i);
                    subExpr.push({
                        expression: newExpr,
                        isList: isUnion(newExpr)
                    });

                    subExprStart = i + 1;
                }
            }

            // Get the final sub-expression after the last comma
            const newExpr = expr.substring(subExprStart, expr.length);
            subExpr.push({
                expression: newExpr,
                isList: isUnion(newExpr)
            });

            // Get sets from all sub-expression and form the union
            const subExprSets = subExpr.map(s => helper(s.expression, s.isList));
            const baseSet = subExprSets[0];

            for (let i = 1; i < subExprSets.length; i += 1) {
                for (const word of subExprSets[i].values()) {
                    baseSet.add(word);
                }
            }

            return baseSet;
        }

        // Concatenation
        let leftBracketCount = 0;
        let rightBracketCount = 0;
        const subExpr = [];
        let subExprStart = 0;

        for (let i = 0; i < expr.length; i += 1) {
            if (expr[i] === "{") {
                leftBracketCount += 1;
            } else if (expr[i] === "}") {
                rightBracketCount += 1;
            }

            if (leftBracketCount === rightBracketCount) {

                // Only strip the outer brackets for concatenation sub-expressions, since the
                // outer brackets (if any) should match (outer brackets in union sub-expressions
                // may not match)
                const newExpr = stripOuterBrackets(expr.substring(subExprStart, i + 1));
                subExpr.push({
                    expression: newExpr,
                    isList: isUnion(newExpr)
                });

                subExprStart = i + 1;
            }
        }

        // Get all sets from sub-expression and concatenate
        const subExprSets = subExpr.map(s => helper(s.expression, s.isList));
        let wordSet = subExprSets[0];

        for (let i = 1; i < subExprSets.length; i += 1) {
            let nextSet = new Set();

            for (const word of wordSet.values()) {
                for (const other of subExprSets[i].values()) {
                    const nextWord = word + other;
                    nextSet.add(nextWord);
                }
            }

            wordSet = nextSet;
        }

        return wordSet;
    }
};
