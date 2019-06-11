/*
  Given a binary tree, return the inorder traversal of its nodes' values.
  Read left of the subTree first.

  Input: [5,3,8,1,null,6,9],      Output: [1,3,4,5,6,8,9]
        5
       / \
     3    8
    /    / \
   1    6   9
*/

class TreeNode {
  constructor(v, l=null, r=null) {
    this.val = v;
    this.left = l;
    this.right = r;
  }
}

t1 = new TreeNode(1);
t3 = new TreeNode(3, t1);
t6 = new TreeNode(6);
t9 = new TreeNode(9);
t8 = new TreeNode(8, t6, t9);
t5 = new TreeNode(5, t3, t8);

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

console.log(inorderTraversal(t5));

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

console.log(inorderTraversalIter(t5));
