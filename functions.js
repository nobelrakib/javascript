// Function declarations

function sum(a, b) {
  return a + b;
}

// console.log(sum(1, 2));

//Immediately evoked function , annonymous function->
// (function () {
//   console.log("IIFE Ran..");
// })();

//Property method = functions that are inside objects

const todo = {
  add: function () {
    console.log("To do...");
  },
  edit: function (id) {
    console.log(`Edit ${id}`);
  },
};

todo.add();
todo.edit(12);
