// slice - Select a range of elements from an array by specifying the start and end indexes. Does not mutate the original array. Yay!
const fruits = ['apple', 'banana', 'orange', 'mango', 'grapes'];
const selected = fruits.slice(1, 3); // selects index 1 and 2 only
console.log(fruits);
console.log(selected);

const everythingElse = fruits.slice(2); // grab everything from index 2 and onwards
console.log(everythingElse);
