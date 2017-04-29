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
		countTask();
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
			countTask();
		}).catch(() => {
			console.log("addTodo", error);
		});
	});

	//add todo
	//delete todo
	//edit todo
	//complete todos
	$(".main-container").on("click", "input[type='checkbox']", (event) => {
		console.log("event.target.id",event.target.id);
		FbApi.checker().then(() => {
			FbApi.writeToDom();
			countTask();
		}).catch((error) => {
			console.log("check error", error);
		});
	});


	let countTask = () => {
		let remainingTask = $("#incomplete-task li").length;
		$("#counter").hide().fadeIn(300).html(remainingTask);
	};




});

