import { TestBed, inject } from '@angular/core/testing';

import { UiHandlerService } from './ui-handler.service';

describe('UiHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UiHandlerService]
    });
  });

  it('should be created', inject([UiHandlerService], (service: UiHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
