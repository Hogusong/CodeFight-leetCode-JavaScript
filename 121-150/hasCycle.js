/*
  Given a linked list, determine if it has a cycle in it.
  head = [3,2,0,-4,2]   true
  head = [1,2,3]        false
*/

function hasCycle(head) {
  const set = new Set();
  while (head) {
    if (set.has(head)) return true
    set.add(head);
    head = head.next
  }
  return false;
}

function hasCycle(head) {
  if (!head || !head.next) return false;

  let slow = head,  fast = head.next;
  while (slow != fast) {
    if (!fast || !fast.next) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
}