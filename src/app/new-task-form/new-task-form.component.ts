import { Component, EventEmitter, Output } from '@angular/core';
import { taskType } from 'src/types/taskTypes';
import { addTaskToLocalStorage } from '../../utils/localStorageOperations';

@Component({
  selector: 'new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.css'],
})
export class NewTaskFormComponent {
  task: taskType = {
    name: '',
    description: '',
    priority: 1,
    createdAt: new Date(Date.now()),
  };

  @Output()
  newTaskAdded: EventEmitter<any> = new EventEmitter();

  addTask() {
    if (this.task.name === '' || this.task.description === '')
      return alert('All fields are required');
    addTaskToLocalStorage(this.task);
    this.newTaskAdded.emit();
    this.task = {
      name: '',
      description: '',
      priority: 1,
      createdAt: new Date(Date.now()),
    };
  }
}
