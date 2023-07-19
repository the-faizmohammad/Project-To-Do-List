// Import the CSS and image files
import './style.css';
import reloadIcon from './reload.png';
import moreIcon from './more.png';
// Select elements from the DOM
const mainHeading = document.querySelector('.main-heading');
const addList = document.getElementById('add-list');
// An array of tasks
const tasks = [
  { description: 'Buy groceries', completed: false, index: 3 },
  { description: 'Call a friend', completed: false, index: 2 },
  { description: 'Read a book', completed: true, index: 1 },
];
// Function to render the list of tasks
const render = () => {
  // Clone the tasks array and sort it based on the 'index' property
  const sortedTasks = tasks.slice().sort((a, b) => a.index - b.index);
   // Generate HTML list items for each task and join them into a string
  const tasksHTML = sortedTasks.map(task => `
    <li class='my-each-task'>
      <div class='check-tag'>
        <input type='checkbox' id='task-desc'>
        <label for='task-desc'>${task.description}</label>
      </div>
      <img src=${moreIcon} class='show-more' alt='three dots'/>
    </li>
  `).join('');
  // Set the HTML content of 'addList' with the generated list items
  addList.innerHTML = tasksHTML;
};
// When the DOM content is loaded, call the 'render' function to display the list of tasks
document.addEventListener('DOMContentLoaded', render);
