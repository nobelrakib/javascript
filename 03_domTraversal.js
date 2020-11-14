let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = list;

//Get child nodes
// val = list.childNodes;

// //get children only
// val = list.children;
// val = list.children[1];
// list.children[1].textContent = "second child...";

//children of children -> need to mention index number all the time
list.children[3].children[0].id = "test-link";

//First-Child node
val = list.firstChild;

//first child element
val = list.firstElementChild;

//last child node
val = list.lastChild;

//last child element
val = list.lastElementChild;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement.parentElement;

// Get next sibling and prev sibling
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

console.log(val);
