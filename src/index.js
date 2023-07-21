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
function updateTaskListItemClass(taskId, completed) {
  const taskListItem = document.querySelector(`[data-task-id="${taskId}"]`);
  if (taskListItem) {
    if (completed) {
      taskListItem.classList.add('checked');
      taskListItem.style.background = '#f4f5Cf';
      taskListItem.style.opacity = '0.5';
    } else {
      taskListItem.classList.remove('checked');
      taskListItem.style.background = 'none';
      taskListItem.style.opacity = '1';
    }
  }
}

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
    taskListItem.setAttribute('data-task-id', this.newTask.id); // Set task ID as data attribute

    const taskTag = document.createElement('div');
    taskTag.className = 'tag-check';

    const checkBox = document.createElement('input');
    checkBox.setAttribute('class', 'task-check');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.checked = this.newTask.complete;

    if (this.newTask.complete) {
      taskListItem.classList.add('checked');
    }
    const taskDescription = document.createElement('input');
    taskDescription.setAttribute('type', 'text');
    taskDescription.setAttribute('class', 'task-description');
    taskDescription.value = this.newTask.description;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'deltbin';
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('id', this.newTask.id);
    const addNewIcon = new Image();
    addNewIcon.className = 'addMore';
    addNewIcon.src = dltImage;
    addNewIcon.setAttribute('alt', 'plus Icon');

    taskTag.appendChild(checkBox);
    taskTag.appendChild(taskDescription);

    taskListItem.appendChild(taskTag);
    deleteButton.appendChild(addNewIcon);
    taskListItem.appendChild(deleteButton);
    todoList.appendChild(taskListItem);
    checkBox.addEventListener('change', () => {
      this.newTask.complete = checkBox.checked;

      if (this.newTask.complete) {
        taskListItem.classList.add('checked');
        taskListItem.style.background = '#f4f5Cf';
        taskListItem.style.opacity = '0.5';
      } else {
        taskListItem.classList.remove('checked');
        taskListItem.style.background = 'none';
        taskListItem.style.opacity = '1';
      }

      updateTaskStatus(this.newTask.id, this.newTask.complete);
    });
    taskDescription.addEventListener('input', () => {
      this.newTask.description = taskDescription.value;
    });

    taskDescription.addEventListener('blur', () => {
      taskDescription.setAttribute('disabled', '');
      localStorage.setItem('todolist', JSON.stringify(tasks));
    });

    taskTag.addEventListener('click', () => {
      taskDescription.removeAttribute('disabled');
      taskDescription.focus();
    });
    addNewIcon.addEventListener('click', () => {
      tasks = tasks.filter((task) => task.id !== this.newTask.id);
      taskListItem.remove();
      setIndex();
      localStorage.setItem('todolist', JSON.stringify(tasks));
    });

    return {
      taskListItem,
      taskDescription,
      taskTag,
      addNewIcon,
    };
  }
}
function addTaskToList(value) {
  const newTask = {
    id: tasks.length + 1,
    description: value,
    complete: false,
  };
  tasks.push(newTask);
  const instance = new Create(newTask);
  instance.createTodo();
  localStorage.setItem('todolist', JSON.stringify(tasks));
}

addListDiv.addEventListener('click', (e) => {
  e.preventDefault();

  addButton.addEventListener('click', () => {
    if (inputTask.value !== '') {
      addTaskToList(inputTask.value);
      inputTask.value = '';
    }
  });
});
function displayList() {
  if (localStorage.getItem('todolist')) {
    tasks = JSON.parse(localStorage.getItem('todolist'));
    tasks.forEach((task) => {
      const instance = new Create(task);
      const { taskListItem } = instance.createTodo();
      todoList.appendChild(taskListItem);
    });
  }
}
todoList.addEventListener('change', (e) => {
  if (e.target.type === 'checkbox') {
    const taskId = parseInt(e.target.getAttribute('data-task-id'), 10);
    const completed = e.target.checked;
    updateTaskStatus(taskId, completed);
    updateTaskListItemClass(taskId, completed);
  }
});

const clearCompletedButton = document.querySelector('.clear-completed-btn');
if (clearCompletedButton) {
  clearCompletedButton.addEventListener('click', () => {
    clearCompletedTasks();
    const completedTaskItems = document.querySelectorAll('.create-each-task.checked');
    completedTaskItems.forEach((item) => item.remove());
  });
}

document.addEventListener('DOMContentLoaded', displayList);
