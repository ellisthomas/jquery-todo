$(document).ready(function(){

	$("#new-item").click(() => {
		$(".list-container").addClass("hide");
		$(".new-container").removeClass("hide");
	});

	$("#list-items").click(() => {
		$(".new-container").addClass("hide");
		$(".list-container").removeClass("hide");
	});



	//get todo
	FbApi.getTodos().then(() => {
		FbApi.writeToDom();
	})
	.catch((error) => {
		console.log("getTodos Error", error);
	});

	$("#add-todo-button").click(() => {
		let newTodo = {
			isCompleted: false,
			task: $("#add-todo-text").val()
		};
		console.log("newTodo", newTodo);
		FbApi.addTodo(newTodo).then(() => {
			$("#add-todo-text").val("");
			$(".new-container").addClass("hide");
			$(".list-container").removeClass("hide");
			FbApi.writeToDom();
		}).catch(() => {
			console.log("addTodo", error);
		});
	});

	//add todo
	//delete todo
	//edit todo
	//complete todos





});

