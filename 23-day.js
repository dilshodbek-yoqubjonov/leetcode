var once = function (fn) {
  let a = true;
  return function (...args) {
    if (a) {
      a = false;
      return fn(...args);
    }
  };
};

// https://leetcode.com/problems/allow-one-function-call/

// Runtime
// 40
// ms
// Beats
// 97.94%

// Memory
// 48.90
// MB
// Beats
// 63.96%
