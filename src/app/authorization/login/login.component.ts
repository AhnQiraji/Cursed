import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { User } from 'src/app/entities/classes';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm: FormGroup;
  private loginData: User | string = '';

  constructor(private httpService: HttpService, private router: Router, private userService: UserService) {
    this.loginForm = new FormGroup({
      email: new FormControl('e@mail.ru', [Validators.required, Validators.email, Validators.pattern('^[[a-zA-Zа-яА-Я0-9]+@[a-zA-Zа-яА-Я0-9]*mail.[a-zA-Zа-яА-Я0-9]+')]),
      password: new FormControl('1234', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я0-9]{4,20}$')]),
      // Validation
    })

  }

  public login(email: string, password: string) {
    if (this.loginForm.status === "INVALID") {
      alert('Invalid data');
      // popUp
    } else if (this.loginForm.status === "VALID") {
      this.httpService.login(email, password).subscribe({
        next: (data: User | string) => {
          console.dir(data);
          if (typeof(data) === 'string') {
            alert(data);
          } else {
            this.userService.user = data;
            this.router.navigate(['main'])
          }
        }
      });
    }
  }
}
