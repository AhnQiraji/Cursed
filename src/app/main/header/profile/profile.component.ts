import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from 'src/app/entities/classes';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnChanges {
  @Input() user!: User;
  
  passwordValidator = (control: AbstractControl): ValidationErrors | null => {
    if (control.value === this.profileForm?.controls['confirmPassword'].value) {
      return null;
    }
    this.profileForm?.controls['confirmPassword'].setErrors({confirmPassword: true});
    return null;
  }
  
  confirmPasswordValidator = (control: AbstractControl): ValidationErrors | null => {
    if (control.value === this.profileForm?.controls['password'].value) {
      return null;
    }
    return { confirmPassword: true } 
  }

  public profileForm = new FormGroup({
    name: new FormControl(`${this.user?.name}`, [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я0-9]{4,20}$'), this.passwordValidator]),
    confirmPassword: new FormControl('', [Validators.required, this.confirmPasswordValidator]),
  })

  constructor(private httpService: HttpService, private userService: UserService){
  }
  
  public changeProfile(newName: string, newPassword: string) {
    if (this.profileForm?.status === "INVALID") {
      alert('Invalid form');
      // popUp
    } else if (this.profileForm?.status === "VALID") {
      console.log(this.user.password)
      this.httpService.changeProfile(this.user.email, this.user.password, newName, newPassword).subscribe({
        next: (data: User | string) => {
          if (typeof(data) === 'string') {
            alert(data);
          } else {
            localStorage.setItem('userPassword', newPassword);
            this.user.name = newName;
            this.user.password = newPassword;
            this.userService.user!.name = newName;
            this.userService.user!.password = newPassword;
            alert('Profile changed');
            // popUp
            // this.profileForm.reset();
          }
        }
      });
    } else {
      alert('this.profileForm?.status == undefined(?)')
    }
  }
  
  


  ngOnChanges(changes: SimpleChanges): void {
    this.profileForm.controls[`name`].setValue(this.user.name);
  }
}
