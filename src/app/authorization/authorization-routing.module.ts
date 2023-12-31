import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

export const AuthorizationRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
]

@NgModule({
  exports: [RouterModule]
})
export class AuthorizationRoutingModule {}