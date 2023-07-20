import { Component } from '@angular/core';
import { taskTables } from 'src/app/entities/enums';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  tables = Object.values(taskTables).filter(string => {
    return `${+string}` === `${string}` ? false : true;
  });
}
