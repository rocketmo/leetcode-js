const _ = require('lodash');
const assert = require('assert');

/**
 * Computes the edit distance from word1 to word2 (also known as Levenshtein distance), using
 * dynamic programming.
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const dp = initSubDistances(word1.length, word2.length);

  for (let i = 0; i < word1.length; i += 1) {
    for (let j = 0; j < word2.length; j += 1) {
      // No substitution needed if the characters are the same
      const substitutionCost = word1[i] === word2[j] ? 0 : 1;

      dp[i + 1][j + 1] = Math.min(
        dp[i + 1][j] + 1, // Insertion
        dp[i][j + 1] + 1, // Deletion
        dp[i][j] + substitutionCost // Substitution
      );
    }
  }

  return dp[word1.length][word2.length];
};

/**
 * Initializes dynamic programming matrix used in the solution.
 * @param {number} len1
 * @param {number} len2
 * @returns
 */
function initSubDistances(len1, len2) {
  // dp[i][j] represents the edit distance from the first i characters of word1 to the first j
  // characters of word2.
  const dp = _.fill(Array(len1 + 1), 0)
    .map(() => _.fill(Array(len2 + 1), 0));

  // Source can be transformed into an empty string by deleting all characters
  for (let i = 1; i <= len1; i += 1) {
    dp[i][0] = i;
  }

  // Target can be reached from an empty string by inserting all characters
  for (let i = 1; i <= len2; i += 1) {
    dp[0][i] = i;
  }

  return dp;
}

assert.equal(minDistance('horse', 'ros'), 3);
assert.equal(minDistance('intention', 'execution'), 5);
