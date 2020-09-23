import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'landing-page', loadChildren: () => import('./modules/landing-page/landing-page.module')
    .then(m => m.LandingPageModule) },
  { path: '', pathMatch: 'full', redirectTo: 'landing-page' },
  { path: '**', redirectTo: 'landing-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
