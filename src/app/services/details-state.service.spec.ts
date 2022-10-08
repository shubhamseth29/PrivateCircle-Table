import { TestBed } from '@angular/core/testing';

import { DetailsStateService } from './details-state.service';

describe('DetailsStateService', () => {
  let service: DetailsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
