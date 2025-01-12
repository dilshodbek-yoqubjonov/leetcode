function isPalindrome(s) {
  let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, ""); // removes all not letter and not number symbols

  let reversed = cleaned.split("").reverse().join("");

  return cleaned === reversed;
}

console.log(isPalindrome("hello2x world2x;"));

// https://leetcode.com/problems/valid-palindrome
