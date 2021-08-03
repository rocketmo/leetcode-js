/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {

    nums.sort((a, b) => a - b)
    const sets = [];

    // Create sets of each possible size
    for (let len = 0; len <= nums.length; len += 1) {
        sets.push(...select(len, [], [...nums]));
    }

    return sets;

    // Returns power set of the given length, given the initially chosen numbers
    // and an array of available numbers
    function select(len, chosen, availableNums) {
        if (len === chosen.length) {
            return [ chosen ];
        }

        const sets = [];
        let prev = null;

        for (let i = availableNums.length - 1; i >= 0; i -= 1) {

            // Exit loop if it is impossible to create a set of the given size
            if (len > chosen.length + availableNums.length) {
                break;
            }

            // Only include the current number if different from the previous number
            if (availableNums[i] !== prev) {
                prev = availableNums[i];
                const curr = [ ...chosen, availableNums[i] ];
                const nextSet = [...availableNums];
                nextSet.pop();

                sets.push(...select(len, curr, nextSet));
            }

            // Do no include the current number in future sets of the same size
            availableNums.pop();
        }

        return sets;
    }
};
