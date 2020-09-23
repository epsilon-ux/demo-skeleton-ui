import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseTemplateComponent } from './base-template.component';
import { HeaderModule, CollapsiblePanelModule, NavSecondaryModule, ActionModule } from 'epsilon-blueprint';

@NgModule({
  declarations: [
    BaseTemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    CollapsiblePanelModule,
    NavSecondaryModule,
    ActionModule
  ],
  exports: [BaseTemplateComponent]
})
export class BaseTemplateModule { }