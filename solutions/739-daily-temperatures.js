const assert = require("assert");
const _ = require("lodash");

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const ans = _.fill(Array(temperatures.length), 0);
    const stack = [];

    for (let i = 0; i < temperatures.length; i += 1) {
        while (stack.length > 0) {
            const lastIdx = stack[stack.length - 1];
            if (temperatures[i] > temperatures[lastIdx]) {
                stack.pop();
                ans[lastIdx] = i - lastIdx;
            } else {
                break;
            }
        }

        stack.push(i);
    }

    return ans;
};

assert.deepEqual(dailyTemperatures([73,74,75,71,69,72,76,73]), [1,1,4,2,1,1,0,0]);
assert.deepEqual(dailyTemperatures([30,40,50,60]), [1,1,1,0]);
assert.deepEqual(dailyTemperatures([30,60,90]), [1,1,0]);
