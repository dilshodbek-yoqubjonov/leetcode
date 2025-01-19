var compose = function (functions) {
  return function (x) {
    let a = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      a = functions[i](a);
    }
    return a;
  };
};

console.log(compose([(x) => x + 1, (x) => x * x, (x) => 2 * x], 4));

//https://leetcode.com/problems/function-composition/

// Runtime
//59
// ms
// Beats
// 95.02%

// Memory
// 52.35
// MB
// Beats
// 84.23%
