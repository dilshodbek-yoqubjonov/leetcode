var mostWordsFound = function (sentences) {
  let a = 0;
  for (let i = 0; i < sentences.length; i++) {
    sentences[i] = sentences[i].split(" ");
    if (sentences[i].length > a) {
      a = sentences[i].length;
    }
  }

  return a;
};

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);

// 0
// ms
// Beats
// 100.00%
// Analyze Complexity

// Memory
// 50.89
// MB
// Beats
// 84.18%

//https://leetcode.com/problems/maximum-number-of-words-found-in-sentences
