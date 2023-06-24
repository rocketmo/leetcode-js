const _ = require('lodash');

/**
 * @param {number[]} nextVisit
 * @return {number}
 */
var firstDayBeenInAllRooms = function(nextVisit) {
  const n = nextVisit.length;
  const mod = 1e9 + 7;
  const roomVisits = _.fill(Array(n), 0);

  for (let i = 0; i < n - 1; i += 1) {
    const jumpVisits = (2 + roomVisits[i] - roomVisits[nextVisit[i]] + mod) % mod;
    roomVisits[i + 1] = (roomVisits[i] + jumpVisits) % mod;
  }

  return roomVisits[n - 1];
};
