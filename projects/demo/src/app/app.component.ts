import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  navigationConfig = {
    showNavigations: true,
    isPreviousEnable: true,
    isNextEnable: true,
    currentIndex: 1,
    totalIndex: 20,
    showDownload: true,
    downloadImageUrl: 'assets/down-arrow.png',
    message: 'Thermodynamics',
    showMessage: true
  };
  public navigationHandler(event: any) {
    console.log(event);
  }

  public navControlHandler(event: any) {
    console.log('navigate to page', event);
  }
}
