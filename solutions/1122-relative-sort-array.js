/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const indexMap = new Map();
    for (let i = 0; i < arr2.length; i += 1) {
        indexMap.set(arr2[i], i);
    }

    arr1.sort((a, b) => {
        if (indexMap.has(a) && !indexMap.has(b)) {
            return -1;
        } else if (indexMap.has(b) && !indexMap.has(a)) {
            return 1;
        } else if (indexMap.has(a) && indexMap.has(b)) {
            return indexMap.get(a) - indexMap.get(b);
        } else {
            return a - b;
        }
    });

    return arr1;
};
