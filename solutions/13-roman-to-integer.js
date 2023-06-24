/**
 * First solution.
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const dict = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  };

  let num = 0;
  for (let i = 0; i < s.length; i += 1) {
    const next2 = s.substr(i, 2);

    if (dict[next2]) {
      num += dict[next2];
      i += 1;
    } else {
      num += dict[s[i]];
    }
  }

  return num;
};

/**
 * Slightly optimized solution
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let num = 0;
  for (let i = 0; i < s.length - 1; i += 1) {
    if (dict[s[i]] < dict[s[i + 1]]) {
      num -= dict[s[i]];
    } else {
      num += dict[s[i]];
    }

  }

  return num + dict[s[s.length - 1]];
};
