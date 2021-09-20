/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // Reverse the two given lists
    let rev1 = new ListNode(l1.val);
    let rev2 = new ListNode(l2.val);
    let curr1 = l1.next, curr2 = l2.next;

    while (curr1 || curr2) {
        if (curr1) {
            let temp1 = new ListNode(curr1.val, rev1);
            rev1 = temp1;
            curr1 = curr1.next;
        }

        if (curr2) {
            let temp2 = new ListNode(curr2.val, rev2);
            rev2 = temp2;
            curr2 = curr2.next;
        }
    }

    // Sum the reversed lists
    let carry = 0;
    let ansNode = null;

    while (rev1 || rev2 || carry > 0) {
        let sum = carry;
        sum += rev1 ? rev1.val : 0;
        sum += rev2 ? rev2.val : 0;

        carry = Math.floor(sum / 10);
        sum = sum % 10;

        const tempNode = new ListNode(sum, ansNode);
        ansNode = tempNode;

        if (rev1) {
            rev1 = rev1.next;
        }

        if (rev2) {
            rev2 = rev2.next;
        }
    }

    return ansNode;
};
