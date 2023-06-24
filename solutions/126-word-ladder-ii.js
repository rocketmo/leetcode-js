const { Queue } = require('@datastructures-js/queue');

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  // Maps words to any adjacent words
  const adjacentWordMap = new Map();

  // Find adjacent words to beginWord (only if beginWord is not in wordList)
  if (!wordList.some(word => word === beginWord)) {
    for (const word of wordList) {
      if (!isAdjacent(beginWord, word)) {
        continue;
      }

      if (!adjacentWordMap.has(beginWord)) {
        adjacentWordMap.set(beginWord, []);
      }

      const adjacentWords = adjacentWordMap.get(beginWord);
      adjacentWords.push(word);
    }
  }

  // Find adjacent words for each word in wordList
  for (let i = 0; i < wordList.length - 1; i += 1) {
    for (let j = i + 1; j < wordList.length; j += 1) {
      const word1 = wordList[i];
      const word2 = wordList[j];

      if (!isAdjacent(word1, word2)) {
        continue;
      }

      if (!adjacentWordMap.has(word1)) {
        adjacentWordMap.set(word1, []);
      }

      if (!adjacentWordMap.has(word2)) {
        adjacentWordMap.set(word2, []);
      }

      const adjacentWords1 = adjacentWordMap.get(word1);
      const adjacentWords2 = adjacentWordMap.get(word2);
      adjacentWords1.push(word2);
      adjacentWords2.push(word1);
    }
  }

  // Breadth first search to find shortest sequence
  const q = new Queue();
  const foundWordMap = new Map(); // Maps word to length of shortest sequence to get to it
  const shortestSequences = [];   // Stores all answers
  let shortestSeqLen = null;      // Length of the shortest sequence

  q.enqueue([ beginWord ]);

  while (q.size() > 0) {
    const currSeq = q.dequeue();
    const lastWord = currSeq[currSeq.length - 1];

    // Sequence is too long, break
    if (shortestSeqLen !== null && currSeq.length >= shortestSeqLen) {
      break;
    }

    // Create new sequences with adjacent words
    if (adjacentWordMap.has(lastWord)) {
      const adjacentWords = adjacentWordMap.get(lastWord);
      for (const word of adjacentWords) {

        // Found a sequence to endWord
        if (word === endWord) {
          if (shortestSeqLen === null) {
            shortestSeqLen = currSeq.length + 1;
          }

          shortestSequences.push([ ...currSeq, word]);
          continue;
        }

        // Already found a sequence to the current word that is shorter, or the new will
        // be too long
        if ((foundWordMap.has(word) && foundWordMap.get(word) < currSeq.length + 1) ||
                   (shortestSeqLen !== null && currSeq.length + 1 >= shortestSeqLen)) {
          continue;
        }

        q.enqueue([ ...currSeq, word ]);
        foundWordMap.set(word, currSeq.length + 1);
      }
    }
  }


  return shortestSequences;

  // Returns true if the two given words differ by exactly 1 character (assumes both words are
  // the same length)
  function isAdjacent(word1, word2) {
    let numDiff = 0;
    for (let i = 0; i < word1.length; i += 1) {
      numDiff += (word1[i] !== word2[i]) ? 1 : 0;
    }

    return numDiff === 1;
  }
};
