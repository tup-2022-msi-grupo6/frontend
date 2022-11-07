import { TestBed } from '@angular/core/testing';

import { ApistockService } from './services/apistock.service';

describe('ApistockService', () => {
  let service: ApistockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApistockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
