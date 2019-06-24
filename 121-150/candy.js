/*
  There are N children standing in a line. Each child is assigned a rating value.
  You are giving candies to these children subjected to the following requirements:

  Each child must have at least one candy.
  Children with a higher rating get more candies than their neighbors.
  What is the minimum candies you must give?

  Input: [1,0,2]        Output: 5
  Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.

  Input: [1,2,2]        Output: 4
  Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
               The third child gets 1 candy because it satisfies the above two conditions.
*/

function giveCandy(ratings) {
  const candies = [];
  const len = ratings.length;
  for (let i = 0; i < len; i++) candies[i] = 1;
  let flag = true;
  let sum = 0;
  while (flag) {
    flag = false;
    for (let i = 0; i < len; i++) {
      if (i != len - 1 && ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
        candies[i] = candies[i + 1] + 1;
        flag = true;
      }
      if (i > 0 && ratings[i] > ratings[i - 1] && candies[i] <= candies[i - 1]) {
        candies[i] = candies[i - 1] + 1;
        flag = true;
      }
    }
  }
  for (let candy of candies) {
    sum += candy;
  }
  return sum;
}

ratings = [3,4,3,2,1,2,6,4,3,1]
console.log(giveCandy(ratings));
