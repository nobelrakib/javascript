//Arrow functions are shorter ways of writing functions
//ES-6 introduced

// const sayHello = function () {
//   console.log("hello");
// };

//Arrow function () =>
// const sayHello = () => {
//   console.log("Hello from arrow function");
// };

//One line function does not need braces
// const sayHello = () => console.log("Hello from arrow function");

//return an object longer way
// const sayHello = () => {
//   return { msg: "Hello" };
// };

//return an object shorter way
const sayHello = () => ({
  msg: "Hello",
});

// // {
//     return
// } === ()

console.log(sayHello());
