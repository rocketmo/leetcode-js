/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const ans = [ 1 ];

  while (ans.length < n) {
    let total = 0;
    let next = ans.length + 1;

    for (let i = 0; i < next; i += 1) {
      let leftNodes = i;
      let rightNodes = next - i - 1;

      let leftMult = leftNodes === 0 ? 1 : ans[leftNodes - 1];
      let rightMult = rightNodes === 0 ? 1 : ans[rightNodes - 1];

      total += (leftMult * rightMult);
    }

    ans.push(total);
  }

  return ans[n - 1];
};
