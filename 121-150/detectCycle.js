/*
  Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
*/

function detectCycle(head) {
  const set = new Set();
  while (head) {
    if (set.has(head)) return head;
    set.add(head);
    head = head.next
  }
  return null;    
}
