import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'primary-section', loadChildren: () => import('./modules/primary-section/primary-section.module')
    .then(m => m.PrimarySectionModule) },
  { path: '', pathMatch: 'full', redirectTo: 'primary-section' },
  { path: '**', redirectTo: 'primary-section' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
