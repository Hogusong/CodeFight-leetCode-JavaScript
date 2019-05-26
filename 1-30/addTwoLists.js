var addTwoNumbers = function(l1, l2) {
    let s1 = l1 ? l1.length-1 : -1;
    let s2 = l2 ? l2.length-1 : -1;
    let up = 0;
    let result = []
    while (s1 >= 0 || s2 >= 0) {
        const sum = (s1 >= 0 ? l1[s1] : 0) + (s2 >= 0 ? l2[s2] : 0) + up;
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
    if (up > 0) {
        result.push(up);
    }
    return result.reverse();
};

console.log(addTwoNumbers([1,9,5], [1, 5]));
console.log(addTwoNumbers([5], [5]));
console.log(addTwoNumbers([5], null));
