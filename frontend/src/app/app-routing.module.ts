import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RushingTable } from './rushing/rushing-table.component';

const routes: Routes = [
  {path: '', component: RushingTable}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
