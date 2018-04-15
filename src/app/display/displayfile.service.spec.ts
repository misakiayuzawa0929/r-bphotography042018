import { TestBed, inject } from '@angular/core/testing';

import { DisplayfileService } from './displayfile.service';

describe('DisplayfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplayfileService]
    });
  });

  it('should be created', inject([DisplayfileService], (service: DisplayfileService) => {
    expect(service).toBeTruthy();
  }));
});
