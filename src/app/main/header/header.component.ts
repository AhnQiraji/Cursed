import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private userService: UserService) {

  }
  userName = this.userService.user?.name;
  userLogo = `assets/avatars/${this.userService.user?.avatar}.png`;
}
