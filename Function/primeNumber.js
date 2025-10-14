function primeNumber(num, i = 2) {
  if (num <= 1) return false;
  if (i * i > num) return num;
  if (num % i === 0) return false;

  return primeNumber(num, i + 1);
}
console.log(primeNumber(13));
console.log(primeNumber(12));
