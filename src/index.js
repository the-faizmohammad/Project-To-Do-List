import './style.css';
import reloadImage from './reload.png';
import dltImage from './delete.png';
import addPlus from './plus.png';
import { updateTaskStatus, clearCompletedTasks } from './statusUpdates.js'; 
const appHeading = document.querySelector('.main-heading');
const todoList = document.getElementById('do-list');
const addListDiv = document.querySelector('.adding-list');
const inputTask = document.createElement('input');
const addButton = document.createElement('button');
const reloadIcon = new Image();
reloadIcon.src = reloadImage;
reloadIcon.className = 'reload-image';
reloadIcon.setAttribute('alt', 'reload-icon');
appHeading.appendChild(reloadIcon);
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
