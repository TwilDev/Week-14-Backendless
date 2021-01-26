Backendless.initApp("A721C3AE-F98A-1BA0-FF1E-FB1227062A00", "61ECF7F2-6AE1-4114-8EDE-FEC2F39EB6BF");

$(document).on("pageshow","#todopage", onPageShow);

//when page is loaded
function onPageShow() {

	console.log("test");

}

Backendless.Data.of("Tasks").find().then(processResults).catch(error);

function processResults(tasks) {
    alert(tasks[0].Task)
}

function error(err) {
    alert(err);
}
