class ListNode {
  constructor(value, next = null) {
    this.val = value;
    this.next = next;
  }
}

var addTwoNumbers = function(l1, l2) {
  let value = l1.val + l2.val;
  let up = value > 9 ? 1 : 0;
  let newValue = value % 10;
  const node = new ListNode(newValue);
  let parent = node;
  l1 = l1.next;
  l2 = l2.next;
  while(l1 && l2) {
      value = up + l1.val + l2.val;
      [parent, up] = addNode(parent, value)
      l1 = l1.next;
      l2 = l2.next;
  }
  while (l1) {
      value = up + l1.val;
      [parent, up] = addNode(parent, value)
      l1 = l1.next;
  }
  while (l2) {
      value = up + l2.val;
      [parent, up] = addNode(parent, value)
      l2 = l2.next;
  }
  if (up > 0) {
      const child = new ListNode(up);
      parent.next = child;
  }
  return node;
}

function addNode(parent, value) {
  const up = value > 9 ? 1 : 0;
  const newValue = value % 10;
  const child = new ListNode(newValue);
  parent.next = child;
  return [child, up];     
}

const n1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const n2 = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(addTwoNumbers(n1, n2));

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

console.log(addTwoNodes(n1, n2));

