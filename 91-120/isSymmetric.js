/*
  Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
  For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

      1
     / \
    2   2
   / \ / \
  3  4 4  3

  But the following [1,2,2,null,3,null,3] is not:

      1
     / \
    2   2
     \   \
      3    3

  Note:
  Bonus points if you could solve it both recursively and iteratively.
*/

//  Iterative
function isSymmetricIterative(root) {
  if (!root) return true;
  const left = root.left;
  const right = root.right; 
  if (!left && !right) return true;
  if (!left || !right) return false;
  if (left.val != right.val) return false;

  L = [left], R = [right];
  while (L.length > 0 && R.length > 0) {
    const VL = [], VR = []
    const TL = [...L], TR = [...R];
    L = [];
    R = [];
    for (let l of TL) {
      if (l.left)  L.push(l.left);
      if (l.right) L.push(l.right);
      
      VL.push((l.left ? l.left.val : 'x'));
      VL.push((l.right ? l.right.val : 'x'));
    }

    for (let r of TR) {
      if (r.left)  R.push(r.left);
      if (r.right) R.push(r.right);
      
      VR.push((r.left ? r.left.val : 'x'));
      VR.push((r.right ? r.right.val : 'x'));
    }

    if (!checkValues(VL, VR)) return false;
  }
  return true;
}

function checkValues(L, R) {
  if (L.length != R.length) return false;
  for (let i = 0; i < L.length; i++) {
    if (L[i] != R[R.length-i-1]) return false;
  }
  return true;
}
