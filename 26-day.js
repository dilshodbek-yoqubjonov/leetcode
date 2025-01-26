var isAnagram = function (s, t) {
  function sortString(str) {
    return str.split("").sort().join("");
  }
  return sortString(s) === sortString(t);
};

console.log(isAnagram("c'a#t", "cat#'")); // true

// https://neetcode.io/problems/is-anagram
