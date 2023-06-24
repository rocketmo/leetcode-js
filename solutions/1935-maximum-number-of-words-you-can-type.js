/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
  const words = text.split(' ');
  const letters = brokenLetters.split('');
  let numTyped = 0;

  for (const word of words) {
    let hasLetter = false;
    for (const letter of letters) {
      if (word.indexOf(letter) > -1) {
        hasLetter = true;
        break;
      }
    }

    numTyped += (hasLetter) ? 0 : 1;
  }

  return numTyped;
};
