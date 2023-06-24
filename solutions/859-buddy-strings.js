/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {

  // Two strings cannot be buddies if they have different lengths
  if (s.length !== goal.length) {
    return false;
  }

  // Count the number of indices where there are different characters in s and goal. Also
  // count the number of each character in s, and record if there is a character that appears
  // twice.
  const diff = [];
  const countMap = new Map();
  let hasDupeChar = false;

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] !== goal[i]) {
      diff.push(i);

      // If there are more than 2 different pairs of characters, s and goal cannot be buddies
      if (diff.length > 2) {
        return false;
      }
    }

    if (!countMap.has(s[i])) {
      countMap.set(s[i], 0);
    }

    countMap.set(s[i], countMap.get(s[i]) + 1);
    hasDupeChar = hasDupeChar || countMap.get(s[i]) > 1;
  }

  // s and goal can be buddies if they are the same string and there is a duplicate character
  if (diff.length === 0 && hasDupeChar) {
    return true;
  }

  // If there are not exactly 2 different pairs of characters, s and goal cannot be buddies
  if (diff.length !== 2) {
    return false;
  }

  // Check if we can swap the differing pairs of characters
  let s1 = s[diff[0]],
    s2 = s[diff[1]],
    g1 = goal[diff[0]],
    g2 = goal[diff[1]];

  return s1 === g2 && s2 === g1;
};
