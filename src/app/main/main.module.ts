import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { TableComponent } from './table/table.component';
import { MainRoutingModule } from './main--routing.module';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    MainComponent,
    TableComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
  ]
})
export class MainModule { }
