function getTasksFromLocalStorage() {
    return JSON.parse(localStorage.getItem('todolist')) || [];
  }
function saveTasksToLocalStorage(tasks) {
    localStorage.setItem('todolist', JSON.stringify(tasks));
  }  
 export function updateTaskStatus(taskId, completed) {
    const tasks = getTasksFromLocalStorage();
    const taskToUpdate = tasks.find((task) => task.id === taskId);
    if (taskToUpdate) {
      taskToUpdate.complete = completed;
      saveTasksToLocalStorage(tasks);
    }
  }
export function clearCompletedTasks() {
    const tasks = getTasksFromLocalStorage();
    const updatedTasks = tasks.filter((task) => !task.complete);
    saveTasksToLocalStorage(updatedTasks);
  }
