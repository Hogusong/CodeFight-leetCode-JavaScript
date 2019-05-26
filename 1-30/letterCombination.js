/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Input: "23"     2 -> "abc",  3 -> "def"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
*/

function letterCombination(digits) {
  if (!digits || digits === '') return [];
  const dict = {
    '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
  }
  let map = [''];
  for (let d of digits) {
    const temp = [];
    for (let c of dict[d]) {
      for (let m of map) {
        temp.push(m+c);
      }
    }
    map = temp;
  }
  return map;    
}

console.log(letterCombination('237'));
