function sortArray(arr) {
  let sorted = arr
    .map((word) => word.split("").reverse().join(""))
    .sort((a, b) => {
      return a.localeCompare(b);
    });
  return sorted;
}
console.log(sortArray(["banana", "date", "string"]));
