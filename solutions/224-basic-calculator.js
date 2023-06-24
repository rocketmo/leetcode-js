/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const stack = [];
  let ans = 0;
  let num = 0;
  let sign = 1;

  for (const char of s) {
    if (char === ' ') {
      continue;
    } else if (!isNaN(char)) {
      num = (10 * num) + parseInt(char);
    } else if (char === '+') {
      ans += (sign * num);
      num = 0;
      sign = 1;
    } else if (char === '-') {
      ans += (sign * num);
      num = 0;
      sign = -1;
    } else if (char === '(') {
      stack.push({ prev: ans, sign });
      ans = 0;
      num = 0;
      sign = 1;
    } else if (char === ')') {
      ans += (sign * num);
      num = 0;
      sign = 1;

      const last = stack.pop();
      ans *= last.sign;
      ans += last.prev;
    }
  }

  if (num) {
    ans += (sign * num);
  }

  return ans;
};
