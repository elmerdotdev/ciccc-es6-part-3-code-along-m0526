// SET - Similar to arrays but can only cotain unique values. It is a Set object.
const numbers = [1, 3, 5, 3, 6, 8, 5];

const uniqueNumSet = new Set(numbers); // removes duplicates and converts to a Set object
const uniqueNumArr = [...uniqueNumSet]; // converts a Set back to an array

console.log(uniqueNumArr); // [1, 3, 5, 6, 8]

const names = new Set(['John', 'Jane', 'Joe']);
names.add('Jack'); // similar to array's push
names.add('Charlie');
names.delete('Charlie'); // kinda similar to indexOf + splice
console.log(names);
names.clear(); // clears the set
console.log(names);

if (names.has('Jane')) {
  // similar to array's includes() method
  console.log('Jane is there!');
} else {
  console.log("Jane is not there :'(");
}
