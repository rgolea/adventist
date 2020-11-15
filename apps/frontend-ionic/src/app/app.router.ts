import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { defer } from 'rxjs';
import { map, retry } from 'rxjs/operators';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      defer(() => import('./home/home.module')).pipe(
        map((m) => m.HomeModule),
        retry(2)
      ),
  },
  {
    path: 'news',
    pathMatch: 'full',
    redirectTo: 'home',
  },
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
