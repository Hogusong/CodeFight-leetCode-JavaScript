/*
  Given inorder and postorder traversal of a tree, construct the binary tree.

  You may assume that duplicates do not exist in the tree.

  inorder = [9,3,15,20,7]     postorder = [9,15,7,20,3]
  Return the following binary tree:
            3
           / \
          9  20
            /  \
          15    7
*/

function buildTree(inorder, postorder) {
  if (inorder.length != postorder.length)  return null;
  if (postorder.length < 1) return null;
  const end = postorder.length - 1;
  const root = new TreeNode(postorder[end]);
  const i = inorder.indexOf(postorder[end]);
  if (i > -1) {
    root.left = buildTree(inorder.slice(0,i), postorder.slice(0,i));
    root.right = buildTree(inorder.slice(i+1), postorder.slice(i, end))
  }
  return root;
};