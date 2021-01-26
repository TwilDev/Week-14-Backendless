
Backendless.initApp('A721C3AE-F98A-1BA0-FF1E-FB1227062A00','61ECF7F2-6AE1-4114-8EDE-FEC2F39EB6BF');

//test for page ready
$(document).on("pageshow","#todopage", onPageShow);
//test for adding a new task
$(document).on("click", "#addTaskButton", onAddTask);

//when page is loaded
function onPageShow() {

	console.log("test");

}

Backendless.Data.of("Tasks").find().then(processResults).catch(error);

function processResults(tasks) {
    //empty placeholder tasks
    $('#taskList').empty();
    //loop through until no more tasks in DB
    for (var i=0; i < tasks.length; i++) {
	$('#taskList').append("<li>"+tasks[i].Task+"</li>");
    }
    //refresh to update
    $('#taskList').listview('refresh');
}

function error(err) {
    //show err if failed to retrieve
    alert(err);
}



function onAddTask() {
    console.log('Button pressed');
    //assign variables
    var taskText = $('#addTaskText').val();
    
    //Create object and assign task attribute of object to add input
    var newTask = { };
    newTask.Task = taskText;
    
    Backendless.Data.of("Tasks").save(newTask).then(saved).catch(error);
    
}

function saved(savedTask) {
    console.log("saved " + savedTask.Task);
    //processResults();
    $('#addTaskText').val("");
    $('#taskList').append("<li>"+savedTask.Task+"</li>");
    $('#taskList').listview('refresh');
}
