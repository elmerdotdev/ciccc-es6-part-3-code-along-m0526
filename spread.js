// SPREAD OPERATOR - Allows you to copy elements (array) or properties and methods (objects)

/// Arrays
const numbersA = [1, 2, 3];
const numbersB = [4, 5, 6];
const numbersC = [100, ...numbersB, 200, ...numbersA, 300];
console.log(numbersC); // [100, 4, 5, 6, 200, 1, 2, 3, 300]

const numbersD = [2, 4, 6];
const numbersDCopy = [...numbersD]; // spread the elements of numbersD
numbersDCopy.push(8);
console.log(numbersD);
console.log(numbersDCopy);

function copyArray(...arr) {
  // rest -> spread
  const copiedArr = [...arr, { copiedOn: new Date() }];
  return copiedArr;
}

console.log(copyArray(1, 2, 3));
console.log(copyArray('John', 'Jane'));

const fruits = ['apple', 'banana', 'orange'];
const modifiedFruits = [...fruits, 'mango']; // similar to push
console.log(modifiedFruits);

/// Objects
const studentTemplate = {
  college: 'CICCC',
  address: 'Burnaby',
};

const studentA = { ...studentTemplate, name: 'Miu', age: 25 }; // copy over the props and methods of studentTemplate
const studentB = { ...studentTemplate, name: 'Miru', age: 25 };
const studentC = {
  ...studentTemplate,
  name: 'Kazi',
  age: 25,
};

console.log(studentA);
console.log(studentB);
console.log(studentC);

const employees = [
  { id: 1, name: 'John', isEmployed: true },
  { id: 2, name: 'Jane', isEmployed: false },
  { id: 3, name: 'Joe', isEmployed: false },
];

const getHired = (arr, id) =>
  arr.map((employee) =>
    employee.id === id
      ? {
          ...employee, // id, name, isEmployed
          isEmployed: true, // update isEmployed status of target id
        }
      : employee,
  );

const currEmployees = getHired(employees, 2);
console.log(currEmployees);
// [
//   { id: 1, name: "John", isEmployed: true },
//   { id: 2, name: "Jane", isEmployed: true }, <-- becomes true
//   { id: 3, name: "Joe", isEmployed: false }
// ]
