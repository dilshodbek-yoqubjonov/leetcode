var createCounter = function (init) {
  let a = init;
  return {
    increment() {
      a++;
      return a;
    },
    reset() {
      a = init;
      return a;
    },
    decrement() {
      a--;
      return a;
    },
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

// https://leetcode.com/problems/counter-ii
