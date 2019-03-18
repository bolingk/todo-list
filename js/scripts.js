let newTask = document.querySelector('input');
let list = document.querySelector('ul');


function addTask(event) {
	let newItem;
	if (event.keyCode === 13) {
		if (newTask.value == "") {
			return;
		}
		newItem = document.createElement('li'); //create new li
		newItem.innerText = newTask.value; 
		list.insertBefore(newItem, list.childNodes[0]); //append user's input value to li
		newTask.value = ''; //clear input content
	}
};


newTask.addEventListener('keyup', addTask, false);


/*
function deleteTask {

}

function completeTask {

}

function clearCompleteTasks {

}

function clearAllTasks {

}*/