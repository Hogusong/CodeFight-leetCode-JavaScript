/*
  A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.
  Return a deep copy of the list.

  Input:  {"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}

  Explanation:
  Node 1's value is 1, both of its next and random pointer points to Node 2.
  Node 2's value is 2, its next pointer points to null and its random pointer points to itself.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = this.random = null;
  }
}

function copyRandomList(head) {
  if (!head) return null;
  let p = head;
  while (p) {
    const temp = new Node(p.val);
    temp.next = p.next;
    p.next = temp;
    p = temp.next;
  }

  p = head;
  while (p) {
    if (p.random) p.next.random = p.random.next;
    p = p.next.next;
  }
  p = head;
  let newHead = head.next;
  while (p) {
    const temp = p.next;
    p.next = temp.next;
    if (temp.next) temp.next = temp.next.next;
    p = p.next;
  }
  return newHead;
}