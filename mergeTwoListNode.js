/*
  Merge two sorted linked lists and return it as a new list. 
  The new list should be made by splicing together the nodes of the first two lists.

  Input: 1->2->4, 1->3->4       Output: 1->1->2->3->4->4
*/

class LinkedNode {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

function mergeTowList(L1, L2) {
  if (!L1) return L2;
  if (!L2) return L1;

  let root;
  if (L1.value > L2.value) {
    root = L2;
    L2 = L2.next;
  } else {
    root = L1;
    L1 = L1.next;
  }
  let curr = root;

  while (L1 && L2) {
    if (L1.value > L2.value) {
      curr.next = L2;
      L2 = L2.next;
    } else {
      curr.next = L1;
      L1 = L1.next;
    }
    curr = curr.next;
  }
  curr.next = !L1 ? L2 : L1;
  return root;
}

const L1 = new LinkedNode(1, new LinkedNode(2, new LinkedNode(4)));
const L2 = new LinkedNode(1, new LinkedNode(3, new LinkedNode(4)));
const node = mergeTowList(L1, L2);
console.log(printNode(node));

function printNode(node) {
  const ans = [];
  while (node) {
    ans.push(node.value);
    node = node.next;
  }
  return ans.join(' -> ');
}