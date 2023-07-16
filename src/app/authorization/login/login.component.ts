import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      // , Validators.pattern('^[[a-zA-Zа-яА-Я0-9]+@[a-zA-Zа-яА-Я0-9]*mail.[a-zA-Zа-яА-Я0-9]+')
      password: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я0-9]{4,20}$')]),
    })

  }
}
