/*
  Sort a linked list using insertion sort.
  Algorithm of Insertion Sort:
  Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
  At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
  It repeats until no input elements remain.

  Input: 4->2->1->3,          Output: 1->2->3->4
  Input: -1->5->3->4->0,      Output: -1->0->3->4->5
*/

function insertionSortList(head) {
  if (!head || !head.next) return head;

  let node = head;
  while (node) {
    if (node.next && node.val > node.next.val) {
      const temp = node.next;
      node.next = node.next.next;
      temp.next = null;
      let curr = head;
      let prev = null;
      while (curr.val <= temp.val) {
        prev = curr;
        curr = curr.next;
      }
      temp.next = curr;
      if (prev === null) head = temp
      else prev.next = temp
    } else {
      node = node.next;
    }
  }
  return head;  
}