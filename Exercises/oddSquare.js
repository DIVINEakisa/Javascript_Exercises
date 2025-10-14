function oddSquare(num) {
  let odd = num
    .filter((n) => {
      return n % 2 !== 0;
    })
    .map((a) => Math.sqrt(a));
  return odd;
}
console.log(oddSquare([24, 36, 8, 6, 4, 5]));
