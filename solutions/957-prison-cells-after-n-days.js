/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, n) {
    let currState = cells.join("");

    const states = [ currState ];
    const stateIndexMap = new Map();

    for (let i = 0; i < n; i += 1) {
        const newState = [];

        for (let j = 0; j < currState.length; j += 1) {
            if (j === 0 || j === currState.length - 1 || currState[j - 1] !== currState[j + 1]) {
                newState.push(0);
            } else {
                newState.push(1);
            }
        }

        const stateStr = newState.join("");

        if (stateIndexMap.has(stateStr)) {
            const currIndex = stateIndexMap.get(stateStr);
            const cycle = states.slice(currIndex);

            const stepsRemaining = n - i - 1;
            const numStepsToTake = stepsRemaining % cycle.length;

            currState = cycle[numStepsToTake];
            break;
        } else {
            currState = stateStr;
            states.push(stateStr);
            stateIndexMap.set(stateStr, i + 1);
        }
    }

    return currState.split("").map(num => {
        return parseInt(num);
    });
};
