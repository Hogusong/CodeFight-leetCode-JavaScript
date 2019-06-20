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

//  Brute Force Recursion.
function minimumDepth(root) {
  if (!root) return 0;
    
  minD = 100000000;
  findMin(root, 0);
  return minD;
}

function findMin(node, count) {
  if (!node.left && !node.right) {
      minD = Math.min(minD, ++count);
      return;
  } 
  count++;
  if (!node.left) findMin(node.right, count);
  else if (!node.right) findMin(node.left, count); 
  else Math.min(findMin(node.left, count), findMin(node.right, count)); 
}

//  Using Stack
function minDepth(root) {
  if (!root) return 0;
  let stack = [{'node': root , 'depth' : 1}] 

  while(stack.length > 0) {
    const temp = [...stack];
    stack = [];
    for (let t of temp) {
      const node = t['node'] ;
      const depth = t['depth'] ;
      if (!node.left && !node.right) return depth ;
      if (node.left)	stack.push({'node' : node.left , 'depth' : depth+1}) 
      if (node.right)	stack.push({'node': node.right , 'depth' : depth+1}) 
    }
  }
}

//  Sliding Window 
function minDepthSW(root) {
  if (!root) return 0;
  let stack = [{'node': root , 'depth' : 1}] 
  let from = 0, to = 1, added = 1;
  while(added > 0) {
    added = 0
    for (let i = from; i < to; i++) {
      const node = stack[i]['node'] ;
      const depth = stack[i]['depth'] ;
      if (!node.left && !node.right) return depth ;
      if (node.left) {
          stack.push({'node' : node.left , 'depth' : depth+1}) ;
          added++;
      }
      if (node.right) {
          stack.push({'node': node.right , 'depth' : depth+1});
          added++;
      }
    }
    [from, to] = [to, to + added];
  }
}

