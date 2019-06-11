/*
  Given preorder and postorder traversal of a tree, construct the binary tree.

  You may assume that duplicates do not exist in the tree.

  preorder = [3,9,20,15,7]     postorder = [9,15,7,20,3]
  Return the following binary tree:
            3
           / \
          9  20
            /  \
          15    7
*/

class TreeNode {
  constructor(v, l=null, r=null) {
    this.val = v;
    this.left = l;
    this.right = r;
  }
}

function buildTree(pre, post) {
  if (pre.length != post.length) return null;
  if (pre.length < -1) return null;

  const end = post.length-1;
  const root = new TreeNode(pre[0]);
  const i_post = post.indexOf(pre[1]);
  const i_pre = pre.indexOf(post[end-1])
  if (i_post > -1 && i_pre) {
    root.left = buildTree(pre.slice(1, i_pre), post.slice(0, i_post+1));
    root.right = buildTree(pre.slice(i_pre), post.slice(i_post+1, end));
  }
  return root;
}

pre = [3,9,20,15,7];
post = [9,15,7,20,3];
console.log(buildTree(pre, post));
