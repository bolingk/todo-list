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

	let buttons = document.createElement('div');
	buttons.classList.add('buttons');

	let complete = document.createElement('a');
	complete.classList.add('btn');
	complete.href = '#';
	complete.addEventListener('click', completeTask); //Add click event for completing the item

	let completeIcon = document.createElement('i');
	completeIcon.classList.add('fa', 'fa-check');

	let remove = document.createElement('a');
	remove.classList.add('btn');
	remove.href = '#';
	remove.addEventListener('click', deleteTask); //Add click event for removing the item

	let removeIcon = document.createElement('i');
	removeIcon.classList.add('fas', 'fa-times');

	complete.appendChild(completeIcon);
	remove.appendChild(removeIcon);
	buttons.appendChild(complete);
	buttons.appendChild(remove);
	newItem.appendChild(buttons);
	list.insertBefore(newItem, list.childNodes[0]); //insert new list item to beginning of list
}

//Delete a task from the todo list
function deleteTask() {
	let item = this.parentNode.parentNode;
	let list = item.parentNode;

	list.removeChild(item); 
}


function completeTask() {
	let item = this.parentNode.parentNode;
	let icon = this.firstChild;

	item.classList.toggle('strike');
	icon.classList.toggle('complete');
}


/*
function clearCompleteTasks(event) {

}

function clearAllTasks(event) {

}*/