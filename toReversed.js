// toReversed - Similar to reverse() but creates a new array with the reverse items

// Caveman way
const numbers = [1, 2, 3, 4, 5];
const numbersReversed = numbers.reverse(); // mutates the array - eww
console.log(numbers); // same arr
console.log(numbersReversed); // same arr

// Dancing robot way
const numbersB = [1, 2, 3, 4, 5];
const numbersBReversed = numbersB.toReversed(); // creates a new array
console.log(numbersB); // original array is still the same order
console.log(numbersBReversed); // reversed array
