/**
 * Doubly Linked List Node, helper class to LRUCache
 */
class DoublyLinkedNode {
    /**
     * @param {number} key
     * @param {number} val
     */
    constructor(key, val) {
        this.key = key;
        this.value = val;
        this.prev = null;
        this.next = null;
    }
}


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
class LRUCache {

    /**
     * Uses a doubly linked list to track recently used keys
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.head = new DoublyLinkedNode();
        this.tail = new DoublyLinkedNode();

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const node = this.cache.get(key);
        if (node) {
            this._moveToHead(node);
            return node.value;
        }

        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let node = this.cache.get(key);
        if (!node) {
            node = new DoublyLinkedNode(key, value);
            this.cache.set(key, node);
            this._addNode(node);

            if (this.cache.size > this.capacity) {
                const tail = this._popTail();
                this.cache.delete(tail.key);
            }
        } else {
            node.value = value;
            this._moveToHead(node);
        }
    }

    /**
     * Removes a node currently in the list and appends it to the head
     * @param {DoublyLinkedNode} node
     * @return {void}
     */
    _moveToHead(node) {
        this._removeNode(node);
        this._addNode(node);
    }

    /**
     * Removes the node at the end of the list and returns it
     * @return {DoublyLinkedNode}
     */
    _popTail() {
        const node = this.tail.prev;
        this._removeNode(node);
        return node;
    }

    /**
     * Appends a node after the head
     * @param {DoublyLinkedNode} node
     * @return {void}
     */
    _addNode(node) {
        node.prev = this.head;
        node.next = this.head.next;

        this.head.next.prev = node;
        this.head.next = node;
    }

    /**
     * Removes the given node from the list, re-connecting its neighbouring nodes
     * @param {DoublyLinkedNode} node
     * @return {void}
     */
    _removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
}
