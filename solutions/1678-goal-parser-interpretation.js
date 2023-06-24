/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
  let ans = '';

  for (let i = 0; i < command.length; i += 1) {
    if (command[i] === 'G') {
      ans += 'G';
    } else if (command[i + 1] === ')') {
      ans += 'o';
      i += 1;
    } else {
      ans += 'al';
      i += 3;
    }
  }

  return ans;
};
