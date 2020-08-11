import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NavigationComponentInput, navigationEvent } from './Events';

@Component({
  selector: 'lib-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() navConfig: NavigationComponentInput;
  @Output() sendControls: EventEmitter<navigationEvent> = new EventEmitter<navigationEvent>();
  @Output() public navControls = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  nextPage() {
    this.sendControls.emit('next');
  }
  prevPage() {
    this.sendControls.emit('previous');
  }
  downloadContent() {
    this.sendControls.emit('download');
  }
  public onChange(navigateToIndex) {
    // this.sendControls.emit('navigate');
    this.navControls.emit(navigateToIndex);
  }

}
