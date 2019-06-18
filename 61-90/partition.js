/*
  Given a linked list and a value x, partition it such that 
  all nodes less than x come front nodes greater than or equal to x.
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
  return (root.next) ? root.next : head ;
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

function makePartition(head, x) {
  const root = new LinkedNode(0);
  const back_head = new LinkedNode(0);
  let front = root, back = back_head;
  while (head) {
    if (head.val < x) {
      front.next = head;
      front = front.next;
    } else {
      back.next = head;
      back = back.next;
    }
    head = head.next;
  }
  back.next = null;
  front.next = back_head.next;
  return root.next;
}

N = new LinkedNode(1, new LinkedNode(4, new LinkedNode(3, new LinkedNode(2, new LinkedNode(5, new LinkedNode(1))))));
node = makePartition(N, 3);
printNode(node);
N = new LinkedNode(4, new LinkedNode(5, new LinkedNode(7, new LinkedNode(2, new LinkedNode(1, new LinkedNode(3))))));
node = makePartition(N, 3);
printNode(node);

//  Navigating
function partitions(head, x) {
  if (!head || !head.next) return head;

  let leftHead = null, rightHead = null, left = null, right = null;
  while (head) {
    if (head.val < x) {
      if (!leftHead) leftHead = head;
      else left.next = head;
      left = head;
    } else {
      if (!rightHead) rightHead = head;
      else right.next = head;
      right = head      
    }
    head = head.next
  }
  if (right) right.next = null
  if (left) left.next = rightHead;
  return leftHead ? leftHead : rightHead;
}
