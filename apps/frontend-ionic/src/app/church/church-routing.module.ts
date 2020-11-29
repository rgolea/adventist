import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChurchComponent } from './church.component';

const routes: Routes = [
  { path: ':id', component: ChurchComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChurchRoutingModule { }
