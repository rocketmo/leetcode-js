/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  const factorMap = new Map();
  const multipleMap = new Map();
  const varSet = new Set();

  // Map factors
  for (let i = 0; i < equations.length; i += 1) {
    const [ a, b ] = equations[i];
    const val = values[i];


    // Factors - b is a factor of a
    if (!factorMap.has(a)) {
      factorMap.set(a, new Map());
    }

    const factors = factorMap.get(a);
    factors.set(b, val);


    // Multiples - a is a multiple of b
    if (!multipleMap.has(b)) {
      multipleMap.set(b, new Map());
    }

    const multiples = multipleMap.get(b);
    multiples.set(a, val);


    // Add both to the variable set
    varSet.add(a);
    varSet.add(b);
  }

  // Find answers to queries
  const ans = [];
  for (let i = 0;i < queries.length; i += 1) {
    const [ c, d ] = queries[i];
    ans.push(findAns(c, d));
  }

  return ans;


  // Find answer to a / b
  function findAns(a, b) {
    // a and b are the same variable and we've seen it in one of the equations
    if (a === b && varSet.has(a)) {
      return 1;
    }

    // Traverse through factors and multiples to find b, starting from a
    const aFactorMap = new Map();
    aFactorMap.set(a, 1);
    const aStack = [ a ];

    while (aStack.length > 0) {
      const varName = aStack.pop();
      const mult = aFactorMap.get(varName);

      if (factorMap.has(varName)) {
        const factors = factorMap.get(varName);
        for (const varFactor of factors.keys()) {
          const factorVal = mult * factors.get(varFactor);

          if (varFactor === b) {
            return factorVal;
          }

          if (aFactorMap.has(varFactor)) {
            continue;
          }

          aFactorMap.set(varFactor, factorVal);
          aStack.push(varFactor);
        }
      }

      if (multipleMap.has(varName)) {
        const multiples = multipleMap.get(varName);
        for (const varMultiple of multiples.keys()) {
          const multVal = mult / multiples.get(varMultiple);

          if (varMultiple === b) {
            return multVal;
          }

          if (aFactorMap.has(varMultiple)) {
            continue;
          }

          aFactorMap.set(varMultiple, multVal);
          aStack.push(varMultiple);
        }
      }
    }

    return -1;
  }
};
