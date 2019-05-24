/*
  Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

  For example, given n = 3, a solution set is:
  [ "((()))",    "(()())",    "(())()",    "()(())",    "()()()" ]
*/

// Brute Force and Recursion
var generateBT = function(n) {

  function generateRec(A = []) {
    if (A.length == 2*n) {
      if (valid(A)) {
        ans.push(A.join(""));
      }
    } else {
      A.push('(')
      console.log('T', ++t_count, A)
      generateRec(A)
      A.pop()
      A.push(')')
      console.log('B', ++b_count, A)
      generateRec(A)
      A.pop()
    }
  }

  ans = []
  t_count = 0
  b_count = 0
  generateRec()
  return ans
}

function valid(A) {
  let bal = 0
  for (let c of A) {
    bal += (c === '(') ? 1 : -1;
    if (bal < 0) return false;
  }
  return bal == 0
}

console.log(generate(2));
