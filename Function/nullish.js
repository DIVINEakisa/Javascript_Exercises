let user = "John";
console.log(user ?? "anonymous");

function returnSquare(num) {
  let oddNumber = num
    .filter((numb) => numb % 2 !== 0)
    .map((sqr) => Math.sqrt(sqr));
  return oddNumber;
}
console.log(returnSquare([24, 36, 8, 6, 4, 5]));
