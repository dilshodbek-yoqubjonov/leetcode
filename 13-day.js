// var argumentsLength = function (...args) {
//   return args.length;
// };

// console.log(argumentsLength(1, 2, 3, 4));

//https://leetcode.com/problems/return-length-of-arguments-passed

var buildArray = function (nums) {
  let result = [];
  nums.forEach((e) => {
    result.push(nums[e]);
  });
  return result;
};

console.log(buildArray([0, 2, 1, 5, 3, 4]));