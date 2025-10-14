function convertNullableValues(obj) {
  let newkey = {};
  for (let nu in obj) {
    newkey[nu] = obj[nu] === null || obj[nu] === undefined ? 0 : obj[nu];
  }
  return newkey;
}
console.log(convertNullableValues({ name: "Akisa", age: null }));
console.log(convertNullableValues({ name: undefined, age: 20 }));
console.log(convertNullableValues({ name: "Igihozo", age: 21 }));
