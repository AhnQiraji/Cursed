import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorizationComponent } from './authorization/authorization.component';
import { AuthorizationRoutes } from './authorization/authorization-routing.module';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { MainComponent } from './main/main.component';
import { MainRoutes } from './main/main-routing.module';
import { MainGuard } from './guards';

const routes: Routes = [
  { path: '', component: AuthorizationComponent, children: AuthorizationRoutes},
  { path: 'main', component: MainComponent, canActivate: [MainGuard]},
  { path: '**', component: ErrorNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
