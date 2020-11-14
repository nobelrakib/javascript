//Create an element

const newHeading = document.createElement("h4");

//add id
newHeading.id = "task-title";

//new text node
newHeading.appendChild(document.createTextNode("New Heading"));

console.log(newHeading);

const oldHeading = document.getElementById("task-title");

//Get the parent
const parent = document.querySelector(".card-action");

parent.replaceChild(newHeading, oldHeading);
