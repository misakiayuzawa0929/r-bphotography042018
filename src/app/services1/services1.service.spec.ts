import { TestBed, inject } from '@angular/core/testing';

import { Services1Service } from './services1.service';

describe('Services1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Services1Service]
    });
  });

  it('should be created', inject([Services1Service], (service: Services1Service) => {
    expect(service).toBeTruthy();
  }));
});
