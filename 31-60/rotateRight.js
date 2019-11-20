/*
Given a linked list, rotate the list to the right by k places, where k is non-negative.

Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL

Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL
*/

var rotateRight = function(head, k) {
  if (!head || !head.next || k < 1) return head;
  const arr = [];
  let curr = head;
  while (curr) {
    const temp = curr.next;
    curr.next = null;
    arr.push(curr);
    curr = temp;
  }
  if (k > arr.length) k = k % arr.length ;
  if (k > 0) k = arr.length - k;
  head = arr[k], curr = head;
  for (let i = k + 1; i < arr.length; i++) {
    curr.next = arr[i];
    curr = curr.next;
  }
  for (let i = 0; i < k; i++) {
    curr.next = arr[i];
    curr = curr.next;
  }

  return head;
}

var rotateRight = function(head, k) {
  if (!head  || !head.next || k < 1) return head;

  let node = head, prev = null,  count = 1;
  while (node.next) {
    count ++;
    node = node.next
  }
  const tail = node;

  if (k % count < 1) return head;

  k = count - k % count;
  count = 0;
  node = head;
  while (count < k) {
    count ++;
    prev = node;
    node = node.next
  }
  tail.next = head;
  prev.next = null;
  return node;
};