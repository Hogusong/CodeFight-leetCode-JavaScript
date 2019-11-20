/*
  Given a collection of intervals, merge all overlapping intervals.

  Input: [[1,3],[2,6],[8,10],[15,18]],     Output: [[1,6],[8,10],[15,18]]
  Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

  Input: [[1,4],[4,5]],      Output: [[1,5]]
  Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/

function merge(intervals) {
  const size = intervals.length;
  if (size < 2) return intervals;

  const answer = [];
  intervals = intervals.sort((a,b) => a[0] - b[0]);
  let temp = [...intervals[0]];
  for (let i = 1; i < size; i++) {
    if (temp[temp.length-1] >= intervals[i][0]) {
      temp = [Math.min(temp[0], intervals[i][0]), Math.max(temp[1], intervals[i][1])];
    } else {
      answer.push(temp);
      temp = intervals[i];
    }
  }
  answer.push(temp);
  return answer;
}

arr = [[1,3],[2,6],[8,10],[15,18]];
arr = [[3,6],[0,2],[1,4]];
console.log(merge(arr));

var merge = function(intervals) {
  if (intervals.length < 1) return []
  intervals = intervals.sort((a,b) => a[0] - b[0]);
  let ans = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const last = ans[ans.length-1];
    if (intervals[i][0] > last[1]) {
      ans.push(intervals[i]);
    } else {
      ans[ans.length-1] = [last[0], Math.max(last[1], intervals[i][1])];
    }
  }
  return ans;
}
