class TrieNode {
    constructor(val, str) {
        this.val = val;
        this.str = str;
        this.children = new Map();
    }
}

/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.valMap = new Map();
    this.trie = new TrieNode();
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    this.valMap.set(key, val);

    let node = this.trie;
    for (let i = 0; i < key.length; i += 1) {
        const char = key[i];

        if (node.children.has(char)) {
            node = node.children.get(char);
        } else {
            let next = new TrieNode(char, key.substr(0, i + 1));
            node.children.set(char, next);
            node = next;
        }
    }
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let sum = 0;
    let node = this.trie;

    for (const char of prefix) {
        if (!node.children.has(char)) {
            return 0;
        }

        node = node.children.get(char);
    }

    let stack = [ node ];
    while (stack.length) {
        const curr = stack.pop();
        if (this.valMap.has(curr.str)) {
            sum += this.valMap.get(curr.str);
        }

        for (const next of curr.children.values()) {
            stack.push(next);
        }
    }


    return sum;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
