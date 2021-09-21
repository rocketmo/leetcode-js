const { ListNode } = require("./definitions");

/**
 * Converts an array into a singly-linked list.
 * @param {any[] | null} arr
 * @returns {ListNode | null} Head of the list
 */
function convertArrayToList(arr) {
    if (!arr || !arr.length) {
        return null;
    }

    let head = new ListNode(arr[0]);
    let currNode = head;

    for (let i = 1; i < arr.length; i += 1) {
        currNode.next = new ListNode(arr[i]);
        currNode = currNode.next;
    }

    return head;
}

exports.convertArrayToList = convertArrayToList;
