/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
  const vals = preorder.split(',');
  const stack = [{ val: vals[0], hasLeft: false }];
  let i = 1;

  if (stack[0].val === '#') {
    stack.pop();
  }

  while (i < vals.length && stack.length > 0) {
    const top = getTopOfStack();

    if (top.hasLeft) {
      stack.pop();
    } else {
      top.hasLeft = true;
    }

    if (vals[i] !== '#') {
      stack.push({ val: vals[i], hasLeft: false });
    }

    i += 1;
  }

  return (i === vals.length && stack.length === 0);


  function getTopOfStack() {
    return stack[stack.length - 1];
  }
};
