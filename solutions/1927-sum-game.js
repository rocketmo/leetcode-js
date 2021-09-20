/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function(num) {
    const indices = getQuestionIndices(num);
    const sums = getHalfSums(num);

    const aliceLeftMoves = Math.ceil(indices.left / 2),
        bobLeftMoves = Math.floor(indices.left / 2),
        aliceRightMoves = aliceLeftMoves > bobLeftMoves ?
            Math.floor(indices.right / 2) : Math.ceil(indices.right / 2),
        bobRightMoves = aliceLeftMoves > bobLeftMoves ?
            Math.ceil(indices.right / 2) : Math.floor(indices.right / 2),
        aliceTotalMoves = aliceLeftMoves + aliceRightMoves,
        bobTotalMoves = bobLeftMoves + bobRightMoves;

    const aliceLeft = sums.left + (aliceLeftMoves * 9),
        bobLeft = sums.left + (bobLeftMoves * 9),
        aliceRight = sums.right + (aliceRightMoves * 9),
        bobRight = sums.right + (bobRightMoves * 9);

    // Alice wins if she has more moves, or if she can always make one side too
    // small/large for Bob to match
    return (aliceTotalMoves > bobTotalMoves) || (aliceLeft !== bobRight && bobLeft !== aliceRight);

    function isOnLeft(index, numStr) {
        return (index < numStr.length / 2);
    }

    function getQuestionIndices(numStr) {
        let left = 0, right = 0;

        for (let i = 0; i < numStr.length; i += 1) {
            if (numStr[i] === "?") {
                if (isOnLeft(i, numStr)) {
                    left += 1;
                } else {
                    right += 1;
                }
            }
        }

        return { left, right };
    }

    function getHalfSums(numStr) {
        const halfLen = numStr.length / 2;
        const left = numStr.substr(0, halfLen);
        const right = numStr.substr(halfLen);

        return { left: getSum(left), right: getSum(right) };
    }

    function getSum(numStr) {
        return numStr.split("").reduce((acc, digit) => acc + (Number(digit) || 0), 0);
    }
};
