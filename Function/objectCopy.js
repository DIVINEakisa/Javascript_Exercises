let person = {
  firstname: "John",
  lastName: "Doe",
};
let p1 = {
  ...person,
};
let p2 = Object.assign({}, person);
let p3 = JSON.parse(JSON.stringify(person));
console.log(p3);
console.log(p2);
console.log(p1);
