import { TestBed, inject } from '@angular/core/testing';

import { PixaSericeService } from './pixa-serice.service';

describe('PixaSericeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PixaSericeService]
    });
  });

  it('should be created', inject([PixaSericeService], (service: PixaSericeService) => {
    expect(service).toBeTruthy();
  }));
});
