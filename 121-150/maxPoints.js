/*
  Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.
  Input: [[1,1],[2,2],[3,3]],                           Output: 3
  Input: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]],         Output: 4  [1,4], [2,3], [3,2], [4,1]

*/
function maxPoints(points) {
  const len = points.length;
  if (len < 3) return len;
  let ans = 0;
  for (let i = 0; i < len-ans-1; i++) {
    const sObj = {};
    let countSame = 1;
    for (let j = i + 1; j < len; j++) {
        if (isSame(points[i], points[j])) {
            countSame ++;
            continue;
        } 
        const slope = getSlope(points[i], points[j]);
        if (!sObj[slope]) sObj[slope] = [];
        sObj[slope].push(points[j]);
    }
    const num = getMax(sObj)
    if (ans < num + countSame) ans = num + countSame;
  }
  return ans;
}

function getMax(obj) {
    const keys = Object.keys(obj);
    if (keys.length < 1) return 0
    let max = 0;
    for (let k of keys) {
        max = Math.max(max, obj[k].length);
    }
    return max;
}
function getSlope(A, B) {
  if (A[0] === B[0]) return 'x' + A[0];
  if (A[1] === B[1]) return 'y' + A[1];
  return (A[1] - B[1]) / (A[0] - B[0]);
}

function isSame(A, B) {
  return (A[0] === B[0]) && (A[1] === B[1]);
}

P = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
console.log(maxPoints(P))
