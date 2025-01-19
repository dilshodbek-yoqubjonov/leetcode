let input = [120, 20, 98, 50, 36, 49, 72];
function fn(nums) {
  let n = 49;
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    if (n <= nums[i] <= 122) {
      res.push(nums[i]);
    }
  }
  return res;
}

console.log(fn(input));
