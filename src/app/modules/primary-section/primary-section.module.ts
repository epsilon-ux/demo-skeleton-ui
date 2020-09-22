import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseTemplateModule } from "../../shared/base-template/base-template.module";
import { PrimarySectionRoutingModule } from './primary-section-routing.module';
import { PrimarySectionComponent } from './primary-section.component';


@NgModule({
  declarations: [PrimarySectionComponent],
  imports: [
    CommonModule,
    PrimarySectionRoutingModule,
    BaseTemplateModule
  ]
})
export class PrimarySectionModule { }
