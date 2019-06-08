/*
  Given a binary tree, return the inorder traversal of its nodes' values.
  Read left of the subTree first.

  Input: [1,null,2,3,4],      Output: [1,3,2,4]
    1
      \
      2
      / \
    3    4
  read 1 first because 1 has no most left.
  read 3 next because 3 is the left of 2.
  read 2 next because 2' right child(4) has no left.
  then read 4.
  Follow up: Recursive solution is trivial, could you do it iteratively?
*/

class TreeNode {
  constructor(v, l=null, r=null) {
    this.val = v;
    this.left = l;
    this.right = r;
  }
}

t4 = new TreeNode(4);
t3 = new TreeNode(3);
t2 = new TreeNode(2, t3, t4);
t1 = new TreeNode(1, null, t2);

function inorderTraversal(root) {
  result = [];
  traversal(root);
  return result;
}

function traversal(curr) {
  if (!curr) return;
  traversal(curr.left);
  result.push(curr.val);
  traversal(curr.right);
}

console.log(inorderTraversal(t1));

function inorderTraversalIter(root) {
  if (!root) return [];
  let result = [], stack = [root];
  while (stack.length > 0) {
    curr = stack[stack.length-1];
    if (!curr.left) {
      result.push(curr.val);
      stack.pop();
      if (curr.right) {
        stack.push(curr.right);
      }
    } else {
      stack.push(curr.left);
      curr.left = null;
    }
  }
  return result;
}

console.log(inorderTraversalIter(t1));
