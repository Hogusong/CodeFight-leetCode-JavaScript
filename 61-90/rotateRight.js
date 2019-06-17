/*
  Given a linked list, rotate the list to the right by k places, where k is non-negative.

  Input: 1->2->3->4->5->NULL, k = 2       Output: 4->5->1->2->3->NULL
  Explanation:  rotate 1 steps to the right: 5->1->2->3->4->NULL
                rotate 2 steps to the right: 4->5->1->2->3->NULL

  Input: 0->1->2->NULL, k = 4             Output: 2->0->1->NULL
  Explanation:  rotate 1 steps to the right: 2->0->1->NULL
                rotate 2 steps to the right: 1->2->0->NULL
                rotate 3 steps to the right: 0->1->2->NULL
                rotate 4 steps to the right: 2->0->1->NULL
*/
class LinkedList {
  constructor(v, n = null) {
    this.val = v;
    this.next = n;
  }
}

function rotateRight(head, k) {
  if (!head || k < 1) return head;    
  let curr = head;
  let len = 1
  while (curr.next) {
    curr = curr.next;
    len++;
  }
  const tail = curr;

  k = k % len ;
  if (k < 1) return head;

  curr = head;
  for (let i = 1; i < len-k; i++) {
    curr = curr.next;
  }
  tail.next = head;
  head = curr.next;
  curr.next = null;
  return head;
}

node = new LinkedList(1, new LinkedList(2, new LinkedList(3, new LinkedList(4, new LinkedList(5)))));
console.log(rotateRight(node, 8));
node = new LinkedList(1, new LinkedList(2, new LinkedList(3, new LinkedList(4, new LinkedList(5)))));
console.log(rotateRight(node, 2));

function rotateR(head, k) {
  if (!head  || !head.next || k < 1) return head;

  let node = head, prev = null,  count = 1;
  while (node.next) {
    count ++;
    node = node.next
  }
  const tail = node;

  if (k % count < 1) return head;

  k = count - k % count;
  count = 0;
  node = head;
  while (count < k) {
    count ++;
    prev = node;
    node = node.next
  }
  tail.next = head;
  prev.next = null;
  return node;
}

node = new LinkedList(1, new LinkedList(2, new LinkedList(3, new LinkedList(4, new LinkedList(5)))));
console.log(rotateR(node, 8));
node = new LinkedList(1, new LinkedList(2, new LinkedList(3, new LinkedList(4, new LinkedList(5)))));
console.log(rotateR(node, 2));
