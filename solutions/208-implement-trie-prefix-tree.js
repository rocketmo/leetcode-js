class TrieNode {
  constructor(val, isWord) {
    this.val = val;
    this.isWord = isWord || false;
    this.children = new Map();
  }
}

var Trie = function() {
  this.head = new TrieNode('', false);
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let curr = this.head;
  let wordIdx = 0;
  let substr = '';

  while (wordIdx < word.length) {
    const nextChar = word[wordIdx];
    substr += nextChar;

    if (!curr.children.has(nextChar)) {
      curr.children.set(nextChar, new TrieNode(substr, false));
    }

    curr = curr.children.get(nextChar);
    wordIdx += 1;
  }

  curr.isWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let wordIdx = 0;
  let curr = this.head;

  while (wordIdx < word.length) {
    const nextChar = word[wordIdx];

    if (!curr.children.has(nextChar)) {
      return false;
    }

    curr = curr.children.get(nextChar);
    wordIdx += 1;
  }

  return curr.isWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let wordIdx = 0;
  let curr = this.head;

  while (wordIdx < prefix.length) {
    const nextChar = prefix[wordIdx];

    if (!curr.children.has(nextChar)) {
      return false;
    }

    curr = curr.children.get(nextChar);
    wordIdx += 1;
  }

  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
