// var addTwoPromises = async function (promise1, promise2) {
//   console.log(
//     (await promise1.then((result) => result)) +
//       (await promise2.then((result) => result))
//   );

//   //   return a + b;
// };

// addTwoPromises(
//   new Promise((resolve) => setTimeout(() => resolve(2), 20)),
//   new Promise((resolve) => setTimeout(() => resolve(5), 60))
// );

//https://leetcode.com/problems/add-two-promises/submissions

var plusOne = function (digits) {
  digits = digits.splice("").join(""); // convert all to string number

  digits = BigInt(digits); // convert it to BigInt
  digits = digits + BigInt(1); // add 1 bigInt num to BigInt
  digits = digits.toString(); // convert it to string
  digits = digits.split("").map(Number); // convert to string numers array then to numbers
  return digits; // return result
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

//https://leetcode.com/submissions/detail/1508192478/ with Solution
