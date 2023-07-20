import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorNotFoundComponent } from '../error-not-found/error-not-found.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
  declarations: [
    ErrorNotFoundComponent,
    PopUpComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class SharedModule { }
