function count(n) {
  let fact = 1;
  let num;
  for (var i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact.toString();
}
//console.log(count(5));
console.log(count(50));
