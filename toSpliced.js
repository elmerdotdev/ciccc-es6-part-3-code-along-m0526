// toSpliced - Similar to splice() but does not mutate the orignal array

// Barbaric way
const numbers = [1, 2, 3, 4, 5];
const numbersB = numbers.splice(1, 2);
console.log(numbers); // [1, 4, 5] - mutates original numbers array
console.log(numbersB); // [2, 3] - gives you the spliced items

// Sci-Fi way
const numbersC = [1, 2, 3, 4, 5];
const numbersD = numbersC.toSpliced(1, 2); // [1, 4, 5]
console.log(numbersC); // [1, 2, 3, 4, 5] - no emotional damage
console.log(numbersD); // [1, 4, 5] - gives you the remaining numbers in a new array
