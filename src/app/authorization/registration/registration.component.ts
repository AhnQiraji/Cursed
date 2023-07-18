import { Component} from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { HttpService } from '../../assets/services/http.service';
import { User } from 'src/app/assets/entities/classes';


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
      password: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я0-9]{4,20}$')]),
      confirmPassword: new FormControl('', [Validators.required]),
    })
  }
  

  registration(name: string, email: string, password: string) {
    if (this.registrationForm.status === "INVALID") {
      alert('Invalid data');
      // popUp
    } else if (this.registrationForm.status === "VALID") {
      this.httpService.postUser(name, email, password).subscribe({
        next: (data: User | string) => {
          console.log(data);
        }
      });
    }
  }






  // passwordValidator = (control: AbstractControl): ValidationErrors | null => {
  //   console.log('confirm', this.registrationForm?.controls['confirmPassword'].value, control.value)
  //   console.log(control)
  //   if (this.registrationForm?.controls['confirmPassword'].value === control.value) {
  //     return null;
  //   }
  //   return { confirmPassword: true } 
  // }


  // confirmPasswordValidator = (control: AbstractControl): ValidationErrors | null => {
  //   console.log('confirm', this.registrationForm?.controls['password'].value, control.value)
  //   console.log(control)
  //   if (this.registrationForm?.controls['password'].value === control.value) {
  //     return null;
  //   }
  //   return { confirmPassword: true } 
  // }


}