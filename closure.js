// CLOSURE - Allows functions to retain their variable values by returning a function using that variable

const multiplier = (factor) => {
  return (num) => num * factor; // return a function
};

const myMultiplier = multiplier(5); // set value of factor
// myMultiplier = (num) => num * 5
console.log(myMultiplier(2)); // 10 -> set value for num
console.log(myMultiplier(10)); // 50
console.log(myMultiplier(3)); // 15

function counter() {
  let count = 0;

  return {
    increment: function () {
      count++; // using count in the function allows js to remember that variable
    },
    decrement: function () {
      count--;
    },
    add: function (num) {
      count += num;
    },
    displayCount: function () {
      return count;
    },
  };
}

const myCoolCounter = counter(); // 0
myCoolCounter.increment(); // 1
myCoolCounter.increment(); // 2
myCoolCounter.increment(); // 3
myCoolCounter.add(5); // 8
myCoolCounter.decrement(); // 7
console.log(myCoolCounter.displayCount()); // 7

const myBoringCounter = counter(); // 0
myBoringCounter.increment(); // 1
myBoringCounter.add(4); // 5
myBoringCounter.decrement(); // 4
console.log(myBoringCounter.displayCount()); // 4

function todoList() {
  let todos = [];

  return {
    add: function (task) {
      todos.push(task);
    },
    clear: function () {
      todos = [];
    },
    displayTodos: function () {
      return todos;
    },
  };
}

const shoppingList = todoList(); // []
shoppingList.add('Buy healthy coffee');
shoppingList.add('Buy healthy greasy juicy burger');
console.log(shoppingList.displayTodos());

const choreList = todoList(); // []
choreList.add('Wash laundry');
choreList.add('Cook dinner');
console.log(choreList.displayTodos());
choreList.clear();
console.log(choreList.displayTodos());
