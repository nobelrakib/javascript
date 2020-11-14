//Global scope
var a = 1;
let b = 2;
const c = 3;

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log("function scope: ", a, b, c);
// }

// test();

if (true) {
  //Block scope
  var a = 4;
  let b = 5;
  const c = 6;
  console.log("block scope: ", a, b, c);
}

console.log("global scope: ", a, b, c);
