function curry(...a) {
  return function (b) {
    return a + b;
  };
}
console.log(curry(2)(3));
console.log(curry(9, 3));
console.log(curry(9));
