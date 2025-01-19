var shuffle = function (nums, n) {
  let r = [];
  let i = 0;
  while (nums.length >= r.length + 1) {
    r.push(nums[i]);
    i++;
    r.push(nums[n]);
    n++;
  }
  return r;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));

//https://leetcode.com/problems/shuffle-the-array/
