let newTask = document.querySelector('input');
let list = document.querySelector('ul');
let	taskValue = newTask.value;


function addTask(event) {
	let listItem, listItemText;
	if (event.keyCode === 13) {
		if (newTask.value === "") {
			return;
		}
		console.log('added');
		listItem = document.createElement('li'); //create new li
		listItemText = document.createTextNode(taskValue); //create new text node from input
		listItem.appendChild(listItemText); //append user's input value to li
		list.appendChild(listItem); //append new li to the ul
		taskValue = "";
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