/*
  Given a binary tree, determine if it is height-balanced.
  For this problem, a height-balanced binary tree is defined as:
  a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

  Given the following tree [3,9,20,null,null,15,7]:

         3
        / \
       9  20
         /  \
        15   7          Return true.

  Given the following tree [1,2,2,3,3,null,null,4,4]:

         1
        / \
       2   2
      / \
     3   3
    / \
   4   4                Return false.
*/

function isBalanced(root) {
  if (!root) return true;
  let lh = height(root.left);
  let rh = height(root.right);
  return (Math.abs(lh-rh) <= 1 && isBalanced(root.left) && isBalanced(root.right));
}

function height(node) {
  if (!node) return 0;
  return 1 + Math.max(height(node.left), height(node.right));
}

//  Optimized implementation
class Height {
  constructor() {
    this.height = 0
  }
}

function isBalancedOpt(root) {
  if (!root) return true;
  return checkBalance(root, new Height());
}

function checkBalance(node, height) {
  if (!node) return true;
  let l_height = new Height(),  r_height = new Height();
  let L = checkBalance(node.left, l_height);
  let R = checkBalance(node.right, r_height);
  let lh = l_height.height,  rh = r_height.height;
  console.log(lh, rh);
  height.height = (lh > rh ? lh : rh) + 1;
  if (Math.abs(lh - rh) > 1) return false;
  return L && R
}

//  Just find Max & Min depth of the root.
function countDepth(root) {
  if (!root) return true;
  maxDepth = 0, minDepth = 1000000;
  findAllDepth(root, 0);
  return maxDepth - minDepth < 2;
}

function findAllDepth(node, count) {
  count++;
  if (!node) {
    maxDepth = Math.max(maxDepth, count);
    minDepth = Math.min(minDepth, count);
    return;
  }
  findAllDepth(node.left, count);
  findAllDepth(node.right, count);
}
