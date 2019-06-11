/*
  Given a binary tree, return the postorder traversal of its nodes' values.
  Read left of the subTree first.

  Input: [5,3,8,1,null,6,9],      Postorder:  [1,3,6,9,8,5]
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

function buildPostorder(root) {
  if (!root) return [];
  result = [];
  buildPostorderRec(root);
  return result;
}

function buildPostorderRec(node) {
  if (!node)  return;
  buildPostorderRec(node.left);
  buildPostorderRec(node.right);
  result.push(node.val);
}

console.log(buildPostorder(t5));
