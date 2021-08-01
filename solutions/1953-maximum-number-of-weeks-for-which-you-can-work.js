/**
 * @param {number[]} milestones
 * @return {number}
 */
var numberOfWeeks = function(milestones) {
    const max = Math.max(...milestones);
    let sum = milestones.reduce((acc, val) => acc + val, 0);
    sum -= max;

    if (max > sum) {
        return (2 * sum) + 1;
    }

    return sum + max;
};
