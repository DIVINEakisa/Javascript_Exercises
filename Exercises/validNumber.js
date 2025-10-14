function validatePhoneNumber(numString) {
  if (numString === "") {
    return numString;
  } else {
    return `${numString} is Number`;
  }
}
console.log(validatePhoneNumber("1234567890m"));
