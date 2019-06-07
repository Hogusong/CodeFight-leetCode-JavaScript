/*
  Reverse a linked list from position m to n. Do it in one-pass.

  Note: 1 ≤ m ≤ n ≤ length of list.

  Example:

  Input: 1->2->3->4->5->NULL, m = 2, n = 4
  Output: 1->4->3->2->5->NULL
*/

class ListNode {
  constructor(v, n=null) {
    this.val = v;
    this.next = n;
  }
}

function swapTwoNodes(head, m, n) {
  if (!head || !head.next || m === n || m * n < 1) return head;
  let curr = head, i = 1, m_node = null, n_node = null;
  let m_pre_node = null, n_pre_node = null;
  while (curr && (!m_node || !n_node)) {
    if (m === i) {
      m_node = curr;
      m_node.next = curr.next;
    }
    if (n === i) {
      n_node = curr;
      n_node.next = curr.next;
    }
    if (i < m) m_pre_node = curr;
    if (m < i && i < n) n_pre_node = curr;
    curr = curr.next
    i++;
  }
  if (n_node) {
    if (m > 1) {
      m_pre_node.next = n_node;
    } else {
      head = n_node;
      pre_node = head;
    }
    if (n - m > 1) {
      const temp = n_node.next;
      n_node.next = m_node.next;
      m_node.next = temp;
      n_pre_node.next = m_node;
    } else {
      const temp = n_node.next;
      n_node.next = m_node;
      m_node.next = temp
    }
  }
  return head;
}

node = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
N = swapTwoNodes(node, 2, 4);
printNode(N);
node = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
N = swapTwoNodes(node, 1, 6);
printNode(N);
node = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
N = swapTwoNodes(node, 2, 3);
printNode(N);

function printNode(N) {
  let str = '';
  while (N) {
    str += N.val + (N.next ? ' -> ' : '');
    N = N.next;
  }
  console.log(str);
}
