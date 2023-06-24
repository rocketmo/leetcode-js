var MyQueue = function() {
  this.pushStack = [];
  this.popStack = [];
  this.front = null;
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.pushStack.push(x);

  if (this.pushStack.length === 1) {
    this.front = x;
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (!this.popStack.length) {
    while (this.pushStack.length) {
      this.popStack.push(this.pushStack.pop());
    }
  }

  return this.popStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.popStack.length) {
    return this.popStack[this.popStack.length - 1];
  }

  return this.front;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.pushStack.length === 0 && this.popStack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
