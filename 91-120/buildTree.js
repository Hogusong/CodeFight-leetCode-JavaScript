/*
  Given preorder and inorder traversal of a tree, construct the binary tree.
  You may assume that duplicates do not exist in the tree.

  preorder = [3,9,20,15,7]        inorder = [9,3,15,20,7]
  Return the following binary tree:
      3
     / \
    9  20
      /  \
     15   7
*/

class TreeNode {
  constructor(v, l=null, r=null) {
    this.val = v;
    this.left = l;
    this.right = r;
  }
}

function buildTree(preorder, inorder) {
  if (preorder.length != inorder.length) return null;
  if (preorder.length < 1) return null;

  const root = new TreeNode(preorder[0]);
  const i = inorder.indexOf(preorder[0]);
  if (i >= 0) {
    root.left = buildTree(preorder.slice(1, i+1), inorder.slice(0, i));
    root.right = buildTree(preorder.slice(i+1), inorder.slice(i+1));
  }
  return root;
};

P = [3,9,20,15,7];
I = [9,3,15,20,7];
console.log(buildTree(P, I));

//  Not completed.
function buildTreeSW(preorder, inorder) {
  if (preorder.length != inorder.length) return null;
  if (preorder.length < 1) return null;
  return buildTreeSW_Rec(preorder, inorder, 0)
};

function buildTreeSW_Rec(P, I, s) {
  const root = new TreeNode(P[s]);
  const i = I.indexOf(P[s], s);
  if (i >= 0) {
    root.left = buildTreeSW_Rec(P, I, s+1, );
    root.right = buildTreeSW_Rec(P, I, i+1);
  }
  return root;  
}

P = ['A', 'B', 'D', 'H', 'E', 'C', 'F', 'I', 'G'];
I = ['D', 'H', 'B', 'E', 'A', 'I', 'F', 'C', 'G'];
console.log(buildTreeSW(P, I));
