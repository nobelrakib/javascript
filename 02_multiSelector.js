// document.getElementsByClassName --> return an HTML collection

// const items = document.getElementsByClassName("collection-item");
// let listItems = document
//   .querySelector("ul")
//   .getElementsByClassName("collection-item");

// //HTML collection converted into an array
// listItems = Array.from(listItems);

// // for(let i = 0; i<listItems.length; i++) {
// //     listItems[i].style.color = 'red'
// // }

// // listItems.forEach(function (item) {
// //   item.style.color = "blue";
// // });

// // listItems.forEach((item) => {
// //   item.style.color = "red";
// // });
// console.log(listItems);

// document.getElementsbyTagName = getElementsbyClassName
// let lis = document.getElementsByTagName("li");
// lis[0].style.background = "orange";

// // lis is a HTML COLLECTION = ARRAY METHODS LIKE FOR EACH WILL NOT WORK

// lis.forEach((item) => console.log(item));

// console.log(lis);

// returns a node list, node-list works like an array
// document.querySelectorAll() -> returns a node list

// const items = document.querySelectorAll("ul.collection li.collection-item");

// items.forEach((item) => (item.style.color = "green"));

const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

console.log(liEven);
