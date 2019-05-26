/*
  You are given two non-empty linked lists representing two non-negative integers. 
  The digits are stored in reverse order and each of their nodes contain a single digit. 
  Add the two numbers and return it as a linked list.

  You may assume the two numbers do not contain any leading zero, except the number 0 itself.

  Example:

  Input: (2 -> 4 -> 1) + (5 -> 6 -> 4)
  Output: 7 -> 0 -> 6
  Explanation: 142 + 465 = 607.
*/

class ListNode {
  constructor(value, next = null) {
    this.val = value;
    this.next = next;
  }
}

function addTwoNodes(l1, l2) {
  let up = 0
  const root = new ListNode(0);
  let curr = root;
  while (l1 || l2) {
    const value = up + (l1 ? l1.val : 0 ) + (l2 ? l2.val : 0);
    up = value > 9 ? 1 : 0;
    const newValue = value % 10;
    curr.next = new ListNode(newValue);
    curr = curr.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (up > 0) {
    curr.next = new ListNode(up);
  }
  return root.next;
}

const n1 = new ListNode(2, new ListNode(4, new ListNode(1)));
const n2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNodes(n1, n2));
