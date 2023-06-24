// Definition for a Node.
function Node(val, prev, next, child) {
  this.val = val;
  this.prev = prev;
  this.next = next;
  this.child = child;
}

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  if (!head) {
    return head;
  }

  const [ flatHead ] = helper(head);
  return flatHead;

  function helper(node) {
    let curr = node;
    let prev = null;

    while (curr) {
      if (curr.child) {
        const [ childHead, childEnd ] = helper(curr.child);
        const tmp = curr.next;
        curr.next = childHead;
        curr.child = null;
        childHead.prev = curr;

        if (tmp) {
          childEnd.next = tmp;
          tmp.prev = childEnd;
        }

        prev = childEnd;
        curr = tmp;
      } else {
        prev = curr;
        curr = curr.next;
      }
    }

    return [ node, prev ];
  }
};
