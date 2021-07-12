/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const leftSet = new Set([ "(", "[", "{" ]);
    const matchMap = new Map([
        [ ")", "(" ],
        [ "]", "[" ],
        [ "}", "{" ],
    ]);

    for (let char of s) {
        if (matchMap.has(char) && stack.pop() !== matchMap.get(char))  {
            return false;
        } else if (leftSet.has(char)) {
            stack.push(char);
        }
    }

    return stack.length === 0;
};
