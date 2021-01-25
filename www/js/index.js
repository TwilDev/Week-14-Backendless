
Backendless.initApp('CE6F7BC0-AE4E-06A0-FF26-C90A3C00FE00','29BBCCDA-6491-4725-8357-24881544D98A');

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
