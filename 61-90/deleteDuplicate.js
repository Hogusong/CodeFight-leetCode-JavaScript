/*
  Given a sorted linked list, delete all duplicates such that each element appear only once.

  Input: 1->1->2,             Output: 1->2
  Input: 1->1->2->3->3        Output: 1->2->3
*/

class LinkedNode {
  constructor(v, n = null) {
    this.val = v;
    this.next = n;
  }
}

function deleteDuplicate(head) {
  if (!head || !head.next) return head;
  let curr = head;
  while (curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else curr = curr.next;
  }
  return head;
}

N1 = new LinkedNode(1, new LinkedNode(2, new LinkedNode(3, new LinkedNode(3, new LinkedNode(4, new LinkedNode(4, new LinkedNode(5)))))));
N2 = new LinkedNode(1, new LinkedNode(1, new LinkedNode(1, new LinkedNode(2, new LinkedNode(3)))));
N3 = new LinkedNode(1, new LinkedNode(1, new LinkedNode(2, new LinkedNode(3, new LinkedNode(4, new LinkedNode(4))))));
nodes = [N1, N2, N3];
for (let node of nodes) console.log(deleteDuplicate(node));