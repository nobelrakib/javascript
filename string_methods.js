//variables names are always camelcase
const firstName = "shahriar";
const lastName = "saleque";
const age = 24;
const str = "Hello my name is shahriar";
const tags = "web design, web development,programming";

let val;

val = firstName + lastName;

//concatenation
val = firstName + " " + lastName;

//Append
val = "shahriar ";
val += "saleque"; // val+= : val = val + ''

//concat with a number
val = "Hello, my name is " + firstName + " and i am " + age;

//Escaping
val = "that's great i can't wait";

//Length
val = firstName.length;

//concat --> direct methid
val = firstName.concat(" ", lastName);

//change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[1];

//indexOf -> returns -1 when the character is not there
val = firstName.indexOf("h");
val = firstName.lastIndexOf("h");

//charAt
val = firstName.charAt("7");

//Get last character always
val = firstName.charAt(firstName.length - 1);

// sub-string
val = firstName.substring(0, 4);

// slice
val = firstName.slice(0, 4);
val = firstName.slice(-3);

//split
val = str.split(" ");
val = tags.split(",");

//replace
val = str.replace("shahriar", "asif");

//includes -> true if parameter is included in the string, otherwise it is false;
val = str.includes("foo");

//Template literals
let a = "john";
let b = 23;

val = "Hello my name is " + a + " and i am " + b;
//literals = keyboard er tab er upore
val = `Hello my name is ${a} and i am ${b}`;

console.log(val);
