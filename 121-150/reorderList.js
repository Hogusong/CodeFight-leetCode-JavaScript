/*
  Given a singly linked list L: L0→L1→…→Ln-1→Ln,
  reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
  You may not modify the values in the list's nodes, only nodes itself may be changed.

  Given 1->2->3->4,    reorder it to 1->4->2->3.
  Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
*/

function reorderList(head) {
  if (!head || !head.next) return head;
  let nextNode = head.next;
  let keyNode = head;
  let currNode = head;
  let prevNode = null, count = 0;
  while (nextNode.next) {
      while (currNode.next) {
          prevNode = currNode
          currNode = currNode.next;    
      }
      keyNode.next = currNode;
      currNode.next = nextNode;
      keyNode = nextNode;
      nextNode = nextNode.next
      currNode = nextNode;
      prevNode.next = null;
      if (keyNode === prevNode) break;
  }
  return head
}