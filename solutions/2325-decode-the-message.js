const assert = require('assert');

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
function decodeMessage(key, message) {
  const map = new Map();
  const alphabet = getAlphabet();
  let currentIndex = 0;

  for (const char of key) {
    if (!map.has(char) && char !== ' ') {
      map.set(char, alphabet[currentIndex]);
      currentIndex += 1;
    }
  }

  let encodedStr = '';
  for (const char of message) {
    if (map.has(char)) {
      encodedStr += map.get(char);
    } else {
      encodedStr += char;
    }
  }

  return encodedStr;
}

function getAlphabet() {
  const initialCharCode = 'a'.charCodeAt(0);
  const alphabet = [];

  for (let i = 0; i < 26; i += 1) {
    alphabet.push(String.fromCharCode(initialCharCode + i));
  }

  return alphabet;
}

const testKey1 = 'the quick brown fox jumps over the lazy dog';
const testMsg1 = 'vkbs bs t suepuv';
assert.equal(decodeMessage(testKey1, testMsg1), 'this is a secret');
