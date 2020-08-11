import { TestBed } from '@angular/core/testing';

import { NavigationPlayerV3Service } from './navigation-player-v3.service';

describe('NavigationPlayerV3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavigationPlayerV3Service = TestBed.get(NavigationPlayerV3Service);
    expect(service).toBeTruthy();
  });
});
