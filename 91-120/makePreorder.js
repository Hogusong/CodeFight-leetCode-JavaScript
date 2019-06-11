/*
  Given a binary tree, return the preorder traversal of its nodes' values.
  Read left of the subTree first.

  Input: [5,3,8,1,null,6,9],      Preorder:  [5,3,1,8,6,9]
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

function buildPreorder(root) {
  if (!root) return [];
  result = [];
  buildPreorderRec(root);
  return result;
}

function buildPreorderRec(node) {
  if (!node)  return;
  result.push(node.val);
  buildPreorderRec(node.left);
  buildPreorderRec(node.right);
}

console.log(buildPreorder(t5));
