/*
  Write a function to find the longest common prefix string amongst an array of strings.

  If there is no common prefix, return an empty string "".

  Input: ["flower","flow","flight"]     Output: "fl"
  Input: ["dog","racecar","car"]        Output: ""

  Note:  All given inputs are in lowercase letters a-z.
*/

function commonPrefixBF(strs) {
  if (!strs || strs.length < 1) return '';
  if (strs.length === 1) return strs[0];
  let prefix = strs[0];
  for (let str of strs) {
    if (prefix.length > str.length) {
        prefix = prefix.substr(0, str.length);
    }
    for (let i=0; i<str.length; i++) {
      if (prefix[i] != str[i]) {
        prefix = prefix.substr(0, i);
        break;
      }
    }
  }
  return prefix;
}

console.log(commonPrefixBF(["flower","flow","flight"]));

// Horizontal scanning
function commonPrefixHS(strs) {
  if (!strs || strs.length < 1) return '';
  if (strs.length === 1) return strs[0];
  let prefix = strs[0];
  for (let i=1; i<strs.length; i++) {
    if (prefix.length === 1 && strs[i].indexOf(prefix) != 0) return '';
    while (strs[i].indexOf(prefix) != 0) {
      if (prefix.length === 1) return '';
      prefix = prefix.substr(0, prefix.length-1);          
    }
  }
  return prefix;
}

console.log(commonPrefixHS(["c","acc","ccc"]));

// Sliding Window
function commonPrefixSW(strs) {
  if (!strs || strs.length < 1) return '';
  if (strs.length === 1) return strs[0];
  let prefix = strs[0];
  let end = prefix.length;
  for (let j=1; j<strs.length; j++) {
    if (end > strs[j].length) {
        end = strs[j].length;
    }
    for (let i=0; i<strs[j].length; i++) {
      if (i >= end) {
        break
      } else if (prefix[i] != strs[j][i]) {
        end = i;
        break;
      }
    }
  }
  return prefix.substr(0, end);
}

console.log(commonPrefixSW(["flower","flow","flight"]));
