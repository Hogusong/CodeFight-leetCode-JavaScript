/*
  Given an array nums and a value val, remove all instances of that value in-place and
  return the new length.  Do not allocate extra space for another array, 
  you must do this by modifying the input array in-place with O(1) extra memory.
  The order of elements can be changed. It doesn't matter what you leave beyond the new length.

  Given nums = [3,2,2,3], val = 3,    
  return length = 2, with the first two elements of nums being 2.

  Given nums = [0,1,2,2,3,0,4,2], val = 2,   
  return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.
  Note that the order of those five elements can be arbitrary.

  Clarification:
  Confused why the returned value is an integer but your answer is an array?
  Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

  Internally you can think of this:
  // nums is passed in by reference. (i.e., without making a copy)
  int len = removeElement(nums, val);
  // any modification to nums in your function would be known by the caller.
  // using the length returned by your function, it prints the first len elements.
  for (int i = 0; i < len; i++) {
      print(nums[i]);
  }
*/

function removeElement(nums, val) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0] != val ? 1 : 0;

  let index = nums.length-1, ending = null;
  for (let j=0; j<=index; j++) {
    if (nums[j] != val) {
      ending = j;
    } else {
      for (let i=index; i>j; i--) {
        if (nums[i] === val) continue;
        [nums[j], nums[i]] = [nums[i], nums[j]];
        index = i - 1;
        ending = j;
        break;
      }
    }
  }
  ending = (ending || ending === 0) ? ending + 1 : 0;
  return nums.slice(0, ending);
}

arr = [3,2,4,1,3,1,5];
val = 3;
console.log(removeElement([...arr], val));

function removeValue(nums, val) {
  let n = nums.length;
  for (let i=0; i<n; i++) {
    if (nums[i] === val) {
      [nums[i], nums[n-1]] = [nums[n-1], nums[i]];
      n--;
      i--;
    }
  }
  return nums.slice(0, n);
}

console.log(removeValue([...arr], val));

//  Keep origin order.
function removeElements(nums, val) {
  if (nums.length < 1) return 0;

  let index = null;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val && index === null)  index = i;
    if (nums[i] != val && index != null) {
      nums[index++] = nums[i];
    }
  }
  index === null ? nums.length : index;
  return nums.slice(0, index);
}

console.log(removeElements([...arr], val));

function removeElem(nums, val) {
  if (nums.length < 1) return 0;
  let removed = 0,  n = nums.length - 1;
  let index = nums.indexOf(val);
  while (index >= 0) {
    nums[index] = nums[n - removed];
    nums[n - removed] = null;
    index = nums.indexOf(val);
    removed ++;
  }
  // return n-removed+1;
  return nums.slice(0, n-removed+1);
}

console.log(removeElem([...arr], val));
