function getTasksFromLocalStorage() {
    return JSON.parse(localStorage.getItem('todolist')) || [];
  }
function saveTasksToLocalStorage(tasks) {
    localStorage.setItem('todolist', JSON.stringify(tasks));
  }  
