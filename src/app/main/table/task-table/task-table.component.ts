import { Component } from '@angular/core';

@Component({
  selector: 'task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent {
  public taskCreation = false;

  public closeTaskCreation(click: Event) {
    if ((click.target as HTMLElement).closest('.crossIco')) {
      this.taskCreation = false;
    }
  }

  _closeTaskCreation(event: boolean) {
    this.taskCreation = event;
  }
}
