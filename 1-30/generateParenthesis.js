/*
  Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

  For example, given n = 3, a solution set is:
  [ "((()))",    "(()())",    "(())()",    "()(())",    "()()()" ]
*/

// Brute Force and Recursion
var generateBFR = function(n) {

  function generateRec(A = []) {
    if (A.length == 2*n) {
      if (valid(A)) {
        ans.push(A.join(""));
      }
    } else {
      A.push('(')
      generateRec(A)
      A.pop()
      A.push(')')
      generateRec(A)
      A.pop()
    }
  }

  ans = []
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

n = 3
console.log(generateBFR(n));

//  BackTracking and Recursion
function generateBTR(n) {
  ans = [];
  backtrack(n);
  return ans;
}

function backtrack(n, S='', left = 0, right = 0) {
  if (S.length === 2*n) {
    ans.push(S)
    return
  }
  if (left < n) backtrack(n, S+'(', left+1, right);
  if (right < left) backtrack(n, S+')', left, right+1);
}

console.log(generateBTR(n));
