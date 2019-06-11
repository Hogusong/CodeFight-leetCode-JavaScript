/*
  Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
  For this problem, a height-balanced binary tree is defined as a binary tree 
  in which the depth of the two subtrees of every node never differ by more than 1.

  Given the sorted linked list: [-10,-3,0,5,9],
  One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

            0
           / \
         -3   9
         /   /
       -10  5
*/

class ListNode {
  constructor(v) {
    this.val = v;
    this.next = null
  }
}

class TreeNode {
  constructor(v, l=null, r=null) {
    this.val = v;
    this.left = l;
    this.right = r;
  }
}

//  Convert the ListNode to Array.
function sortedListToBST(head) {
  if (!head) return null;
  const nums = [];
  while (head) {
    nums.push(head.val);
    head = head.next;
  }

  return buildBST(nums, 0, nums.length-1);
}

function buildBST(N, from, to) {
  if (from > to) return null;
  if (from === to) return new TreeNode(N[from]);

  const mid = Math.floor((from + to + 1) / 2);
  const node = new TreeNode(N[mid]);
  node.left = buildBST(N, from, mid-1);
  node.right = buildBST(N, mid+1, to);
  return node;
}

//  Find the middle ListNode
function sortedListToBST(head) {
  if (!head) return null;
  const mid = findMiddleElement(head);
  const node = new TreeNode(mid.val);
  if (head.val === mid.val) return node;
  node.left = sortedListToBST(head);
  node.right = sortedListToBST(mid.next);
  return node;
}

function findMiddleElement(head) {
  let prevPtr = null,  slowPtr = head,  fastPtr = head;
  while (fastPtr && fastPtr.next) {
    prevPtr = slowPtr;
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next
  }
  if (prevPtr) prevPtr.next = null
  return slowPtr;
}
