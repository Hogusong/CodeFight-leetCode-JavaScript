/*
  Find all possible substring which include all and only vowels.

  input = 'aeioua'    output = 3  'aeioua', 'eioua', 'aeiou'
  input = 'aeioxua'   output = 0  because 'x' 
*/

function findSubstring(s) {
  if (s.length < 5) return 0;
  const vowels = 'aeiou';
  ans = [];
  let from = null;
  for (var i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      if (from == null) {
        from = i;
      }
    } else {
      if (from != null && i - from >= 5 ) {
        findRec(s.substring(from, i));
      }
      from = null;
    }
  }
  if (from != null && s.length - from >= 5) {
    findRec(s.substring(from, i));
  }

  function findRec(str) {
    if (str.length < 5) return;
    if (allInclude(str)) ans.push(str);
    findRec(str.substring(0, str.length-1));
    findRec(str.substring(1, str.length));
  }

  function allInclude(str) {
    for (let v of vowels) {
      if (!str.includes(v)) return false;
    }
    return true;
  }

  return ans.length;
}

console.log(findSubstring("aeiouaeixabceioeua"));
console.log(findSubstring('aeioua'));
