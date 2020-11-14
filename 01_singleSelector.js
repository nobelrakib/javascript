// document.getElementById();

// console.log(document.getElementById("task-title"));

//Get things from the element
// console.log(document.getElementById("task-title").className);

const taskTitle = document.getElementById("task-title");

//Change styling
// taskTitle.style.background = "#333";
// taskTitle.style.color = "#fff";
// taskTitle.style.padding = "5px";
// // taskTitle.style.display = "none";

//Change content
// taskTitle.textContent = "Task List";
// taskTitle.innerText = "My Tasks";
// taskTitle.innerHTML = "<span style='color: red'> Span Tasks </span>";

// document.querySelector()
// we can select id , class and element
console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("li"));

// document.querySelector("li").style.color = "red";

// Convert single selector into selecting a specific instance with pseudo classes.
document.querySelector("li:last-child").style.color = "red";
document.querySelector("li:nth-child(3)").style.color = "yellow";
document.querySelector("li:nth-child(odd)").style.background = "#ccc";
document.querySelector("li:nth-child(even)").style.background = "#f4f4f4";
