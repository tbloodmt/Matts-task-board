// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {
const taskArray = []
task.forEach((cardEl)=>{ 
const taskCard = `
<div class="taskCard">
<h3>${cardEl.title}</h3>
<p>${cardEl.date}</p>
<p>${cardEl.description}</p>
</div>

`
const taskItem = $(taskCard)
taskArray.push(taskItem)
})
return taskArray
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
event.preventDefault()
var taskNameEl = $("#taskName").val()
var taskDateEl = $("#taskDate").val()
var taskDescriptionEl = $("#taskDescription").val()
console.log(taskNameEl,taskDateEl,taskDescriptionEl)
var newTask={
    title:taskNameEl,
    date:taskDateEl,
    description:taskDescriptionEl
}
taskList.push(newTask)
localStorage.setItem("tasks",JSON.stringify(taskList))
$("#formModal").modal("hide")
createTaskCard(taskList)
renderTaskList()

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    $("#addTaskBtn").on("click",handleAddTask)
// creat event listener for my modal input button 
// have it call handle add task
// try to console log the values of the inputs from the modal 
});
