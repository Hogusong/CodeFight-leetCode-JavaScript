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

