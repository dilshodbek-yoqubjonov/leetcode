var expect = function (val) {
  return {
    toBe: function (int) {
      if (int !== val) {
        throw new Error("Not Equal");
      } else {
        return true;
      }
    },
    notToBe: function (int) {
      if (int === val) {
        throw new Error("Equal");
      } else {
        return true;
      }
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

//https://leetcode.com/problems/to-be-or-not-to-be/
