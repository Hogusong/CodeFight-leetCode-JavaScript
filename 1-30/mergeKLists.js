/*
  Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

  Input:  [ 1->4->5,    1->3->4,    2->6 ]
  Output: 1->1->2->3->4->4->5->6
*/

class LinkedNode {
  constructor(v, n=null) {
    this.val = v;
    this.next = n
  }
}

function mergeNodeList(lists) {
  if (lists.length === 0) return null;
  return mergeLists(lists);
};

function mergeLists(lists) {
  if (lists.length === 1) return lists[0];
  const median = Math.floor(lists.length/2);
  const left = mergeLists(lists.slice(0,median));
  const right = mergeLists(lists.slice(median));
  return mergeTwoNodes(left, right);
}

function mergeTwoNodes(N1, N2) {
  if (!N1) return N2;
  if (!N2) return N1;
  let root, curr;
  if (N1.val > N2.val) {
    root = N2;
    N2 = N2.next;
  } else {
    root = N1;
    N1 = N1.next;
  }
  curr = root;

  while (N1 && N2) {
    if (N1.val > N2.val) {
      curr.next = N2;
      N2 = N2.next;
    } else {
      curr.next = N1;
      N1 = N1.next
    }
    curr = curr.next;
  }

  curr.next = (N1 != null) ? N1 : N2;
  return root;   
}

const node1 = new LinkedNode(1, new LinkedNode(4, new LinkedNode(5)));
const node2 = new LinkedNode(1, new LinkedNode(3, new LinkedNode(4)));
const node3 = new LinkedNode(2, new LinkedNode(6));
const lists = [node1, node2, node3];
// console.log(mergeNodeList(lists));

function mergeNodeListDC(lists) {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];

  const temp = [];
  let index = 0;
  while (index < lists.length-1) {
    const node = mergeTwoNodes(lists[index++], lists[index++]);
    temp.push(node);
  }
  if (index < lists.length) temp.push(lists[index]);
  return mergeNodeListDC([...temp]);
}

console.log(mergeNodeListDC(lists));
