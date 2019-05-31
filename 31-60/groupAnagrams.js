/*
  Given an array of strings, group anagrams together.

  Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
  Output:  [ ["ate","eat","tea"],  ["nat","tan"],  ["bat"] ]

  All inputs will be in lowercase.  The order of your output does not matter.
*/

//  Using Object
var groupAnagrams = function(strs) {
  if (strs.length < 2) return [strs];
  const dict = {};
  for (let str of strs) {
    const temp = str.split('').sort((a,b) => a>b);
    const key = temp.join('');
    if (!dict[key]) dict[key] = [];
    dict[key].push(str)
  }

  const answer = []
  for (let key in dict) {
    answer.push(dict[key]);
  }
  return answer;
}

strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
