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


// Vertical Scanning
function commonPrefixVS(strs) {
  if (strs == null || strs.length == 0) return "";
  let prefix = strs[0];
  for (let i = 0; i < prefix.length ; i++) {
      const c = prefix[i];
      for (let j = 1; j < strs.length; j ++) {
          if (!strs[j][i] || strs[j][i] != c)
              return prefix.substring(0, i);             
      }
  }
  return prefix;
}

console.log(commonPrefixVS(["flower","floa","flight"]));

// Divide and Conquer
function commonPrefixDC(strs) {
  if (!strs || strs.length < 1) return '';
  if (strs.length === 1) return strs[0];
  const median = Math.floor(strs.length / 2);
  const left = commonPrefixDC(strs.slice(0, median));
  const right = commonPrefixDC(strs.slice(median));
  let end = Math.min(left.length, right.length) ;
  for (let i=0; i<end; i++) {
    if (left[i] != right[i]) {
      end = i;
    }
  }
  return left.substr(0, end)
}

console.log(commonPrefixDC(["flower","floa","flight"]));

// Divide, Conquer and Sliding Window
function commonPrefixDCS(strs) {
  if (!strs || strs.length < 1) return '';
  if (strs.length === 1) return strs[0];
  return findCommonPrefix(strs, 0, strs.length-1);
}

function findCommonPrefix(strs, s, e) {
  if (s === e) return strs[s];
  const median = Math.floor((e + s) / 2);
  const left = findCommonPrefix(strs, s, median);
  const right = findCommonPrefix(strs, median+1, e);
  let end = Math.min(left.length, right.length) ;
  for (let i=0; i<end; i++) {
    if (left[i] != right[i]) {
      end = i;
    }
  }
  return left.substr(0, end)  
}

console.log(commonPrefixDCS(["flower","floa","flight"]));
console.log(commonPrefixDCS(["caa","","a","acb"]));

// Divide and Brute Force
function commonPrefixDBF(strs) {
  if (!strs || strs.length < 1) return '';
  if (strs.length === 1) return strs[0];
  if (strs[0] === '') return '';

  let median = Math.floor(strs[0].length / 2);
  let found = median > 0 ? false : true;
  let prefix = strs[0][0];
  while (!found) {
    found = true;
    prefix = strs[0].substr(0, median);
    for (let i=1; i<strs.length; i++) {
      if (strs[i].indexOf(prefix) != 0) {
        found = false;
        median = Math.floor(median / 2);
        break;
      }
    }
  }
  while(found) {
    median++;
    prefix = strs[0].substr(0, median);
    for (let i=1; i<strs.length; i++) {
      if (strs[i].indexOf(prefix) != 0) {
        found = false;
        break;
      }
    }
    if (median === strs[0].length) {
      return found ? strs[0] : strs[0].substr(0, median-1);
    }
  }
  return strs[0].substr(0, median-1);
}

console.log(commonPrefixDBF(["flower","floa","flight"]));
console.log(commonPrefixDBF(["caa","","a","acb"]));
console.log(commonPrefixDBF(["aa","ab"]));

function longestCommon(strs) {
  if (strs.length < 1 || strs[0] === '') return '';
  if (strs.length === 1) return strs[0];

  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    prefix = getCommonPrefix(prefix, strs[i]);
    if (prefix === '') return '';
  }
  return prefix;
}

function getCommonPrefix(p, str) {
  if (p.length > str.length) return getCommonPrefix(p.substring(0, str.length), str)
  if ( p === str.substring(0, p.length)) return p;
  let end = p.length - 1;
  while (end > 0) {
    if (p.substring(0, end) === str.substring(0, end)) return p.substring(0, end);
    end --;
  }
  return '';
}

console.log(longestCommon(["flower","floa","flight"]));
console.log(longestCommon(["caa","","a","acb"]));
console.log(longestCommon(["aa","ab"]));
