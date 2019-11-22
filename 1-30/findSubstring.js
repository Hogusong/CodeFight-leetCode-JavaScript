/*
  You are given a string, s, and a list of words, words, that are all of the same length. 
  Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once 
  and without any intervening characters.

  Input: s = "barfoothefoobarman",    words = ["foo", "bar"]      Output: [0,9]
  Explanation: Substrings starting at index 0 and 9 are "barfoor" and "foobar" respectively.
  The output order does not matter, returning [9,0] is fine too.

  Input: s = "wordgoodgoodgoodbestword",    words = ["word","good","best","word"]     Output: []
*/

function findSubstring(s, words) {
  result = [];
  combineRec([...words]);
  const answer = [];
  for (let word of result) {
    let index = 0;
    while (index >= 0) {
      index = s.indexOf(word, index);
      if (index >= 0) answer.push(index++);
    }
  }
  return answer.sort();
}

function combineRec(list, answer='', str='') {
  answer += str; 
  if (list.length === 1) {
    result.push(answer + list[0]);
    return
  }

  for (let i=0; i<list.length; i++) {
    combineRec([...list.slice(0,i), ...list.slice(i+1)], answer, list[i])
  }
}

s = 'ABCDABABCD';
console.log(findSubstring(s, ['A', 'B', 'C', 'D']));

function combineWords(words) {
  if (words.length < 2) {
    return words;
  } else {
    var allAnswers = [];
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var shorterWords = [...words.slice(0, i), ...words.slice(i + 1, words.length)];
      var shortwordArray = combineWords(shorterWords);
      for (var j = 0; j < shortwordArray.length; j++) {
        allAnswers.push(word + shortwordArray[j]);
      }
    }
    return allAnswers;
  }
}

var findSubstring = function(s, words) {
  if (words.length < 1) return [];
  const wLen = words[0].length;
  const len = wLen * words.length;
  result = [];
  for (let i = 0; i < s.length-len+1; i++) {
    if (words.includes(s.substr(i, wLen))) {
      checkAllWords(s, [...words], i, wLen);
    }
  }
  return result;
}

function checkAllWords(s, words, i, wLen) {
  let j = i;
  while (words.length > 0) {
    const index = words.indexOf(s.substr(j, wLen));
    if (index < 0) return;
    words.splice(index, 1);
    j += wLen;
  }
  result.push(i);
}

console.log(findSubstring('wordgoodgoodgoodbestword', ["word","good","best","good"]));

//  Getting Permutation
function makePermutation(arr) {
  if (arr.length < 2) return arr[0];
  result = [];
  permutationRec(arr, '');
  return result;
}

function permutationRec(arr, answer) {
  if (arr.length < 2) {
    result.push(answer + arr[0]);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    permutationRec([...arr.slice(0, i), ...arr.slice(i+1)], answer + arr[i])
  }
}

console.log(makePermutation([1,2,3,4,5,6]));
