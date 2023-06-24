const assert = require("assert");

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count = n;

    return function() {
        return count++;
    };
};

const counter = createCounter(10);
assert.equal(counter(), 10);
assert.equal(counter(), 11);
assert.equal(counter(), 12);
console.log("all passed!");
