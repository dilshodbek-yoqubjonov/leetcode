function countPrimes(n) {
  if (n < 2) return 0;

  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime.filter(Boolean).length;
}

console.log(countPrimes(120)); // 30

//https://leetcode.com/problems/count-primes/description/
