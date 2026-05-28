// toString - Converts an object or variable into a string
const numbers = [1, 2, 3];
console.log(numbers.toString()); // "1,2,3"

const isRaining = false;
console.log(isRaining.toString()); // "false"

const age = 25;
console.log(age.toString()); // "25"
console.log(String(age)); // "25" - same thing / new way / cool way B-)
const myYearString = '2026';
console.log(Number(myYearString)); // 2026

const person = { name: 'John' };
console.log(person.toString()); // [object Object]

const stringObj = JSON.stringify(person); // converts object to string
console.log(stringObj); // { "name": "John" } - string
console.log(JSON.parse(stringObj)); // { name: "John"} - object
