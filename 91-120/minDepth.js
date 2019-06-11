/*
  Given a binary tree, find its minimum depth.
  The minimum depth is the number of nodes along the shortest path 
  from the root node down to the nearest leaf node.

  Note: A leaf is a node with no children.

  Given binary tree [3,9,20,null,null,15,7],

      3
     / \
    9  20
      /  \
     15   7     minimum depth = 2.
*/

function minimumDepth(root) {
  if (!root) return 0;
  if (root.left == null && root.right == null) return 1; 

  if (root.left == null) return minimumDepth(root.right) + 1; 
  if (root.right == null) return minimumDepth(root.left) + 1; 
  return Math.min(minimumDepth(root.left), 
              minimumDepth(root.right)) + 1; 
}
