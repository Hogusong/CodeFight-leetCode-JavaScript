/*
  Given an array of words and a width maxWidth, format the text such that 
  each line has exactly maxWidth characters and is fully (left and right) justified.

  You should pack your words in a greedy approach; that is, pack as many words as you can in each line. 
  Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

  Extra spaces between words should be distributed as evenly as possible. 
  If the number of spaces on a line do not divide evenly between words, 
  the empty slots on the left will be assigned more spaces than the slots on the right.

  For the last line of text, it should be left justified and no extra space is inserted between words.

  Note: A word is defined as a character sequence consisting of non-space characters only.
        Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
        The input array words contains at least one word.

  words = ["This", "is", "an", "example", "of", "text", "justification."],  maxWidth = 16
  Output:  [  "This    is    an",
              "example  of text",
              "justification.  "   ]

  words = ["What","must","be","acknowledgment","shall","be"],       maxWidth = 16
  Output:  [  "What   must   be",
              "acknowledgment  ",
              "shall be        "   ]
  Explanation: Note that the last line is "shall be    " instead of "shall     be",
              because the last line must be left-justified instead of fully-justified.
              Note that the second line is also left-justified becase it contains only one word.

  words = ["Science","is","what","we","understand","well","enough","to","explain",
          "to","a","computer.","Art","is","everything","else","we","do"]
  maxWidth = 20
  Output:  [  "Science  is  what we",
              "understand      well",
              "enough to explain to",
              "a  computer.  Art is",
              "everything  else  we",
              "do                  "  ]
*/

function fullJustify(words, maxWidth) {
  const answer = [];
  let size = 0, temp = [];
  for (let w of words) {
    if (size + w.length > maxWidth) {
      answer.push(makeJustify(temp, maxWidth));
      temp = [];
      size = 0
    } 
    temp.push(w);
    size += w.length + 1;
  }
  const str = temp.join(' ')
  answer.push(str + ' '.repeat(maxWidth - str.length));
  return answer;
}

function makeJustify(temp, max) {
  const count = temp.length;
  if (count === 1) return temp[0] + ' '.repeat(max-temp[0].length);
  let tot_width = 0;
  const spaces = [];
  for (let w of temp) {
    tot_width += w.length;
    spaces.push(' ');
  }
  spaces.pop();
  let remain = max - tot_width - count + 1;
  while (remain > 0) {
    for (let j = 0; j < spaces.length && remain > 0; j++, remain--) {
      spaces[j] += ' '
    }
  }
  return combine(temp, spaces);
}

function combine(W, S) {
  let str = '';
  for (let i = 0; i < S.length; i++) {
    str += W[i] + S[i];
  }
  return str + W[W.length - 1];
}

words = ["What","must","be","acknowledgment","shall","be"];
words = ["What","must"];
maxWidth = 16;
console.log(fullJustify(words, maxWidth));

var fullJustify = function(words, maxWidth) {
  let ans = [], strs = [], width = 0;
  for (let w of words) {
    if (width + w.length > maxWidth) {
      ans.push(makeLine(strs, maxWidth));
      strs = [w];
      width = w.length + 1;
    } else {
      width += w.length + 1;
      strs.push(w);
    }
  }
  if (strs.length > 0) {
    const s = strs.join(' ');
    ans.push(s + ' '.repeat(maxWidth - s.length));
  }
  return ans;
}

function makeLine(strs, maxWidth) {
  if (strs.length < 2) return strs[0] + ' '.repeat(maxWidth - strs[0].length);
  const spaceCount = strs.length - 1;
  for (let s of strs) maxWidth -= s.length;
  const x = Math.floor(maxWidth / spaceCount);
  let r = maxWidth % spaceCount;
  let str = '';
  for (let s of strs) {
    str += s + ' '.repeat(x) + (r > 0 ? ' ' : '');
    r--;
  }
  return str.trim();
}