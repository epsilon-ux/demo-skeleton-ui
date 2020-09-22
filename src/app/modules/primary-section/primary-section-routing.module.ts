import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimarySectionComponent } from "./primary-section.component";

const routes: Routes = [
  { path: '', component: PrimarySectionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimarySectionRoutingModule { }
