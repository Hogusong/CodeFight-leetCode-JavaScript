/*
  Given a sorted linked list, delete all nodes that have duplicate numbers, 
  leaving only distinct numbers from the original list.

  Input: 1->2->3->3->4->4->5,       Output: 1->2->5     remove all 3 & 4
  Input: 1->1->1->2->3,             Output: 2->3        remove all 1
*/

class LinkedNode {
  constructor(v, n = null) {
    this.val = v;
    this.next = n;
  }
}

function deleteDuplicates(head) {
  if (!head || !head.next) return head;
  let curr = head;
  let previous = null;
  let duplicate = false;
  while (curr.next) {
    if (curr.val === curr.next.val) {
      duplicate = true;
    } else {
      if (duplicate) {
        if (!previous) head = curr.next;
        else    previous.next = curr.next
        duplicate = false;
      } else {
        previous = curr;
      }
    }
    curr = curr.next;
  }
  if (duplicate) {
    if (!previous) head = null;
    else previous.next = null
  }
  return head;
}

N1 = new LinkedNode(1, new LinkedNode(2, new LinkedNode(3, new LinkedNode(3, new LinkedNode(4, new LinkedNode(4, new LinkedNode(5)))))));
N2 = new LinkedNode(1, new LinkedNode(1, new LinkedNode(1, new LinkedNode(2, new LinkedNode(3)))));
N3 = new LinkedNode(1, new LinkedNode(1, new LinkedNode(2, new LinkedNode(3, new LinkedNode(4, new LinkedNode(4))))));
nodes = [N1, N2, N3];
for (let node of nodes) console.log(deleteDuplicates(node));