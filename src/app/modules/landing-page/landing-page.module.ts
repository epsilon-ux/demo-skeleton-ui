import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseTemplateModule } from "../../shared/base-template/base-template.module";
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';


@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    BaseTemplateModule
  ]
})
export class LandingPageModule { }
