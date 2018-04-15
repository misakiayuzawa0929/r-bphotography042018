import { TestBed, inject } from '@angular/core/testing';

import { Services2Service } from './services2.service';

describe('Services2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Services2Service]
    });
  });

  it('should be created', inject([Services2Service], (service: Services2Service) => {
    expect(service).toBeTruthy();
  }));
});
