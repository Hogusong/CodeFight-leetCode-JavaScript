/*
    Validate if a given string can be interpreted as a decimal number.
    Some examples:
        "0" => true
        " 0.1 " => true
        "abc" => false
        "1 a" => false
        "2e10" => true
        " -90e3   " => true
        " 1e" => false
        "e3" => false
        " 6e-1" => true
        " 99e2.5 " => false
        "53.5e93" => true
        " --6 " => false
        "-+3" => false
        "95a54e53" => false

    Note: It is intended for the problem statement to be ambiguous. You should gather all requirements up front before implementing one. However, here is a list of characters that can be in a valid decimal number:

    Numbers 0-9
    Exponent - "e"
    Positive/negative sign - "+"/"-"
    Decimal point - "."
    Of course, the context of these characters also matters in the input.
*/

var isNumber = function(s) {
  s = s.trim();
  if (s.length < 1) return false;
  if (s.length < 2) return '0123456789'.includes(s[0]);
  if (!'0123456789-+.'.includes(s[0])) return false;
  if (hasMoreThanOne(s, '.-+')) return false;
    
  let hasE = false;
  for (let i = 1; i < s.length; i++) {
    if (!'0123456789e.-+'.includes(s[i])) return false;
    if ((s[i] == '-' || s[i] == '+') && (i + 1 >= s.length || s[i-1] != 'e')) return false; 
    if (s[i] == '.') {
      if (eCount > 0) return false;
      if (i + 1 >= s.length) return '0123456789'.includes(s[i-1]);
      if (!'0123456789e'.includes(s[i+1])) return false;
    } else if (s[i] == 'e') {
      if (hasE) return false;
      if (i < 2 && s[0] == '.') return false;
      if (!'0123456789.'.includes(s[i-1])) return false;
      if (i + 1 >= s.length) return false;
      if (!'0123456789+-'.includes(s[i+1])) return false;
      hasE = true;
    }
  }
  return true;
};

function hasMoreThanOne(s, str) {
  for (let c of str) {
    let index = s.indexOf(c);
    if (index >= 0) {
      index = s.indexOf(c, index+1);
      if (index > 0 && s[index-1] != 'e') return true;
    }
  }
  return false
}