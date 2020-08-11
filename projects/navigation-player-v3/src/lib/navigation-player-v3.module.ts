import { NgModule } from '@angular/core';
import { NavigationPlayerV3Component } from './navigation-player-v3.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavigationPlayerV3Component, NavigationComponent],
  imports: [
    FormsModule
  ],
  exports: [NavigationPlayerV3Component, NavigationComponent]
})
export class NavigationPlayerV3Module { }
