import './style.css';
import reloadImage from './reload.png';
import dltImage from './delete.png';
import addPlus from './plus.png';
const appHeading = document.querySelector('.main-heading');
const todoList = document.getElementById('do-list');
const addListDiv = document.querySelector('.adding-list');
const inputTask = document.createElement('input');
const addButton = document.createElement('button');
const reloadIcon = new Image();
// Add reload icon to the app heading
reloadIcon.src = reloadImage;
reloadIcon.className = 'reload-image';
reloadIcon.setAttribute('alt', 'reload-icon');
appHeading.appendChild(reloadIcon);
// Set attributes for input element and button
inputTask.setAttribute('type', 'text');
inputTask.setAttribute('placeholder', 'Add task to your list');
inputTask.setAttribute('id', 'add-new-list');
addButton.type = 'button';
addButton.className = 'addbtn';
const addIcon = new Image();
addIcon.src = addPlus;
addIcon.setAttribute('alt', 'addicon');
addIcon.className = 'addicon';
addButton.appendChild(addIcon);
addListDiv.appendChild(inputTask);
addListDiv.appendChild(addButton);

let tasks = JSON.parse(localStorage.getItem('todolist')) || [];

// Function to update the index of tasks after deletions
function setIndex() {
  tasks.forEach((task, index) => {
    task.id = index + 1;
  });
  localStorage.setItem('todolist', JSON.stringify(tasks));
}
class Create {
  constructor(newTask) {
    this.newTask = newTask;
  }

  createTodo() {
    const taskListItem = document.createElement('li');
    taskListItem.className = 'create-each-task';

    const taskTag = document.createElement('div');
    taskTag.className = 'tag-check';

    const checkBox = document.createElement('input');
    checkBox.setAttribute('class', 'task-check');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.checked = this.newTask.complete;

