import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { taskTables } from 'src/app/entities/enums';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnDestroy{
  
  tables = Object.values(taskTables).filter(string => {
    return `${+string}` === `${string}` ? false : true;
  });
  
  public taskList!: any;

  constructor(private httpService: HttpService, private userService: UserService) {
  }
  ngOnDestroy(): void {
    this.taskListSubscription.unsubscribe();
  }


  public taskListSubscription = this.httpService.getTasks().subscribe({
    next: (data: any[] | null) => {
      if (typeof(data) === 'string') {
        alert(data);
        this.taskList = null;
      } else {
        this.taskList = data;
        console.log(this.taskList);
      }
    }
  });

}
