/*
  Given a string S and a string T, 
  find the minimum window in S which will contain all the characters in T in complexity O(n).

  Input: S = "ADOBECODEBANC", T = "ABC"
  Output: "BANC"

  If there is no such window in S that covers all characters in T, return the empty string "".
  If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
*/

//  Stupid way but it works.
function minWindow(s, t) {
  if (s.length < t.length) return '';
  if (s === t) return s;
  const loc = {}, count = {};
  let idx = 0
  for (let c of t) {
    if (!count[c]) count[c] = 0;
    count[c] ++;
  }

  for (let char of t) {
    temp = loc[char];
    const point = temp ? temp[temp.length-1] +1  : 0;
    idx = s.indexOf(char, point);
    if (idx > -1) {
      if (!loc[char]) loc[char] = [];
      loc[char].push(idx);
    } else return '';
  }

  for (let key in loc) {
    const v = loc[key]
    let point = v[v.length - 1] + 1;
    while (point >= 0) {
      const idx = s.indexOf(key, point);
      if (idx > -1) {
        loc[key].push(idx);
        point = idx + 1;
      } else point = -1;
    }
  }

  let container = [];
  for (let key in loc) {
    const temp = possibleSets(loc[key], count[key]);
    container.push(temp);
  }

  container = combine(container);

  let minWidth = s.length, range = [0, s.length-1];
  for (let C of container) {
    const min = Math.min(...C);
    const max = Math.max(...C);
    if (minWidth > max - min) {
      minWidth = max - min;
      range = [min, max];
    }
  }
  return s.slice(range[0], range[1]+1);
}

function combine(T) {
  let ans = [[]];
  for (let group of T) {
    const temp = [...ans];
    ans = [];
    for (let g of group) {
      for (let t of temp) {
        ans.push([...t, ...g])
      }
    }
  }
  return ans;
}

function possibleSets(arr, n) {
  if (arr.length === n) return [arr];
  let ans = [[]];
  for (let i = 0; i < n; i++) {
    const temp = [...ans];
    ans = [];
    for (let t of temp) {
      for (let e of arr) {
        if (!t.includes(e)) ans.push([...t, e]);
      }
    }
  }
  return ans;
}

S = "ADOBECAODEBANC";
T = "ABAC";
// S = "ask_not_what_your_country_can_do_for_you_ask_what_you_can";
// T = "ask_country";
console.log(minWindow(S, T));       //  "sk_not_what_your_c"

//  Sliding Window
function minWindowSliding(s, t) {
  if (s.length == 0 || t.length == 0) return "";
  
  // Dictionary for keeping a count of all the unique characters in t.
  const dictT = {};
  for (let i = 0; i < t.length; i++) {
      dictT[t[i]] = dictT[t[i]] ? dictT[t[i]] + 1: 1;
  }
  
  let uniqueInT = Object.keys(dictT).length;  //  num of unique characters in t
  let l = 0,  r = 0                             //  Left and Right pointer
  let uniqueInWin = 0;                      //  To keep track num of unique characters
  //  To keep a count of all the unique characters in the current window.
  let dictWin = {};
  //  To keep [window length, left, right]
  const ans = [-1, 0, 1];

  while (r < s.length) {
    let c = s[r];
    //  Add a character from the right to the window
    if (dictT[c]) {
      dictWin[c] = dictWin[c] ? dictWin[c] + 1 : 1;
      if (dictWin[c] === dictT[c]) uniqueInWin++;
    }

    // Try and contract the window till the point where it ceases to be 'desirable'.
    while(l <= r && uniqueInWin === uniqueInT) {
      c = s[l];
      if (ans[0] < 0 || r - l + 1 < ans[0]) {
        ans[0] = r - l + 1;
        ans[1] = l;
        ans[2] = r;
      }
      // Left pointer is no longer a part of the window.
      l++;
      if (dictT[c]) {
        dictWin[c] = dictWin[c] - 1;
        if (dictT[c] && dictWin[c] < dictT[c]) uniqueInWin--;
      }
    }
    r++;      // Keep expanding the window once we are done contracting.
  }
  
  return ans[0] == -1 ? '' : s.substring(ans[1], ans[2] + 1);
}

console.log(minWindowSliding(S, T));
