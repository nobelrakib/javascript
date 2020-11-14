// create element
const li = document.createElement("li");

//add classname
li.className = "collection-item";

//add id
li.id = "new Item";

// add attribute
li.setAttribute("title", "New Item");

//insert textnode inside an li
li.appendChild(document.createTextNode("Hello World"));

//create new link element
const link = document.createElement("a");

//Add classes
link.className = "delete-item secondary-content";

//add font-awesome icon
link.innerHTML = '<i class="fa fa-remove"> </i>';

//append link inside the list item
li.appendChild(link);

// target ul with class collection and append the newly formed li inside it
document.querySelector("ul.collection").appendChild(li);

console.log(li);

{
  /* <li class="collection-item" id="new Item">
  Hello World{" "}
  <a href="" class="delete-item secondary-content">
    <i class="fa fa-remove"></i>
  </a>
</li>; */
}
