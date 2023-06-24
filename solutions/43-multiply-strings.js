const assert = require('assert');

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  const results = [];
  let base = '';

  for (let i = num2.length - 1; i >= 0; i -= 1) {
    results.push(multiplySingleDigit(num1, num2[i], base));
    base += '0';
  }

  return sum(results);

  function multiplySingleDigit(num, digit, base) {
    let carry = 0;

    for (let i = num.length - 1; i >= 0; i -= 1) {
      const product = multiplyDigits(parseInt(num[i]), parseInt(digit), carry);
      if (product < 10) {
        base += product.toString();
        carry = 0;
      } else {
        base += (product % 10).toString();
        carry = Math.floor(product / 10);
      }
    }

    if (carry > 0) {
      base += carry.toString();
    }

    return base;
  }

  function multiplyDigits(d1, d2, carry) {
    return (d1 * d2) + carry;
  }

  function sum(reversedNums) {
    let carry = 0;
    let idx = 0;
    let ans = '';

    while (reversedNums.length > 0 || carry > 0) {
      let currSum = carry;
      const remainingNums = [];

      for (const num of reversedNums) {
        if (idx >= num.length) {
          continue;
        }

        remainingNums.push(num);
        currSum += parseInt(num[idx]);
      }

      if (currSum < 10) {
        ans += currSum.toString();
        carry = 0;
      } else {
        ans += (currSum % 10).toString();
        carry = Math.floor(currSum / 10);
      }

      reversedNums = remainingNums;
      idx += 1;
    }

    return trimTrailingZeroes(ans).split('').reverse().join('');
  }

  function trimTrailingZeroes(num) {
    let zeroCount = 0;

    for (let i = num.length - 1; i > 0; i -= 1) {
      if (num[i] !== '0') {
        break;
      }

      zeroCount += 1;
    }

    if (zeroCount > 0) {
      return num.slice(0, -zeroCount);
    }

    return num;
  }
};

assert.equal(multiply('2', '3'), '6');
assert.equal(multiply('123', '456'), '56088');
assert.equal(multiply('10001', '0'), '0');
assert.equal(multiply('9', '9'), '81');
