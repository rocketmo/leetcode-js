/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {

  return decode(s);

  // Recursive function
  function decode(str) {
    let decodedStr = '';

    for (let i = 0; i < str.length; i += 1) {
      const char = str[i];

      if (!isNaN(char)) {
        const encodingInfo = extractEncoding(str, i);
        const repeatable = decode(encodingInfo.str);
        decodedStr = decodedStr + repeatable.repeat(encodingInfo.num);
        i = encodingInfo.rIndex;
      } else {
        decodedStr = decodedStr + char;
      }
    }

    return decodedStr;
  }

  // Extracts encoding info from the given string, starting at index i. Returns the number
  // outside of the brackets, the string within the brackets and the index of the right bracket.
  // Only extracts encoding of the first encoded string.
  function extractEncoding(str, i) {
    // Get the number
    let num = '';
    while(true) {
      if (isNaN(str[i])) {
        break;
      }

      num += str[i];
      i += 1;
    }

    // Get the string within the brackets
    i += 1;
    const startIndex = i;
    let lCount = 1;
    let rCount = 0;

    while(true) {
      if (str[i] === '[') {
        lCount += 1;
      } else if (str[i] === ']') {
        rCount += 1;
      }

      if (lCount === rCount) {
        break;
      }

      i += 1;
    }

    return {
      num: Number(num),
      str: str.substring(startIndex, i),
      rIndex: i
    };
  }
};
