import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableComponent } from './table/table.component';



export const MainRoutes: Routes = [
  { path: '', redirectTo: '/main/table', pathMatch:'full'},
  { path: 'table', component: TableComponent},
]

@NgModule({
  exports: [RouterModule]
})
export class MainRoutingModule {}