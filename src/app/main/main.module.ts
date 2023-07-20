import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { TableComponent } from './table/table.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { HeaderContainer } from './header/header.container';
import { ProfileComponent } from './header/profile/profile.component';
import { ProfileContainer } from './header/profile/profile.container';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskTableComponent } from './table/task-table/task-table.component';
import { TaskTableContainer } from './table/task-table/task-table.container';
import { TaskCreationComponent } from './table/task-table/task-creation/task-creation.component';
import { TaskComponent } from './table/task-table/task/task.component';



@NgModule({
  declarations: [
    MainComponent,
    TableComponent,
    HeaderComponent,
    HeaderContainer,
    ProfileComponent,
    ProfileContainer,
    TaskTableComponent,
    TaskTableContainer,
    TaskCreationComponent,
    TaskComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class MainModule { }
