/*
  Given a binary tree, flatten it to a linked list in-place.
        1
       / \
      2   5
     / \   \
    3   4   6
  The flattened tree should look like:
  1
   \
    2
     \
      3
       \
        4
         \
          5
           \
            6
*/

function flatten(root) {
  if (!root) return null;
  result = [root]
  getPreorder(root)
  let curr = root;
  for (let i = 1; i < result.length; i++) {
    curr.left = null;
    curr.right = result[i];
    curr = result[i];
  }
  curr.left = null;
  curr.right = null;
  return root;
}

function getPreorder(node) {
  if (!node) return;
  result.push(node);
  getPreorder(node.left);
  getPreorder(node.right);
}