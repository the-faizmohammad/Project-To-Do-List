import './style.css';
import reloadIcon from './reload.png';
import moreIcon from './more.png';

const mainHeading = document.querySelector('.main-heading');
const addList = document.getElementById('add-list');
// create array of tasks
const tasks = [
  { description: 'Buy groceries', completed: false, index: 3 },
  { description: 'Call a friend', completed: false, index: 2 },
  { description: 'Read a book', completed: true, index: 1 },
];
// Function to render the list of tasks
const render = () => {
  const sortedTasks = tasks.slice().sort((a, b) => a.index - b.index);
  const tasksHTML = sortedTasks.map((task) => `
    <li class='my-each-task'>
      <div class='check-tag'>
        <input type='checkbox' id='task-desc'>
        <label for='task-desc'>${task.description}</label>
      </div>
      <img src=${moreIcon} class='show-more' alt='three dots'/>
    </li>
  `).join('');
  addList.innerHTML = tasksHTML;
};
document.addEventListener('DOMContentLoaded', render);
// Create and configure the reload image element
const reloadImg = new Image();
reloadImg.src = reloadIcon;
reloadImg.className = 'image-reload';
reloadImg.setAttribute('alt', 'icon-reload');
// Append the reload image to the main heading
mainHeading.appendChild(reloadImg);
