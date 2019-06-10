/*
  Two elements of a binary search tree (BST) are swapped by mistake.
  Recover the tree without changing its structure.

  Input: [1,3,null,null,2]      Output: [3,1,null,null,2]

         1                            3
        /                            /
      3                             1
        \                            \ 
         2                            2

  Input: [3,1,4,null,null,2]      Output: [2,1,4,null,null,3]

         3                            2 
        / \                          / \  
       1   4                        1   4  
          /                            / 
         2                            3 

  Follow up:  A solution using O(n) space is pretty straight forward.
              Could you devise a constant space solution?
*/


class TreeNode {
  constructor(v, l=null, r=null) {
    this.val = v;
    this.left = l;
    this.right = r;
  }
}

function recoverTree(root) {
  first = null, last = null, previous = null;
  findSegments(root);
  const temp = first.val;
  first.val = last.val;
  last.val = temp;
  return root;
}

function findSegments(node) {
  if (!node) return node;
  findSegments(node.left);
  if (previous) {
    if (previous.val > node.val) {
      if (!first) first = previous;
      last = node;
    }
  }
  previous = node;
  findSegments(node.right);
}

t1 = new TreeNode(1);
t2 = new TreeNode(2);
t4 = new TreeNode(4, t2);
t3 = new TreeNode(3, t1, t4);

console.log(recoverTree(t3));

t1 = new TreeNode(1);
t2 = new TreeNode(2);
t3 = new TreeNode(3, t1, t2);
t5 = new TreeNode(5, t3, new TreeNode(9));

console.log(recoverTree(t5));
