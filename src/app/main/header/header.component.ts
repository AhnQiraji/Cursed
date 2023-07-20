import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/entities/classes';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() user: User;
  
  public userOptions = false;

  constructor(private userService: UserService, private router: Router) {
  }

  public logOut() {
    localStorage.clear();
    this.userService.user = null;
    this.router.navigate(['/login']);
  }

  public profile() {
    this.userOptions = false;
  }
}
