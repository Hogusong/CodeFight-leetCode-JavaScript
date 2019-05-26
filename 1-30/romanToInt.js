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

console.log(romanToInt('CMXCIX'));
