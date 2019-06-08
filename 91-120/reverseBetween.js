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

function reverseBetween(head, m, n) {
  if (!head || !head.next || m === n) return head;

  const root = new ListNode(0);
  root.next = head;
  let curr = head, m_node = null, before_m = root;
  let i = 1, n_node = null;
  while (curr && i <= n) {
    if (i < m) {
      before_m = curr;
      curr = curr.next;
    } else if ( i === m) {
      m_node = curr;
      n_node = curr;
      curr = curr.next;
      m_node.next = null;
      n_node.next = null;
    } else if (m < i && i < n) {
      temp = m_node;
      m_node = curr;    
      curr = curr.next; 
      m_node.next = (i - m < 2) ? n_node : temp;
    } else {
      before_m.next = curr;
      n_node.next = curr.next      
      curr.next = m_node
    }
    // console.log('Before_m', before_m.val, '  m_node', (m_node ? m_node.val : 'x'), '  n_node', (n_node ? n_node.val : 'x'), '  curr', curr.val);
    i++;
  }
  return root.next;
}

console.log()
node = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
N = reverseBetween(node, 2, 5);
printNode(N);
node = new ListNode(2, new ListNode(3));
N = reverseBetween(node, 1, 2);
printNode(N);
node = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
N = reverseBetween(node, 3, 4);
printNode(N);

function printNode(N) {
  let str = '';
  while (N) {
    str += N.val + (N.next ? ' -> ' : '');
    N = N.next;
  }
  console.log(str);
}

function reverseBetweenRec(head, m, n) {
  left = head;
  stop = false;
  recurseAndReverse(head, m, n);
  return head;
}

function recurseAndReverse(right, m, n) {

  if (n == 1) return;
  
  // Keep moving the right pointer one step forward until (n == 1)
  right = right.next;

  // Keep moving left pointer to the right until we reach the proper node
  // from where the reversal is to start.
  if (m > 1) left = left.next;

  // Recurse with m and n reduced.
  recurseAndReverse(right, m - 1, n - 1);

  // In case both the pointers cross each other or become equal, we
  // stop i.e. don't swap data any further. We are done reversing at this
  // point.
  if (left == right || right.next == left)   stop = true;

  // Until the boolean stop is false, swap data between the two pointers
  if (!stop) {
    let t = left.val;
    left.val = right.val;
    right.val = t;

    // Move left one step to the right.
    // The right pointer moves one step back via backtracking.
    left = left.next;
  }
}

console.log()
node = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
N = reverseBetweenRec(node, 2, 5);
printNode(N);
node = new ListNode(2, new ListNode(3));
N = reverseBetweenRec(node, 1, 2);
printNode(N);
node = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
N = reverseBetweenRec(node, 3, 4);
printNode(N);

function reverseBetween2(head, m, n) {
  let i = 0, left = head, right = head, count = 1;
  for (count = 1; count < m; count++) left = left.next;
  while (m+i <= n-i) {
    right = left;
    for (count = m+i; count < n-i; count++) right = right.next
    const t = left.val;
    left.val = right.val;
    right.val = t;
    i++;
    left = left.next
  }
  return head
}

console.log()
node = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
N = reverseBetween2(node, 2, 5);
printNode(N);
node = new ListNode(2, new ListNode(3));
N = reverseBetween2(node, 1, 2);
printNode(N);
node = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
N = reverseBetween2(node, 3, 4);
printNode(N);

function reverseBetween3(head, m, n) {

  if (head == null)  return null;

  // Move the two pointers until they reach the proper starting point
  // in the list.
  let cur = head, prev = null, i = 1;
  while (m > i) {
      prev = cur;
      cur = cur.next;
      i++;
  }

  // The two pointers that will fix the final connections.
  let con = prev, tail = cur;

  // Iteratively reverse the nodes until n becomes 0.
  let third = null;
  while (n >= i) {
    third = cur.next;
    cur.next = prev;
    prev = cur;
    cur = third;
    i++;
  }

  // Adjust the final connections as explained in the algorithm
  if (con != null) {
    con.next = prev;
  } else {
    head = prev;
  }

  tail.next = cur;
  return head;
}

console.log()
node = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
N = reverseBetween3(node, 2, 5);
printNode(N);
node = new ListNode(2, new ListNode(3));
N = reverseBetween3(node, 1, 2);
printNode(N);
node = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
N = reverseBetween3(node, 3, 4);
printNode(N);
