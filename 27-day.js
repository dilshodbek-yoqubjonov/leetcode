var countConsistentStrings = function (allowed, words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let flag = true;
    for (let j = 0; j < word.length; j++) {
      if (allowed.indexOf(word[j]) === -1) { 
        flag = false;
        break;
      }
    }
    if (flag) {
      count++;
    }
  }
  return count;
};

console.log(
  countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])
); // 7

// https://leetcode.com/problems/count-the-number-of-consistent-strings

// Runtime
// 100 ms
// 100%
// Memory
// 42.7 MB
// 100%
