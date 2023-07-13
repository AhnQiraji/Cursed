import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { AuthorizationRoutes } from './authorization/authorization-routing.module';
import { ErrorNotFoundComponent } from './shared/error-not-found/error-not-found.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'authorization', component: AuthorizationComponent, children: AuthorizationRoutes},
  { path: '**', component: ErrorNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
