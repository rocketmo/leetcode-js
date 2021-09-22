const assert = require("assert");
const { convertArrayToList } = require("../other/util");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const arr = [];
    let curr = head;

    while (curr) {
        arr.push(curr.val);
        curr = curr.next;
    }

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false;
        }

        left += 1;
        right -= 1;
    }

    return true;
};

assert(isPalindrome(convertArrayToList([1,2,2,1])));
assert.equal(isPalindrome(convertArrayToList([1,2])), false);
