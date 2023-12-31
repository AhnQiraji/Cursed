import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationComponent } from './authorization.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AuthorizationComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: []
})
export class AuthorizationModule { }
