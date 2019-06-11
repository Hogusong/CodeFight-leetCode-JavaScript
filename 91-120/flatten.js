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

//  Using Array
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

//  Recursion
function flatten(root) {
  if (!root) return null;

  let left = root.left;
  let right = root.right;

  root.left = null;
  flatten(left);
  flatten(right);

  root.right = left;
  let curr = root;
  while (curr.right) curr = curr.right
  curr.right = right;
  return root;
}
