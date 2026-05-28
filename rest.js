// REST PARAMETERS - Allows you to capture all args that do not have a dedicated parameter. All args will be stored in an array

function addAll(...numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

// Same thing but with an arrow function
const addAll2 = (...numbers) =>
  numbers.reduce((total, curr) => total + curr, 0);

console.log(addAll(2, 5));
console.log(addAll(3, 4, 10));
console.log(addAll(6));
console.log(addAll(2, 7, 8, 11, 15));

// You can only have one rest parameter and should always be at the end.
function introduce(firstname, lastname, ...hobbies) {
  return `Hello, my name is ${firstname} ${lastname}. I love ${hobbies.join(', ')}.`;
}

console.log(introduce('John', 'Smith', 'mining', 'skydiving', 'scubadiving'));
console.log(introduce('Jane', 'Doe', 'diamond-hunting', 'gold-carving'));
