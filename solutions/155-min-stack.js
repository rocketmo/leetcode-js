/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  if (!this.stack.length) {
    this.stack.push({ val, min: val });
  } else {
    const min = Math.min(this.stack[this.stack.length - 1].min, val);
    this.stack.push({ val, min });
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.stack[this.stack.length - 1].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
