//Primitive data type

//String
const name = "shahriar";

//number
const age = 24.1;

//boolean
const val = true;
const val2 = false;

//null
const car = null;

//undefined = initialize with no value given
let test;
console.log(test);

//Symbol //Es-7
const sym = Symbol();

//Reference Data type - Object
//Array
const numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers);

//Object = {  key: value } key-value pairs as many as you want, as many data-types as you want
const address = {
  city: "Dhaka",
  country: "bangladesh",
  people: 123213123123123,
  array: [1, 2, 3, 4, 5, 6],
  obj: { name: "shahriar", age: 24 },
};

//object.key
// console.log(address.obj);

const today = new Date();
console.log(today);
