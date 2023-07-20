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
