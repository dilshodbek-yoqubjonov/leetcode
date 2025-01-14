var addTwoPromises = async function (promise1, promise2) {
  console.log(
    (await promise1.then((result) => result)) +
      (await promise2.then((result) => result))
  );

  //   return a + b;
};

addTwoPromises(
  new Promise((resolve) => setTimeout(() => resolve(2), 20)),
  new Promise((resolve) => setTimeout(() => resolve(5), 60))
);

//https://leetcode.com/problems/add-two-promises/submissions
