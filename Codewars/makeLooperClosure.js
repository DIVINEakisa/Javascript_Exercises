function makeLooper(str) {
  let index = 0;
  return function () {
    let char = str[index];
    index = (index + 1) % str.length;
    return char;
  };
}
console.log(makeLooper("abc")());
