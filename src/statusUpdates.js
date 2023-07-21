function getTasksFromLocalStorage() {
    return JSON.parse(localStorage.getItem('todolist')) || [];
  }
  
