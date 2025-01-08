async function sleep(millis) {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(millis);
    }, millis);
  });
}

console.log(sleep(1000));
