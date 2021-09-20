/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const nums = [];
    const comboSet = new Set();

    // Start off with combinations of length 1
    // Since each of our k-length combinations will be in ascending order,
    // our 1-length combinations cannot be greater than (n - k + 1).
    for (let i = 1; i <= n - k + 1; i += 1) {
        nums.push(i);
    }

    let combinations = nums.map(num => [ num ]);

    // Create combinations of increasing length, using combinations
    // of the previous length
    for (let i = 1; i < k; i += 1) {
        const tempCombos = [];

        for (const combo of combinations) {
            // For each new combination, we can only add integers that are greater
            // than the last element of the previous combination
            // (to maintain ascending order)
            const last = combo[combo.length - 1];

            // Added integers must be at most `maxAddition`; otherwise future
            // combinations will not have enough valid integers to add to them
            const maxAddition = n - k + combo.length + 1;

            for (let j = last + 1; j <= maxAddition; j += 1) {
                tempCombos.push([...combo, j]);
            }
        }

        combinations = tempCombos;
    }

    return combinations;
};
