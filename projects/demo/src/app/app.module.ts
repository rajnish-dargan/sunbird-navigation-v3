import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationPlayerV3Module } from './../../../navigation-player-v3/src/lib/navigation-player-v3.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavigationPlayerV3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
