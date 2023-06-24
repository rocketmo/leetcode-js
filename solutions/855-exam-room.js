// Doubly Linked List Node - helper class for ExamRoom
class DoublyLinkedNode {
  constructor(seat) {
    this.seat = seat;
    this.prev = null;
    this.next = null;
  }
}


/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(n)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */
class ExamRoom {
  constructor(n) {
    this.seated = 0;
    this.capacity = n;
    this.seatMap = new Map();

    this.head = new DoublyLinkedNode(-1);
    this.tail = new DoublyLinkedNode(n);
    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.left = this.head;  // Seat node to the left of the next seat
    this.right = this.tail; // Seat node to the right of the next seat
    this.nextSeat = 0;      // Number of the next seat
    this.maxDist = n;       // Distance from the next seat to the nearest seat
  }

  seat() {
    if (this.seated >= this.capacity) {
      return -1;
    }

    const seat = this.nextSeat;
    const node = new DoublyLinkedNode(seat);
    node.prev = this.left;
    node.next = this.right;

    this.left.next = node;
    this.right.prev = node;
    this.seated += 1;

    this.seatMap.set(this.nextSeat, node);
    this._findNextSeat();

    return seat;
  }

  /**
     * @param {number} p
     * @return {void}
     */
  leave(p) {
    const node = this.seatMap.get(p);
    this.seatMap.delete(p);
    this.seated -= 1;

    const left = node.prev;
    const right = node.next;

    left.next = right;
    right.prev = left;

    // Update next seat if necessary
    this._updateNextSeat(left, right);
  }

  /**
     * Updates the next seat if placing the next seat within the given bounds will produce a
     * greater seat distance than the current next seat.
     * @param {DoublyLinkedNode} left
     * @param {DoublyLinkedNode} right
     * @return {void}
     */
  _updateNextSeat(left, right) {
    if (left === this.head) {
      if (right.seat >= this.maxDist) {
        this.nextSeat = 0;
        this.maxDist = right.seat;
        this.left = left;
        this.right = right;
      }
    } else if (right == this.tail) {
      if (right.seat - left.seat - 1 > this.maxDist) {
        this.nextSeat = right.seat - 1;
        this.maxDist = right.seat - left.seat - 1;
        this.left = left;
        this.right = right;
      }
    } else {
      const tempSeat = Math.floor((left.seat + right.seat) / 2);
      if (tempSeat - left.seat > this.maxDist ||
                (tempSeat - left.seat === this.maxDist && tempSeat < this.nextSeat)) {
        this.nextSeat = tempSeat;
        this.maxDist = tempSeat - left.seat;
        this.left = left;
        this.right = right;
      }
    }
  }

  /**
     * @return {void}
     */
  _findNextSeat() {
    // All seats have been filled
    if (this.seated >= this.capacity) {
      this.left = this.head;
      this.right = this.head.next;
      this.nextSeat = 0;
      this.maxDist = 0;

      return;
    }

    let node = this.head;
    this.maxDist = 0;
    this.nextSeat = this.capacity - 1;

    while (node !== this.tail) {
      this._updateNextSeat(node, node.next);
      node = node.next;
    }
  }
}
