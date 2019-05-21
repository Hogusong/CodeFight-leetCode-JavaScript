var addTwoNumbers = function(l1, l2) {
  let s1 = l1.length-1;
  let s2 = l2.length-1;
  let up = 0;
  let result = []
  while (s1 > -1 && s2 > -1) {
      const sum = l1[s1] + l2[s2] + up;
      if (sum > 9) {
          result.push(sum - 10);
          up = 1;
      } else {
          result.push(sum);
          up = 0
      }
      s1--;
      s2--;
  }
  if (s1 > -1) {
      result = addRest(l1, s1, up, [...result])
  }
  if (s2 > -1) {
      result = addRest(l2, s2, up, [...result])
  }
  return result;
};

function addRest(arr, start, up, answer) {
  for (let i=start; i>-1; i--) {
      const sum = arr[i] + up;
      if (sum > 9) {
          answer.push(sum - 10);
          up = 1;
      } else {
          answer.push(sum);
          up = 0
      }
  }
  if (up > 0) {
      answer.push(up)
  }
  return answer;
}

console.log(addTwoNumbers([5], [5]));
