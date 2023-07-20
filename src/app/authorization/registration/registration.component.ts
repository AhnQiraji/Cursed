import { Component} from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { User } from 'src/app/entities/classes';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  public registrationForm: FormGroup;

  constructor(private httpService: HttpService) {
    this.registrationForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[[a-zA-Zа-яА-Я0-9]+@[a-zA-Zа-яА-Я0-9]*mail.[a-zA-Zа-яА-Я0-9]+')]),
      password: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я0-9]{4,20}$'), this.passwordValidator]),
      confirmPassword: new FormControl('', [Validators.required, this.confirmPasswordValidator]),
    })
  }
  
  passwordValidator = (control: AbstractControl): ValidationErrors | null => {
    if (control.value === this.registrationForm?.controls['confirmPassword'].value) {
      return null;
    }
    this.registrationForm?.controls['confirmPassword'].setErrors({confirmPassword: true});
    return null;
  }
  
  confirmPasswordValidator = (control: AbstractControl): ValidationErrors | null => {
    if (control.value === this.registrationForm?.controls['password'].value) {
      return null;
    }
    return { confirmPassword: true } 
  }
  

  registration(name: string, email: string, password: string) {
    if (this.registrationForm?.status === "INVALID") {
      alert('Invalid form');
      // popUp
    } else if (this.registrationForm?.status === "VALID") {
      this.httpService.registration(name, email, password).subscribe({
        next: (data: User | string) => {
          if (typeof(data) === 'string') {
            alert(data)
          } else {
            alert('New account registered! Log in to start.');
            // popUp
            this.registrationForm.reset();
          }
        }
      });
    } else {
      alert('this.registrationForm?.status == undefined(?)')
    }
  }








}