// RECURSION - Call a function within itself to simulate a for loop
function countToFive(start) {
  if (start <= 5) {
    console.log(start);
    countToFive(start + 1);
  }
}

countToFive(1);

// A factorial is the result of multiplying a number with every number before it except 0
function factorial(num) {
  if (num <= 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

console.log(factorial(3)); // 6
console.log(factorial(5)); // 120

// Show the position's value based on the fibonacci sequence
const fibonacci = (num) =>
  num <= 1 ? num : fibonacci(num - 2) + fibonacci(num - 1);

console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(8)); // 21

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 - Sequence
// 0  1  2  3  4  5  6  7   8   9   10 - Position

// Reverse a string
function reverseString(word) {
  if (word === '') {
    return '';
  }

  return reverseString(word.slice(1)) + word[0];
}

console.log(reverseString('hello')); // olleh
console.log(reverseString('world')); // dlrow
