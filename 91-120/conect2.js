/*
  Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
  Initially, all next pointers are set to NULL.

  
            1               1  --> null
          /   \           /   \
        2       3       2  -->  3 --> null
       / \       \     / \       \
      4   5       7   4 ->5   ->  7 --> null 

  Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B.
*/

//  Recursion
function connect(root) {
  if (!root) return null;
  root.next = null
  connectRec(root);
  return root;
};

function connectRec(node) {
  if (!node) return;

  if (node.next) connectRec(node.next);
  
  if (node.left) {
      if (node.right) {
          node.left.next = node.right;
          node.right.next = getNext(node.next);
      } else {
          node.left.next = getNext(node.next);
      }
      connectRec(node.left);
  } else if (node.right) {
      node.right.next = getNext(node.next);
      connectRec(node.right);
  }
}

function getNext(node) {
  if (!node) return null;
  if (node.left) return node.left;
  if (node.right) return node.right;
  return getNext(node.next)
}

// function getNext(node) {
//   while (node) {
//     if (node.left) return node.left;
//     if (node.right) return node.right;
//     node = node.next
//   }
//   return null;
// }

//  Iterative 
function connect(root) {
  if (!root) return null;

  let node = root;
  while (node) {
    let curr = node;
    while (curr) {
      if (curr.left) {
        if (curr.right) curr.left.next = curr.right;
        else curr.left.next = getNext(curr.next);
      }
      if (curr.right) curr.right.next = getNext(curr.next);
      curr = curr.next;
    }
    if (node.left) node = node.left;
    else if (node.right) node = node.right;
    else node = getNext(node)
  }
  return root;
}