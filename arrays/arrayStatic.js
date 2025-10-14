function arrayStat(array) {
  let sum = 0;
  let max = 0;
  let average = 0;
  let min;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    count++;
    sum += array[i];
    if (array[i] < array[i + 1]) {
      max = array[i + 1];
    }
  }
  average = sum / count;
  return { sum, max, min, average };
}
console.log(arrayStat([1, 2, 3, 4, 5]));
