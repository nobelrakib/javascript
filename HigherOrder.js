const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < ages.length; i++) {
//   console.log(ages[i]);
// }

// FOR EACH HIGHER ORDER used when array has integers
//forEach = higher order function
// forEach = takes a callback as parameter
//callback function = function that is a parameter for another function

// ages.forEach(function (age) {
//   console.log(age);
// });

// Can also be written with arrow functions
// ages.forEach((age) => console.log(age));

//FIlTER HIGHER ORDER

// let canDrink = [];

// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink2 = ages.filter(function (age) {
//   if (age >= 21) {
//     return true;
//   }
// });

//Written using arrow function
// const canDrink2 = ages.filter((age) => age >= 21);

// console.log(canDrink2);

//MAP HIGHER ORDER FUNCTION when array has objects
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

//Create an array of company names
// const companyNames = companies.map(function (company) {
//   return company.name;
// });

// const companyCategories = companies.map(function (company) {
//   return company.category;
// });

//can also be written as arrow functions
// const companyCategories = companies.map((company) => company.category);

// console.log(companyCategories);

//SORT FUNCTION Takes a comparatar function

// const sortedCompanies = companies.sort(function (a, b) {
//   if (a.start > b.start) {
//     return 1; //ascending order
//   } else {
//     return -1;
//   }
// });

//Can also be written with arrow functions with ternary operator (shortcut for if/else)
//ternary condition ? true : false

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

//REDUCE FUNCTION

console.log(sortedCompanies);
