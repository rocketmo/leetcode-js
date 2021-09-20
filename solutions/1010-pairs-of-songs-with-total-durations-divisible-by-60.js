/**
 * 1st solution: Use nested loop to check all possible combinations
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let ans = 0;
    for (let i = 0; i < time.length - 1; i += 1) {
        for (let j = i + 1; j < time.length; j += 1) {
            if ((time[i] + time[j]) % 60 === 0) {
                ans += 1;
            }
        }
    }

    return ans;
};

/**
 * 2nd solution: Use a map
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    const diffMap = new Map();
    let ans = 0;

    for (let i = 0; i < time.length; i += 1) {
        const diff = time[i] % 60;
        const diffRequired = diff === 0 ? diff : 60 - diff;
        ans += diffMap.has(diffRequired) ? diffMap.get(diffRequired) : 0;

        if (!diffMap.has(diff)) {
            diffMap.set(diff, 0);
        }

        diffMap.set(diff, diffMap.get(diff) + 1);
    }

    return ans;
};
