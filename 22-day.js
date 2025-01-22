var mergeTwoLists = function (list1, list2) {
  let a = [...list1, ...list2];
  return a.sort();
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));


// beats 100% of js submissions


// https://leetcode.com/problems/merge-two-sorted-lists/