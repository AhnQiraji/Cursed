import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/entities/classes';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'task-creation',
  templateUrl: './task-creation.component.html',
  styleUrls: ['./task-creation.component.scss']
})
export class TaskCreationComponent {
  public taskForm: FormGroup;

  constructor(private httpService: HttpService, private userService: UserService, private router: Router) {
    this.taskForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      importance: new FormControl('low'),
      status: new FormControl(`To do`)
    })
  }

  taskCreate(name: string, description: string, importance: string, status: string) {
    if (this.taskForm.status === "INVALID") {
      alert('Invalid data');
      // popUp
    } else if (this.taskForm.status === "VALID") {
      let taskSubscription = this.httpService.newTask(name, description, importance, status).subscribe({
        next: (data: User | string) => {
          if (typeof(data) === 'string') {
            alert(data);
          } else {
            console.log(data);
            
            this.closeTaskCreation();
          }
          taskSubscription.unsubscribe();
        }
      });
    }
  }

  reset() {
    this.taskForm.reset();
    this.taskForm.controls['importance'].setValue('low');
    this.taskForm.controls['status'].setValue('To do');
  }

  @Output() newItemEvent = new EventEmitter<boolean>();

  closeTaskCreation() {
    console.log('Emit')
    this.newItemEvent.emit(false);
  }
}
