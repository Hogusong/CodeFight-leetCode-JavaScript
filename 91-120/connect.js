/*
  You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. 
  The binary tree has the following definition:

  struct Node {
      int val;
      Node *left;
      Node *right;
      Node *next;
  }
  Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
  Initially, all next pointers are set to NULL.

            1               1  --> null
          /   \           /   \
        2       3       2  -->  3 --> null
       / \     / \     / \     / \
      4   5   6   7   4 ->5 ->6 ->7 --> null 

  Input: {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":null,"right":null,"val":4},"next":null,"right":{"$id":"4","left":null,"next":null,"right":null,"val":5},"val":2},"next":null,"right":{"$id":"5","left":{"$id":"6","left":null,"next":null,"right":null,"val":6},"next":null,"right":{"$id":"7","left":null,"next":null,"right":null,"val":7},"val":3},"val":1}

  Output: {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":{"$id":"4","left":null,"next":{"$id":"5","left":null,"next":{"$id":"6","left":null,"next":null,"right":null,"val":7},"right":null,"val":6},"right":null,"val":5},"right":null,"val":4},"next":{"$id":"7","left":{"$ref":"5"},"next":null,"right":{"$ref":"6"},"val":3},"right":{"$ref":"4"},"val":2},"next":null,"right":{"$ref":"7"},"val":1}

  Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B.
  

  Note:

  You may only use constant extra space.
  Recursive approach is fine, implicit stack space does not count as extra space for this problem.
*/

//  Using Stack
function connect(root) {
  if (!root) return null;
  root.next = null;
  let stack = [root];
  while (stack.length > 0) {
    const temp = [...stack];
    stack = [];
    for (let t of temp) {
      if (t.left) stack.push(t.left);
      if (t.right) stack.push(t.right);
    }
    for (let i = 1; i < stack.length; i++) {
      stack[i-1].next = stack[i];
    }
    stack[stack.length-1].next = null;
  }
  return root;
}
