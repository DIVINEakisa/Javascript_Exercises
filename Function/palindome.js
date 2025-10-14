function Palindome(strng) {
  let strPal = strng.split("").reverse().join("");
  if (strPal === strng) {
    return true;
  } else {
    return false;
  }
}
console.log(Palindome("madam"));
console.log(Palindome("nurse run"));
