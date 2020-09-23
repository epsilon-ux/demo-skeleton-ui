import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConversantUIKitModule } from '@cnvr/cuik';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConversantUIKitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
