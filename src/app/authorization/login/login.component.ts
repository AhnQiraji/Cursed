import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../assets/services/http.service';
import { User } from 'src/app/assets/entities/classes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: any = 0;
  public loginForm: FormGroup;

  constructor(private httpService: HttpService) {
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
      this.httpService.getUser(email, password).subscribe({
        next: (data: User | string) => {
          if (typeof(data) === 'string') {
            alert(data);
            // popUp
          }
          this.user = data;
          console.dir(data)
        }
      });
    }
  }
}
