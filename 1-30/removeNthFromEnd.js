/*
  Given a linked list, remove the n-th node from the end of list and return its head.

  Given linked list: 1->2->3->4->5, and n = 2.
  After removing the second node from the end, the linked list becomes 1->2->3->5.

  Note:  Given n will always be valid.
*/

class ListNode {
  constructor(value, next = null) {
    this.val = value;
    this.next = next;
  }
}

var removeNthFromEnd = function(head, n) {
  if (head.next === null && n === 1) return null;
  let count = 0;
  let curr = head;
  while (curr != null) {
      count++;
      curr = curr.next;
  }
  if (n === count) return head.next;
  curr = head;
  for (let i=0; i<count-n-1; i++) {
      curr = curr.next;
  } 
  curr.next = curr.next.next;
  return head;
};

const node = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(removeNthFromEnd(node, 4));   // remove value = 2,   1->3->4->5

var removeNthFromEnd = function(head, n) {
  const dict = {};
  let i = 0;
  let curr = head;
  while (curr) {
    dict[i++] = curr;
    curr = curr.next;
  }
  if (n === i) return head.next;
  const key = i - n;
  dict[key-1].next = dict[key-1].next.next;
  return head;
};

var removeNthFromEnd = function(head, n) {
  const data = [];
  let curr = head;
  while (curr) {
    const keep = curr;
    curr = curr.next;
    keep.next = null;
    data.push(keep);
  }
  const key = data.length - n;
  const root = new ListNode(0);
  curr = root;
  for (let i = 0; i < data.length; i++) {
    if (i == key) continue;
    curr.next = data[i];
    curr = curr.next;
  }
  return root.next;
};