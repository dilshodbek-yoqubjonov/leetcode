function chunk(arr, size) {
  let ans = [];
  for (let i = 0; i < arr.length; i = i + size) {
    let subarr = [];
    for (let j = i; j < i + size && j < arr.length; j++) {
      subarr.push(arr[j]);
    }
    ans.push(subarr);
  }
  return ans;
}

console.log(chunk([1, 9, 6, 3, 2], 9));
