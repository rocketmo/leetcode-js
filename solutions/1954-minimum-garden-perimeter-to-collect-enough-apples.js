/**
 * @param {number} neededApples
 * @return {number}
 */
var minimumPerimeter = function(neededApples) {
    const memo = [ 5 ];
    let currLen = 1;
    let currApples = 12;

    while (currApples < neededApples) {
        const prevPerimeterApples = memo[currLen - 1];
        currLen += 1;

        const nextPerimeterSide = ((currLen * 2) - 1) + (currLen * 4) + prevPerimeterApples;
        const nextPerimeterApples = (nextPerimeterSide * 4) - (8 * currLen);

        currApples += nextPerimeterApples;
        memo.push(nextPerimeterSide);
    }

    return currLen * 8;
};
