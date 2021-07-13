/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} num_wanted
 * @param {number} use_limit
 * @return {number}
 */
var largestValsFromLabels = function(values, labels, num_wanted, use_limit) {
    const combined = values.map((val, index) => {
        return { val, label: labels[index] };
    });

    combined.sort((a, b) => b.val - a.val);

    let maxSum = 0;
    let setSize = 0;
    const seenMap = new Map();

    for (let i = 0; i < combined.length; i += 1) {
        const { val, label } = combined[i];
        if (!seenMap.has(label)) {
            seenMap.set(label, 0);
        }

        if (seenMap.get(label) >= use_limit) { continue; }

        maxSum += val;
        setSize += 1;
        seenMap.set(label, seenMap.get(label) + 1);

        if (setSize >= num_wanted) {
            break;
        }
    }

    return maxSum;
};
