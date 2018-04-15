import { TestBed, inject } from '@angular/core/testing';

import { Services3Service } from './services3.service';

describe('Services3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Services3Service]
    });
  });

  it('should be created', inject([Services3Service], (service: Services3Service) => {
    expect(service).toBeTruthy();
  }));
});
