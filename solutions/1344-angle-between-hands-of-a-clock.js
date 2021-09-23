const assert = require("assert");

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    const minAngle = minutes * 6;
    const hourAngle = ((hour % 12) + (minutes / 60)) * 30;

    const diff = Math.abs(hourAngle - minAngle);

    if (diff > 180) {
        return 360 - diff;
    }

    return diff;
};

assert.equal(angleClock(12, 30), 165);
assert.equal(angleClock(3, 30), 75);
assert.equal(angleClock(3, 15), 7.5);
assert.equal(angleClock(4, 50), 155);
assert.equal(angleClock(12, 0), 0);
