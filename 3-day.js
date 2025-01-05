var finalValueAfterOperations = function (operations) {
  let plus = 0;

  for (let i = 0; i < operations.length; i++) {
    plus += operations[i][0] === "+" || operations[i][1] === "+" ? 1 : -1;
  }
  return plus;
};

console.log(finalValueAfterOperations(["++X", "--X", "X--"]));

//https://leetcode.com/problems/final-value-of-variable-after-performing-operations
