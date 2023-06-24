/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
  const charCountMaps = [];
  for (let i = 0; i < words.length; i += 1) {
    const m = new Map();

    for (let j = 0; j < words[i].length; j += 1) {
      const char = words[i][j];
      if (!m.has(char)) {
        m.set(char, 0);
      }

      m.set(char, m.get(char) + 1);
    }

    charCountMaps.push(m);
  }

  const chars = [];
  for (const char of charCountMaps[0].keys()) {
    let minCount = charCountMaps[0].get(char);

    for (let j = 1; j < charCountMaps.length; j += 1) {
      minCount = Math.min(minCount, (charCountMaps[j].get(char) ?? 0));
      if (minCount === 0) {
        break;
      }
    }

    for (let k = 0; k < minCount; k += 1) {
      chars.push(char);
    }
  }

  return chars;
};
