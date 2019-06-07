/*
  Given a linked list and a value x, partition it such that 
  all nodes less than x come before nodes greater than or equal to x.
  You should preserve the original relative order of the nodes in each of the two partitions.

  Input: head = 1->4->3->2->5->2, x = 3       Output: 1->2->2->4->3->5
*/

class LinkedNode {
  constructor(v, n = null) {
    this.val = v;
    this.next = n;
  }
}

function partition(head, x) {
  if (!head || !head.next) return head;
  const root = new LinkedNode(0);
  let curr = head, previous = null, last = null, first = null;
  while (curr) {
    if (curr.val >= x) {
      if (!first) first = curr;
      last = curr;
      curr = curr.next;
    } else {
      if (!previous) {
        root.next = curr;
        previous = curr;
      } else {
        previous.next  = curr;
        previous = curr;
      }
      if (!first) {
        curr = curr.next;
      } else {
        last.next = curr.next;
        previous.next = first;
        curr = last.next
      }
    }
  }
  return root.next;
}

function printNode(node) {
  let str = ''
  while (node) {
    str += node.val + (node.next ? ' -> ' : '');
    node = node.next;
  }
  console.log(str);
}

N = new LinkedNode(1, new LinkedNode(4, new LinkedNode(3, new LinkedNode(2, new LinkedNode(5, new LinkedNode(1))))));
node = partition(N, 3);
printNode(node);
N = new LinkedNode(4, new LinkedNode(5, new LinkedNode(7, new LinkedNode(2, new LinkedNode(1, new LinkedNode(3))))));
node = partition(N, 3);
printNode(node);
