import { TestBed, inject } from '@angular/core/testing';

import { HttpGatewayService } from './http-gateway.service';

describe('HttpGatewayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpGatewayService]
    });
  });

  it('should be created', inject([HttpGatewayService], (service: HttpGatewayService) => {
    expect(service).toBeTruthy();
  }));
});
