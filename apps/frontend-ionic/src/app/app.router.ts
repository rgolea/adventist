import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { defer } from 'rxjs';
import { map, retry } from 'rxjs/operators';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'news',
    loadChildren: () =>
      defer(() => import('./news/news.module')).pipe(
        map((m) => m.NewsModule),
        retry(2)
      ),
  },
  {
    path: 'church',
    loadChildren: () =>
      defer(() => import('./church/church.module')).pipe(
        map((m) => m.ChurchModule),
        retry(2)
      ),
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
