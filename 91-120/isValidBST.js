/*
  Given a binary tree, determine if it is a valid binary search tree (BST).
  Assume a BST is defined as follows:

  The left subtree of a node contains only nodes with keys less than the node's key.
  The right subtree of a node contains only nodes with keys greater than the node's key.
  Both the left and right subtrees must also be binary search trees.
     2
    / \
   1   3
  Input: [2,1,3]                      Output: true
     5
    / \
   1   4
      / \
     3   6
  Input: [5,1,4,null,null,3,6]        Output: false
  Explanation: The root node's value is 5 but its right child's value is 4.
*/

class TreeNode {
  constructor(v, l=null, r=null) {
    this.val = v;
    this.left = l;
    this.right = r;
  }
}
t3 = new TreeNode(3);
t6 = new TreeNode(6);
t4 = new TreeNode(4, t3, t6);
t1 = new TreeNode(1);
t5 = new TreeNode(5, t1, t4);

function isValidBST(root) {
  return isValidRec(root, null, null);
}

function isValidRec(node, lower, upper) {
  if (!node) return true;
  let val = node.val;
  if (lower != null && val <= lower) return false;
  if (upper != null && val >= upper) return false;

  const right = isValidRec(node.right, val, upper);
  const left = isValidRec(node.left, lower, val);
  return right && left;
}

console.log(isValidBST(t5));

//  Inorder traversal
function isValidBST_Inorder(root) {
  if (!root) return true;
  let stack = [root],  last = null;
  while (stack.length > 0) {
    let curr = stack[stack.length-1];
    if (curr.left) {
      stack.push(curr.left);
      curr.left = null;
    } else {
      if (last != null && last >= curr.val) return false;
      stack.pop();
      last = curr.val;
      if (curr.right) stack.push(curr.right)
    }
  }
  return true;
}

console.log(isValidBST_Inorder(t5));

//  Iteration
function isValidBST_Iteration(root) {
  stack = [], uppers = [], lowers = [];
  let lower = null, upper = null;
  update(root, lower, upper)

  while(stack.length > 0) {
    root = stack.pop();
    upper = uppers.pop();
    lower = lowers.pop();

    if (!root) continue;
    const val = root.val;
    if (lower != null && val <= lower) return false;
    if (upper != null && val >= upper) return false;
    update(root.right, val, upper);
    update(root.left, lower, val);
  }
  return true;
}

function update(node, lower, upper) {
  stack.push(node);
  uppers.push(upper);
  lowers.push(lower);
}
