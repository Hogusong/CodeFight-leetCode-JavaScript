const pattern = "ABBA";
const text = "ABBABBABABABBA";

function findPattern(pattern, target) {
  const dict = {} ;
  const p_len = pattern.length;
  for (let i=0; i<target.length-p_len+1; i++) {
    const str = target.substr(i, p_len);
    if (!dict[str]) {  dict[str] = []  } 
    const len = dict[str].length;
    if (len === 0 || dict[str][len-1] + p_len <= i) {
      dict[str].push(i);
    }
  }
  return dict[pattern] ? dict[pattern] : [];
}

console.log(findPattern(pattern, text));
