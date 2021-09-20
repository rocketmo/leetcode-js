/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const [ n1, n2 ] = edges[0];
    const [ n3, n4 ] = edges[1];

    if (n3 === n1 || n3 === n2) {
        return n3;
    }

    return n4;
};
