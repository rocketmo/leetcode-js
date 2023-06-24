/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  const secCountMap = new Map();
  const guessCountMap = new Map();
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < secret.length; i += 1) {
    const secDigit = secret[i];
    const guessDigit = guess[i];

    if (secDigit === guessDigit) {
      bulls += 1;
      continue;
    }

    // Count the digit from secret
    if (!secCountMap.has(secDigit)) {
      secCountMap.set(secDigit, 1);
    } else {
      secCountMap.set(secDigit, secCountMap.get(secDigit) + 1);
    }

    // Count the digit from guess
    if (!guessCountMap.has(guessDigit)) {
      guessCountMap.set(guessDigit, 1);
    } else {
      guessCountMap.set(guessDigit, guessCountMap.get(guessDigit) + 1);
    }
  }

  // Count total "cows"
  for (let i of secCountMap.keys()) {
    if (!guessCountMap.has(i)) {
      continue;
    }

    cows += Math.min(secCountMap.get(i), guessCountMap.get(i));
  }

  return `${bulls}A${cows}B`;
};
