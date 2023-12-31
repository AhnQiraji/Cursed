import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task, User } from 'src/app/entities/classes';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'task-table-container',
  // template: '<task-table [user]="user | async"></task-table>'
  template: '<task-table><ng-content></ng-content></task-table>',
  styles: [`
    :host { 
      flex-grow: 1;
      flex-basis: 20rem;
      min-width: 20rem;
    }
  `]
})
export class TaskTableContainer implements OnChanges{
  public user: Observable < any >;
//   public user2: Observable < any >;

@Input() list: any = '';
  taskList!: Task[];

  constructor(private httpService: HttpService, private userService: UserService) {
    this.user = this.httpService.login(`${localStorage.getItem('userEmail')}`, `${localStorage.getItem('userPassword')}`);
    // this.user2 = this.userService.getUser();
  }
  ngOnChanges(changes: SimpleChanges): void {
    // if (this.list.map(e: Task => e)) {
    //   console.log('yay');
    // }
    console.log(this.list[0] instanceof Task)
  }
}
