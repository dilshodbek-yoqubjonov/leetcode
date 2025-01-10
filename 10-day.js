var scoreOfString = function (s) {
  let sum = 0;
  for (let i = 0; i < s.length - 1; i++) {
    sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
  }
  return sum;
};

console.log(scoreOfString("hello"));

//https://leetcode.com/problems/score-of-a-string/

/*The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111. 
So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13. */
