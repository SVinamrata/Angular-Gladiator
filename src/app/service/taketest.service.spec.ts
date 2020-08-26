import { TestBed } from '@angular/core/testing';

import { TaketestService } from './taketest.service';

describe('TaketestService', () => {
  let service: TaketestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaketestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
