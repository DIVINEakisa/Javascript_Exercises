// Create a function that takes an object with string-number keys (e.g., "1", "2", "3")
// and array-of-character values. The function should remove duplicates so that:
// A character appears only in the array of the largest key.
// Within the same array, only the first occurrence of a character is kept.
// Test case 1:
// Input = {
//   "1": ["A", "B", "C"],
//   "2": ["A", "B", "D", "A"]
// }

// Output = {
//   "1": ["C"],
//   "2": ["A", "B", "D"]
// }
// Test case 2:
// Input ={
//   "1": ["X", "X", "Y", "Z"],
//   "2": ["Y", "X", "W"]
// }

// Output ={
//   "1": ["Z"],
//   "2": ["Y", "X", "W"]
// }
function ObjectString(obj) {
  let result = {};
  let values = Object.values(obj);
  let val;
  for (var i = 0; i < values.length; i++) {
    val = values[i];
    for (let j = 0; j < val.length; j++) {
      console.log(val[j]);
      return val[j] !== val[j] + 1 ? val[j] : false;
    }
  }
  return result;
}
console.log(
  ObjectString({
    1: ["X", "X", "Y", "Z"],
    2: ["Y", "X", "W"],
  })
);
