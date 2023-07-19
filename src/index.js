import _ from 'lodash';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());

const tasks = [
    { description: "Task 1", completed: false, index: 1 },
    { description: "Task 2", completed: true, index: 2 },
    { description: "Task 3", completed: false, index: 3 },
  ];
  
  const renderTodoList = () => {
    const todoListElement = document.getElementById("todo-list");
  
    const listItems = tasks.map((task) => {
      const listItem = document.createElement("li");
      listItem.textContent = task.description;
      listItem.classList.add(task.completed ? "completed" : "pending");
      return listItem;
    });
  
    const todoList = document.createElement("ul");
    todoList.append(...listItems);
    todoListElement.appendChild(todoList);
  };
  
  renderTodoList();
  
