import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/entities/classes';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() user: User;

  constructor(private userService: UserService) {
  }
}
