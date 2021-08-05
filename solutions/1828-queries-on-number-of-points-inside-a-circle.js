/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    return queries.map(query => {
        const [ x, y, radius ] = query;
        let count = 0;

        for (const [ px, py ] of points) {
            if (((x - px) ** 2) + ((y - py) ** 2) <= radius ** 2) {
                count += 1;
            }
        }

        return count;
    });
};
