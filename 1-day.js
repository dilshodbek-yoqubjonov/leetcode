var findWordsContaining = function (words, x) {
  let b = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      b.push(i);
    }
  }
  return b;
};

console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a"));

//https://leetcode.com/problems/find-words-containing-character
