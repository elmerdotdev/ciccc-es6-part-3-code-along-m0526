// toSorted - Similar to sort() but creates a new array with the sorted items

// Boomer way
const numbers = [1, 2, 3, 4, 5];
const numbersSorted = numbers.sort((a, b) => b - a);
console.log(numbers);
console.log(numbersSorted);

// Millenial + Gen Z way
const numbersB = [1, 2, 3, 4, 5];
const numbersBSorted = numbersB.toSorted((a, b) => b - a); // creates a new array
console.log(numbersB);
console.log(numbersBSorted);
