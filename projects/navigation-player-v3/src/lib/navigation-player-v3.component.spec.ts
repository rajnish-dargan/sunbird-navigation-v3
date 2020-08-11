import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationPlayerV3Component } from './navigation-player-v3.component';

describe('NavigationPlayerV3Component', () => {
  let component: NavigationPlayerV3Component;
  let fixture: ComponentFixture<NavigationPlayerV3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationPlayerV3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationPlayerV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
