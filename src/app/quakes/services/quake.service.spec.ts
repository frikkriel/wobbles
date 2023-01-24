import { TestBed } from '@angular/core/testing';

import { QuakeService } from './quake.service';

describe('QuakesService', () => {
  let service: QuakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
