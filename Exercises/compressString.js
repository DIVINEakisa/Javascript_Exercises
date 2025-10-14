function compressString(str) {
  let countStr = str.split("");
  let result = "";
  let count = 1;
  for (let i = 0; i <= countStr.length; i++) {
    if (countStr[i] === countStr[i + 1]) {
      count++;
    } else {
      result += countStr[i] + count;
      count = 1;
    }
  }
  return result;
}
console.log(compressString("AAAABBBCCDAA")); //should return "A4B3C2D1A2"
