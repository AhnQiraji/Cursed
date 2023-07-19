import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorNotFoundComponent } from '../error-not-found/error-not-found.component';
import { PopUpComponent } from './pop-up/pop-up.component';



@NgModule({
  declarations: [
    ErrorNotFoundComponent,
    PopUpComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
