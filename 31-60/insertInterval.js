/*
  Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
  You may assume that the intervals were initially sorted according to their start times.

  Input: intervals = [[1,3],[6,9]],   newInterval = [2,5]
  Output: [[1,5],[6,9]]

  Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]],  newInterval = [4,8]
  Output: [[1,2],[3,10],[12,16]]
  Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
*/

function insert(intervals, newInterval) {
  if (intervals.length < 1) return [newInterval];

  let answer = [], temp = [];
  let foundConnection = false;
  for (let i = 0; i < intervals.length; i++) {
    if (conntectedStatus(intervals[i], newInterval)) {
      temp.push(intervals[i]);
      foundConnection = true;
    } else {
      //  Found all overlaped. So need merge of those and return.
      if (foundConnection) {
        answer.push(merge([...temp, newInterval]));
        return [...answer, ...intervals.slice(i)];
      }
      //  Compare to finde insertion point.
      if (intervals[i][0] > newInterval[1]) {
        return [...answer, newInterval, ...intervals.slice(i)];
      }
      //  No overlap and didn't reach the insertion point yet.
      answer.push(intervals[i]);
    }
  }
  if (!foundConnection) answer.push(newInterval);
  if (temp.length > 0) answer.push(merge([...temp, newInterval]));
  return answer;
}


function conntectedStatus(A, B) {
  return (A[0] <= B[0] && B[0] <= A[1]) || (B[0] <= A[0] && A[0] <= B[1]);
}

function merge(group) {
  let min = group[0][0], max = group[0][1];
  for (let i = 1; i < group.length; i++) {
    min = Math.min(min, group[i][0]);
    max = Math.max(max, group[i][1]);
  }
  return [min, max];
}

group = [[1,2],[3,5],[6,7],[8,10],[12,16]];
arr = [4,8];
console.log(insert(group, arr));
group = [[1,3],[6,9]];
arr = [2,5];
console.log(insert(group, arr));
group = [[1,3]];
arr = [2,5];
console.log(insert(group, arr));
group = [[1,3]];
arr = [5,10];
console.log(insert(group, arr));
group = [];
arr = [5,10];
console.log(insert(group, arr));

//  Simple and Best solution (Time and Space).
function insertInterval(intervals, newInterval) {
  const len = intervals.length;
  if (len < 1) return [newInterval];

  let answer = [],  N = newInterval;
  for (let i = 0; i < len; i++) {
    const I = intervals[i];
    if (N[1] < I[0]) {
      return [...answer, N, ...intervals.slice(i)];
    }
    if (N[0] > I[1]) answer.push(I);
    else if (I[0] <= N[1] && N[1] <= I[1]) {
      N = [Math.min(I[0], N[0]), I[1]];
    } else if (I[0] <= N[0] && N[0] <= I[1]) {
      N = [I[0], Math.max(N[1], I[1])]
    }
  }
  return [...answer, N];
}


var insertInterval = function(intervals, newInterval) {
  if (intervals.length < 1) return [newInterval];
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][1] >= newInterval[0]) {
      if (intervals[i][0] > newInterval[1]) {
        return [...intervals.slice(0, i), newInterval, ...intervals.slice(i)];
      }
      intervals[i] = [Math.min(intervals[i][0], newInterval[0]), Math.max(intervals[i][1], newInterval[1])];
      return mergeIntervals(intervals, i);
    } 
  }
  intervals.push(newInterval);
  return intervals;
}

function mergeIntervals(intervals, i) {
  let curr = intervals[i];
  let j = i + 1;
  for (j; j < intervals.length; j++) {
    if (curr[1] >= intervals[j][0]) {
      curr[1] = Math.max(curr[1], intervals[j][1]);
    } else break;
  }
  return [...intervals.slice(0, i), curr, ...intervals.slice(j)];
}

var insert = function(intervals, newInterval) {
  if (intervals.length < 1) return [newInterval];

  let N = newInterval, index = -1;
  for (let i = 0; i < intervals.length; i++) {
    const I = intervals[i];
    if (I[1] < N[0]) index = i;
    else if (N[1] < I[0]) {
      return [...intervals.slice(0, index+1), N, ...intervals.slice(i)];
    } else {
      N[0] = I[0] < N[0] ? I[0] : N[0];
      N[1] = I[1] > N[1] ? I[1] : N[1];
    } 
  }
  return [...intervals.slice(0, index+1), N];
}
