import { Component, OnInit } from '@angular/core';

import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private httpService: HttpService, private router: Router, private userService: UserService) {

  }

}
