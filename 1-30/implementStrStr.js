/*
    Return the index of the first occurrence of needle in haystack, or -1 
    if needle is not part of haystack.

    Input: haystack = "hello", needle = "ll"      Output: 2
    Input: haystack = "aaaaa", needle = "bba"     Output: -1
*/

var strStr = function(haystack, needle) {
  if (needle.length > haystack.length) return -1;
  if (needle == '' || needle == haystack) return 0;
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack[i] == needle[0]) {
      if (haystack.substr(i, needle.length) == needle) return i
    }
  }
  return -1;
};        
