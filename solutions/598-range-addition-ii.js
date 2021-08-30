/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    const [ minX, minY ] = ops.reduce((acc, val) => {
        return [ Math.min(acc[0], val[0]), Math.min(acc[1], val[1]) ];
    }, [ m, n ]);

    return (minX * minY);
};
