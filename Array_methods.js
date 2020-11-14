const numbers = [43, 56, 33, 23, 44, 36, 5]; //follow this one
const numbers2 = new Array(22, 23, 24, 25);

const fruit = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 1 }, new Date()];

// console.log(mixed);
const name = "asdasd";
let val;

//length
val = numbers.length;

//check if it is an array
val = Array.isArray(numbers);

//get single value
val = numbers[3];

//insert into an array
// numbers[0] = 100;

//find index of value
val = numbers.indexOf(1);

//Mutating an array

//add on the end
// numbers.push(6);
// //add on the front
// numbers.unshift(120);
// //take off from end
// numbers.pop();
// // numbers.pop();
// // numbers.pop();
// //take off from front
// numbers.shift();
// //splice values
// numbers.splice(1, 3);
//reverse
// numbers.reverse();

//splice( index from where you want to start | 0 | item to be inserted)
numbers.splice(0, 0, 120);
console.log(numbers);

//concat two arrays together
val = numbers.concat(numbers2);

//sort arrays
val = numbers.sort();

//use a compare function
//callback function = function inside another function
//anonymous function = function that has no name

//ascending sort
val = numbers.sort(function (x, y) {
  return x - y;
});

//descending sort
val = numbers.sort(function (x, y) {
  return y - x;
});

// console.log(val);
