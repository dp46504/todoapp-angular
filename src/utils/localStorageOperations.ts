import { taskType } from 'src/types/taskTypes';

export function addTaskToLocalStorage(task: taskType) {
  let localStorageContent = JSON.parse(localStorage.getItem('tasks')!) || [];
  localStorageContent.push(task);
  localStorage.setItem('tasks', JSON.stringify(localStorageContent));
}

export function deleteTask(task: taskType) {
  let localStorageContent = JSON.parse(localStorage.getItem('tasks')!) || [];

  localStorageContent = localStorageContent.filter((taskItem: taskType) => {
    return JSON.stringify(taskItem) !== JSON.stringify(task);
  });
  localStorage.setItem('tasks', JSON.stringify(localStorageContent));
}

export function getTasks() {
  return JSON.parse(localStorage.getItem('tasks')!) || [];
}
