import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/entities/classes';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'task-table-container',
  // template: '<task-table [user]="user | async"></task-table>'
  template: '<task></task>',
  styles: [`
    :host { 
      flex-grow: 1;
      flex-basis: 20rem;
      min-width: 20rem;
    }
  `]
})
export class TaskContainer {
  public user: Observable < any >;
//   public user2: Observable < any >;

  constructor(private httpService: HttpService, private userService: UserService) {
    this.user = this.httpService.login(`${localStorage.getItem('userEmail')}`, `${localStorage.getItem('userPassword')}`);
    // this.user2 = this.userService.getUser();
  }
}
