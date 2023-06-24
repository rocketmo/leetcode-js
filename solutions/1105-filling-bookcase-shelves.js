/**
 * @param {number[][]} books
 * @param {number} shelf_width
 * @return {number}
 */
var minHeightShelves = function(books, shelf_width) {
  const dp = [];
  dp[0] = books[0][1];

  for (let i = 1; i < books.length; i += 1) {
    const [ bookWidth, bookHeight ] = books[i];
    let minHeight = bookHeight + dp[i - 1];
    let maxShelfHeight = bookHeight;
    let currShelfWidth = bookWidth;

    for (let j = i - 1; j >= 0; j -= 1) {
      const [ prevBookWidth, prevBookHeight ] = books[j];
      if (currShelfWidth + prevBookWidth > shelf_width) {
        break;
      }

      maxShelfHeight = Math.max(maxShelfHeight, prevBookHeight);
      minHeight = Math.min(minHeight, maxShelfHeight + (dp[j - 1] ?? 0));
      currShelfWidth += prevBookWidth;
    }

    dp[i] = minHeight;
  }

  return dp[dp.length - 1];
};
