const assert = require('assert');

/**
 * @param {string} s
 * @param {string[]} strs
 * @return {boolean[]}
 */
var transformStr = function(s, strs) {
  let ans = [];

  const { countZeroes, countOnes } = countChars(s);

  for (const str of strs) {
    const strCount = countChars(str);

    if (strCount.countZeroes > countZeroes || strCount.countOnes > countOnes) {
      ans.push(false);
      continue;
    }

    const base = s.split('');
    const target = str.split('');

    let extraZeroes = countZeroes - strCount.countZeroes;
    let extraOnes = countOnes - strCount.countOnes;

    for (let i = 0; i < target.length; i += 1) {
      if (target[i] === '?') {
        if (extraZeroes > 0) {
          target[i] = '0';
          extraZeroes -= 1;
        } else if (extraOnes > 0) {
          target[i] = '1';
          extraOnes -= 1;
        }
      }
    }


    let fallbackZeroes = 0;
    let currentAns = true;

    for (let i = 0; i < base.length; i += 1) {
      if (base[i] === target[i]) {
        continue;
      }

      if (base[i] === '0' && target[i] === '1') {
        fallbackZeroes -= 1;

        if (fallbackZeroes < 0) {
          currentAns = false;
          break;
        }

        continue;
      }

      if (base[i] === '1' && target[i] === '0') {
        fallbackZeroes += 1;
        continue;
      }
    }

    ans.push(currentAns);
  }

  return ans;
};

function countChars(str) {
  let countZeroes = 0;
  let countOnes = 0;

  for (const char of str) {
    if (char === '0') {
      countZeroes += 1;
    } else if (char === '1') {
      countOnes += 1;
    }
  }

  return { countZeroes, countOnes };
}

assert.deepEqual(transformStr('101', ['1?1', '0?1', '0?0']), [true, true, false]);
assert.deepEqual(transformStr('1100', ['0011', '11?1', '1?1?']), [true, false, true]);
assert.deepEqual(transformStr('1010', ['0011']), [true]);
assert.deepEqual(transformStr('01', ['1?']), [false]);
