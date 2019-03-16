let newTask = document.querySelector('input');
// let list = document.querySelector('ul');
// let	taskValue = newTask.value;


function addTask(event) {
	let listItem;
	if (event.keyCode === 13) {
		if (newTask.value === "") {
			return;
		}
		console.log('added');
		// listItem = document.createElement('li'); //create new li
		// listItem.textContent = taskValue; //add the user's input value
		// list.appendChild('listItem'); //append new li to the ul
		// taskValue = '';
	}
};

newTask.addEventListener('keyup', addTask);



/*
function deleteTask {

}

function completeTask {

}

function clearCompleteTasks {

}

function clearAllTasks {

}*/