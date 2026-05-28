// split - Breaks a string into an array depending on the separator argument
const message = 'Hello World Again!';
console.log(message.split('')); // [H,e,l,l,o,' ',W,o,r,l,d,' ',A,g,a,i,n,!]
console.log(message.split(' ')); // [Hello, World, Again]
console.log(message.split('o')); // [Hell,' ', W, 'rld Again!']

const messageB = 'Remove=these=equal=signs';
const messageArr = messageB.split('='); // [Remove, these, equal, signs]
console.log(messageArr.join(' ')); // Remove these equal signs
