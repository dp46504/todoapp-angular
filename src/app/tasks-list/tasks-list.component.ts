import { Component } from '@angular/core';
import { taskType } from 'src/types/taskTypes';
import { getTasks } from 'src/utils/localStorageOperations';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent {
  tasks: taskType[] = [];

  filter: boolean[] = [true, true, true];

  sortOrder: boolean = false;

  sortOnText: boolean = false;

  toggleTextSort() {
    this.sortOnText = !this.sortOnText;
    this.ngOnInit();
  }

  getSortTypeText() {
    if (this.sortOnText) return 'Sorted by text length';
    return 'Sorted by priority';
  }

  getTextSortClass() {
    return {
      nonactivefilter: !this.sortOnText,
      activefilter: this.sortOnText,
    };
  }

  ngOnInit() {
    let tasksList = getTasks();
    if (this.sortOnText) {
      tasksList = tasksList.sort((taskA: taskType, taskB: taskType) => {
        if (this.sortOrder) {
          return taskB.description.length - taskA.description.length;
        } else {
          return taskA.description.length - taskB.description.length;
        }
      });
    } else {
      tasksList = tasksList.sort((taskA: taskType, taskB: taskType) => {
        if (this.sortOrder) {
          return taskB.priority - taskA.priority;
        } else {
          return taskA.priority - taskB.priority;
        }
      });
    }
    this.tasks = tasksList;
  }

  refreshTasks() {
    this.ngOnInit();
  }

  reverseSort() {
    this.sortOrder = !this.sortOrder;
    this.ngOnInit();
  }

  getSortDirectionIndicator() {
    if (this.sortOrder) return 'Desc sorted ⬇️';
    return 'Asc sorted ⬆️';
  }

  toggleFilter(priorityToToggle: number) {
    switch (priorityToToggle) {
      case 0:
        this.filter[0] = !this.filter[0];
        break;
      case 1:
        this.filter[1] = !this.filter[1];
        break;
      case 2:
        this.filter[2] = !this.filter[2];
        break;
    }
  }

  getFilterClass(priority: number) {
    return {
      nonactivefilter: !this.filter[priority],
      activefilter: this.filter[priority],
    };
  }
}
