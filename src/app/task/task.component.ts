import { Component, EventEmitter, Input, Output } from '@angular/core';
import { taskType } from 'src/types/taskTypes';
import { deleteTask } from 'src/utils/localStorageOperations';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input()
  task: taskType = {} as taskType;

  @Input()
  filter: boolean[] = [true, true, true];

  @Output()
  taskDeleted: EventEmitter<any> = new EventEmitter();

  deleteTask() {
    deleteTask(this.task);
    this.taskDeleted.emit();
  }

  getBorderClass() {
    return {
      highPriority: this.task.priority == 2,
      lowPriority: this.task.priority == 0,
    };
  }

  getButtonClass() {
    return {
      highPriority: this.task.priority == 2,
      lowPriority: this.task.priority == 0,
    };
  }

  getChipClass() {
    return {
      highPriority: this.task.priority == 2,
      lowPriority: this.task.priority == 0,
    };
  }

  getPointsNumber() {
    if (typeof this.task.priority === 'string')
      return `(+${parseInt(this.task.priority) + 1} pts)`;
    return `(+${this.task.priority + 1} pts)`;
  }
}
