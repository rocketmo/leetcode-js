/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;

    for (let i = 0; i < accounts.length; i += 1) {
        let currWealth = 0;

        for (let j = 0; j < accounts[i].length; j += 1) {
            currWealth += accounts[i][j];
        }

        maxWealth = Math.max(maxWealth, currWealth);
    }

    return maxWealth;
};
