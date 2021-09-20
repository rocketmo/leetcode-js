/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.valMap = new Map();
    this.valArr = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified
 * element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.valMap.has(val)) {
        return false;
    }

    this.valArr.push(val);
    this.valMap.set(val, this.valArr.length - 1);

    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.valMap.has(val)) {
        return false;
    }

    if (this.valMap.get(val) === this.valArr.length - 1) {
        this.valMap.delete(val);
        this.valArr.pop();
    } else {
        const lastVal = this.valArr[this.valArr.length - 1];
        const delIdx = this.valMap.get(val);
        this.valMap.set(lastVal, delIdx);
        this.valArr[delIdx] = lastVal;

        this.valMap.delete(val);
        this.valArr.pop();
    }

    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const idx = Math.floor(Math.random() * this.valArr.length);
    return this.valArr[idx];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
