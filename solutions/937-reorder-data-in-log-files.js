/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  const letId = null;
  const digitId = null;
  const originalOrder = new Map();

  for (let i = 0; i < logs.length; i += 1) {
    originalOrder.set(logs[i], i);
  }

  logs.sort((a, b) => {
    const [aId, aWords] = extractWords(a);
    const [bId, bWords] = extractWords(b);

    const aIsDigit = identify(aWords);
    const bIsDigit = identify(bWords);

    if (!aIsDigit && bIsDigit) {
      return -1;
    } else if (aIsDigit && !bIsDigit) {
      return 1;
    } else if (!aIsDigit && !bIsDigit) {
      if (aWords < bWords) {
        return -1;
      } else if (aWords > bWords) {
        return 1;
      } else {
        return aId < bId ? -1 : 1;
      }
    }

    return originalOrder.get(a) - originalOrder.get(b);
  });

  return logs;

  function identify(words) {
    const split = words.split(' ');
    return !isNaN(split[0]);
  }

  function extractWords(log) {
    const firstSpace = log.indexOf(' ');
    return [ log.substr(0, firstSpace), log.substr(firstSpace + 1) ];
  }
};
