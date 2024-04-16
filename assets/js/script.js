// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
return `task-${Date.now()}`
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const taskArray = []
    task.forEach((cardEl) => {
        const today=dayjs()
        const savedDate=dayjs(cardEl.date)
        let taskCardClass=""
        if (savedDate.isSame(today,"day")){
            taskCardClass="waring"
        } else if (savedDate.isBefore(today)){
            taskCardClass="late"
        }
        const taskCard = `
<div class="taskCard ${taskCardClass}">
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
    $("#todo-cards").empty()
    $("#in-progress-cards").empty()
    $("#done-cards").empty()
    taskList.forEach((task) => {
        const taskCard = createTaskCard([task])[0]
        switch (task.lane) {
            case "to-do":
                $("#todo-cards").append(taskCard)
                break;
            case "in-progress":
                $("#in-progress-cards").append(taskCard)
                break;
            case "done":
                $("#done-cards").append(taskCard)
                break;
        }
    })
}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
    event.preventDefault()
    var taskNameEl = $("#taskName").val()
    var taskDateEl = $("#taskDate").val()
    var taskDescriptionEl = $("#taskDescription").val()
    const taskLane = "to-do"
    var newTask = {
        title: taskNameEl,
        date: taskDateEl,
        description: taskDescriptionEl,
        lane: taskLane,
        id: generateTaskId()
    }
    taskList.push(newTask)
    localStorage.setItem("tasks", JSON.stringify(taskList))
    $("#formModal").modal("hide")
    createTaskCard(taskList)
    renderTaskList()

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    $("#addTaskBtn").on("click", handleAddTask)
    // creat event listener for my modal input button 
    // have it call handle add task
    // try to console log the values of the inputs from the modal 
});
