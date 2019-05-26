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
