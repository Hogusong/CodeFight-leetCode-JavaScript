/*
  Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
  k is a positive integer and is less than or equal to the length of the linked list. 
  If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

  Given this linked list: 1->2->3->4->5
  For k = 2, you should return: 2->1->4->3->5
  For k = 3, you should return: 3->2->1->4->5
*/

class LinkedNode {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

function reverseKGroup(head, k) {
  if (k < 1 || !head || !head.next) return head;

  let parent = null;
  let curr = head, root = head;
  while (curr) {
    const arr = []
    for (let i=0; i < k; i++) {
      const node = curr;
      curr = curr.next;
      node.next = null;
      arr.push(node);
      if (!curr) {
        break;
      }
    }
    if (!parent) {
      if (arr.length < k) {
        root = arr[0];
        parent = root;
        for (let i=1; i<arr.length; i++) {
          parent.next = arr[i];
          parent = parent.next;          
        }
        break;
      } else {
        root = arr.pop();
        parent = root;
      }
    } else if (arr.length < k) {
      for (let i=0; i<arr.length; i++) {
        parent.next = arr[i];
        parent = parent.next;          
      }
      break;
    }
    while (arr.length > 0) {
      parent.next = arr.pop();
      parent = parent.next;
    }
  }
  return root;
}

const node = new LinkedNode(1, new LinkedNode(2));
console.log(reverseKGroup(node, 2));

//  Using Array
function reverseGroupK(head, k) {
  if (k < 2 || !head || !head.next) return head;
  if (!head || !head.next) return head;

  let arr = [],  count = 0;
  let root = null, curr = head, prev = null;
  while (curr) {
    count = 0
    while (count < k && curr) {
      const temp = curr.next;
      curr.next = null;
      arr.push(curr);
      curr = temp;
      count++;
    }

    if (count === k) {
      let node = arr.pop();
      if (!root) {
        root = node;
        prev = node;
        node = arr.pop();
      }
      prev.next = node;      
      while (arr.length > 0) {
        node.next = arr.pop();
        node = node.next;
      }
      prev = node;
    }
  }
  if (!root) {
      root = arr.shift();
      prev = root;
  }
  for (let i = 0; i < arr.length; i++) {
      prev.next = arr[i];
      prev = prev.next;
  }
  return root;
}

// using array 2nd solution
var reverseKGroup = function(head, k) {
  if (!head) return null;
  let root = new ListNode(0);
  root.next = head;
  let last = root, curr = head;
  while (curr) {
    const arr = [];
    for (let i = 0; i < k; i++) {
      const keep = curr;
      curr = curr.next;
      keep.next = null;
      arr.push(keep);
      if (!curr) break;
    }
    if (arr.length < k) {
      for (let j = 0; j < arr.length; j++) {
        last.next = arr[j];
        last = last.next;
      }
    } else {
      for (let j = k-1; j >= 0; j--) {
        last.next = arr[j];
        last = last.next;
      }
    }
  }
  return root.next;
}

//  I got 100% for speed and 100% for using space
var reverseKGroup = function(head, k) {
  if (!head) return head;
  let uptoKth = getUptoKth(head, k)
  if (uptoKth.length < 1) return head;
  let tailNode = head;
  let afterKth = uptoKth.pop();
  head = makeReverse(uptoKth);
  tailNode.next = reverseKGroup(afterKth, k);
  return head;
}

function getUptoKth(node, k) {
  let count = 0;
  let temp = [];
  while (temp.length < k) {
    if (!node) return [];
    temp.push(node);
    node = node.next;
    count ++;
  }
  temp.push(node);
  return temp;
}

function makeReverse(lists) {
  const head = lists.pop();
  let curr = head;
  while (lists.length > 0) {
    curr.next = lists.pop();
    curr = curr.next;
  }
  return head;
}
