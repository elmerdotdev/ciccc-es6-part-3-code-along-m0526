// concat - Concatenates/combines different data types
const word1 = 'hello';
const word2 = 'world';
const word3 = 'again';
console.log(word1.concat(word2, word3)); // helloworldagain
console.log(word1 + word2 + word3); // same result
console.log(`${word1} ${word2} ${word3}`); // Hip way!

const numbersA = [1, 2, 3];
const numbersB = [4, 5, 6];
console.log(numbersA.concat(numbersB)); // [1, 2, 3, 4, 5, 6]
console.log([...numbersA, ...numbersB]); // same result but more hip!
