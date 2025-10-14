function createCounter() {
  let counter = 0;
  function counterFn() {
    counter++;
    return counter;
  }
  return counterFn;
}
counter = createCounter();
console.log(counter());
console.log(counter());
