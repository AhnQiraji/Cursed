import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/entities/classes';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'profile-container',
  template: '<profile [user]="user | async"></profile>',
  styles: [`
    :host {
      position: absolute;
      top: 0;
      left: 0;
    }`
  ]
})
export class ProfileContainer {
  public user: Observable < any >;

  constructor(private httpService: HttpService, private userService: UserService) {
    this.user = this.httpService.login(`${localStorage.getItem('userEmail')}`, `${localStorage.getItem('userPassword')}`);
  }

}
