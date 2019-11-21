function romanToInt(str) {
  const R = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  const N = [1000, 500, 100, 50, 10, 5, 1]
  let answer = 0;
  for (let i=0; i<str.length-1; i++) {
    const idxA = R.indexOf(str[i]);
    const idxB = R.indexOf(str[i+1]);
    if (idxA > idxB) {
      answer -= N[idxA];
    } else {
      answer += N[idxA];
    }
  }
  const idx = R.indexOf(str[str.length-1]);
  return answer + N[idx];
}

var romanToInt = function(s) {
  const dict = { 'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1};
  let sum = 0, i = 0;
  for ( i ; i < s.length - 1; i++) {
    if (dict[s[i]] < dict[s[i+1]]) sum -= dict[s[i]];
    else sum += dict[s[i]];
  }
  return sum + dict[s[i]]
}

console.log(romanToInt('CMXCIX'));
