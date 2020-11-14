// Define UI vars 
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection'); 
const clearBtn = document.querySelector('.clear-tasks'); 
const filter = document.querySelector('#filter'); 
const taskInput = document.querySelector('#task');

//Load all event listeners 
loadEventListeners(); 

function loadEventListeners() {

//event listener whenever page is reloaded 
document.addEventListener('DOMContentLoaded', getTasks);

//Add a task 
form.addEventListener('submit', addTask);

//Remove the task 
taskList.addEventListener('click', removeTask)

//clear all tasks 
clearBtn.addEventListener('click', clearTasks);

//filter all tasks (also works with input event)
filter.addEventListener('keyup', filterTasks); 

}

//Event Listeners 

// Get Tasks from LS
function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  
    tasks.forEach(function(task){
      // Create li element
      const li = document.createElement('li');
      // Add class
      li.className = 'collection-item';
      // Create text node and append to li
      li.appendChild(document.createTextNode(task));
      // Create new link element
      const link = document.createElement('a');
      // Add class
      link.className = 'delete-item secondary-content';
      // Add icon html
      link.innerHTML = '<i class="fa fa-remove"></i>';
      // Append the link to li
      li.appendChild(link);
  
      // Append li to ul
      taskList.appendChild(li);
    });
  }


function addTask(e) {
   if(taskInput.value === '') {
       alert('Add a task!!'); 
   } 

   //create a li element
   const li = document.createElement('li'); 
   
   //Add a classname 
   li.className = 'collection-item'

   //create a text node and add it to li 
   li.appendChild(document.createTextNode(taskInput.value)); 
   
   //create a link element 
   const link = document.createElement('a'); 

   // Add classname to icon 
   link.className = 'delete-item secondary-content'

   //Add icon to link item 
   link.innerHTML = "<i class='fa fa-remove'> </i>"

   //Append the link inside the list item 
   li.appendChild(link)

   //Add list item to ul 
   taskList.appendChild(li)

   //Store to localStorage
   storeTaskInLocalStorage(taskInput.value); 

   //Clear the input field 
   taskInput.value = ''; 
   e.preventDefault(); 
}

function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
            
            //Remove from local Storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);  
    }
  }
}

function clearTasks() {
    taskList.innerHTML = ''; 

    //Clear tasks from LS 
    clearTasksFromLocalStorage();
}

function filterTasks(e) {
 const text = e.target.value.toLowerCase();
 
 //get all the list items and iterate through each one 
 document.querySelectorAll('.collection-item').forEach(function(task) {
    const textContent = task.firstChild.textContent; 
    if(textContent.toLowerCase().indexOf(text) !== -1) {
        //Match korse 
        task.style.display = 'block'; 
    } else {
        //match korenai 
        task.style.display = 'none'
    }
 })
}

// Everything inside my localStorage is saved as a string 
// so when we getItem = JSON.parse -> convert string to object
// so when we setItem = JSON.stringify -> convert object to string. 

function storeTaskInLocalStorage(task) {
    let tasks; 
    if(localStorage.getItem('tasks') === null) {
      // Nothing in local storage so we need to initialize the array 
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks')); 
    }
    tasks.push(task); 

    //Set the new tasks array in local Storage back convert into string bu stringify 
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  
    tasks.forEach(function(task, index){
      if(taskItem.textContent === task){
        tasks.splice(index, 1);
      }
    });
  
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function clearTasksFromLocalStorage() {
      localStorage.clear(); 
  }
