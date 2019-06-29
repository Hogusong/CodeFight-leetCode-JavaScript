/*
  Sort a linked list in O(n log n) time using constant space complexity.

  Input: 4->2->1->3,          Output: 1->2->3->4
  Input: -1->5->3->4->0,      Output: -1->0->3->4->5
*/

function sortList(head) {
  if (!head || !head.next) return head;
  let nodes = [];
  let node = head;
  while (node) {
    const temp = node;
    node = node.next;
    temp.next = null;
    nodes.push(temp);
  }
  const sortedNodes = mergeSort(nodes);
  head = sortedNodes[0];
  node = head;
  for (let i = 1; i < sortedNodes.length; i++) {
    node.next = sortedNodes[i]
    node = node.next
  }
  return head;
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return combine(left, right);
}

function combine(A, B) {
  const a = A.length;
  const b = B.length;
  let i = 0, j = 0, ans = [];
  while (i < a && j < b) {
    if (A[i].val < B[j].val) ans.push(A[i++]);
    else ans.push(B[j++]);
  }
  if (i < a) ans = [...ans, ...A.slice(i)];
  if (j < b) ans = [...ans, ...B.slice(j)];
  return ans
}

// Use JS sort function.
function sortList(head) {
  if (!head || !head.next) return head;
  let nodes = [];
  let node = head;
  while (node) {
    const temp = node;
    node = node.next;
    temp.next = null;
    nodes.push(temp);
  }
  const sortedNodes = nodes.sort((a,b) => a.val - b.val);
  head = sortedNodes[0];
  node = head;
  for (let i = 1; i < sortedNodes.length; i++) {
    node.next = sortedNodes[i]
    node = node.next
  }
  return head;
}
