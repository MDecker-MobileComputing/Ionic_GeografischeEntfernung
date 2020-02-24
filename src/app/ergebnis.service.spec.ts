import { TestBed } from '@angular/core/testing';

import { ErgebnisService } from './ergebnis.service';

describe('ErgebnisServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErgebnisService = TestBed.get(ErgebnisService);
    expect(service).toBeTruthy();
  });
});
