/*
  Given a string containing only digits, restore it by returning all possible valid IP address combinations.

  Input: "25525511135"
  Output: ["255.255.11.135", "255.255.111.35"]
*/

function restoreIpAddresses(s) {
  const size = s.length;
  if (size < 4 || size > 12) return [];
  return  searchIPAdress(s, size);
}

function searchIPAdress(str, size) {
  let result = [], newStr = '';
  for (let i = 1; i < size - 2; i++) {
    for (let j = i + 1; j < size - 1; j++) {
      for (let k = j + 1; k < size; k++) {
        newStr = str.substring(0, k) + '.' + str.substring(k);
        newStr = newStr.substring(0, j) + '.' + newStr.substring(j);
        newStr = newStr.substring(0, i) + '.' + newStr.substring(i);
        if (isValidAddress(newStr)) result.push(newStr);
      }
    }
  }
  return result;
}

function isValidAddress(str) {
  const S = str.split('.');
  for (let s of S) {
    const i = +s;
    if (s.length > 3 || i < 0 || i > 255) return false;
    if (s.length > 1 && s[0] === '0') return false;
  }
  return true;
}

console.log(restoreIpAddresses('25525511135'));
console.log(restoreIpAddresses('12515221125'));
