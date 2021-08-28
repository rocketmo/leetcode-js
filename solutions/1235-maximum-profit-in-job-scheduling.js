/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    const jobs = [];
    let lastEndTime = 0;

    for (let i = 0; i < startTime.length; i += 1) {
        jobs.push({
            start: startTime[i],
            end: endTime[i],
            profit: profit[i]
        });

        lastEndTime = Math.max(lastEndTime, endTime[i]);
    }

    jobs.sort((a, b) => {
        if (a.start === b.start) {
            return a.end - b.end;
        }

        return a.start - b.start;
    });


    let currJob = jobs.length - 1;
    let ans = _.fill(Array(lastEndTime + 1), 0);

    for (let i = lastEndTime - 1; i >= 0; i -= 1) {
        ans[i] = ans[i + 1];

        while (currJob >= 0 && jobs[currJob].start >= i) {
            ans[i] = Math.max(ans[i], jobs[currJob].profit + ans[jobs[currJob].end]);
            currJob -= 1;
        }
    }

    return ans[0];
};
