// Given a binary tree, return the postorder traversal of its nodes' values.

// Recursion
function postorderTraversal(root) {
  if (!root) return [];
  result = []
  traversal(root);
  return result;    
};

function traversal(node) {
  if (!node) return;
  if (node.left) traversal(node.left);
  if (node.right) traversal(node.right);
  result.push(node.val);
}

// Using Stack
function postorderTraversal(root) {
  if (!root) return [];
  let stack = [], result = [];
  while (true) {
    while (root) {
      stack.push(root);
      stack.push(root);
      root = root.left;
    }
    if (stack.length < 1) return result;
    root = stack.pop();
    if (stack.length > 0 && stack[stack.length-1] === root) root = root.right;
    else {
      result.push(root.val);
      root = null;
    }
  }
}
