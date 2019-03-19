let newTask = document.querySelector('input');

//Event Listeners
newTask.addEventListener('keyup', function(event){
	if (event.keyCode === 13) { //key code 13 is Enter/Return
		let value = newTask.value;
		if (value) { 
			addTask();
			newTask.value = ''; //clear input content
		}
	}
});

//Adding a new item to the todo list
function addTask() {
	let list = document.getElementById('todo');

	let newItem = document.createElement('li'); //create new li
	newItem.innerText = newTask.value; 
	newItem.addEventListener('click', completeTask); //Add click event for completing the task

	let button = document.createElement('a');
	button.classList.add('btn');
	button.href = '#';
	button.addEventListener('click', deleteTask); //Add click event for removing the item

	let icon = document.createElement('i');
	icon.classList.add('fas', 'fa-times');

	button.appendChild(icon);
	newItem.appendChild(button);
	list.insertBefore(newItem, list.childNodes[0]); //insert new list item to beginning of list
}

//Delete a task from the todo list
function deleteTask() {
	var item = this.parentNode;
	var list = item.parentNode;

	list.removeChild(item); 
}


function completeTask() {
	var item = this;
	item.classList.add('strike');
}


/*
function clearCompleteTasks(event) {

}

function clearAllTasks(event) {

}*/