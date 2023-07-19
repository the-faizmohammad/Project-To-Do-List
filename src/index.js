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
