import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  public registrationForm: FormGroup;
  // private passwordValue = '';

  constructor() {
    this.registrationForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      // , Validators.pattern('^[[a-zA-Zа-яА-Я0-9]+@[a-zA-Zа-яА-Я0-9]*mail.[a-zA-Zа-яА-Я0-9]+')
      password: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я0-9]{4,20}$')]),
      confirmPassword: new FormControl('', [Validators.required]),
    })
  }
  // ngOnInit(): void {
  //   this.registrationForm.controls['password'].valueChanges.subscribe((passwordValue) => {
  //     this.passwordValue = passwordValue as string;
  //     console.log(this.passwordValue)
  //   })
  // }


  // confirmPasswordValidator = (control: AbstractControl): ValidationErrors | null => {
  //   console.log('confirm', this.registrationForm?.controls['password'].value, control.value)
  //   console.log(control)
  //   if (this.registrationForm?.controls['password'].value === control.value) {
  //     return null;
  //   }
  //   return { confirmPassword: true } 
  // }


  // private confirmPasswordValidator = (controlToCompare: AbstractControl) : ValidatorFn => 
  // (control: AbstractControl): ValidationErrors | null => {
  //   let controlValue = control.value;
  //   let anotherValue = controlToCompare.value;
  //   if( controlValue !== anotherValue) return { confirmPassword: true } 
  //   return null
  // }

  

}