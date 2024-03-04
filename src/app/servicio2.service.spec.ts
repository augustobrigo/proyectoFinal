import { TestBed } from '@angular/core/testing';

import { Servicio2Service } from './servicio2.service';

describe('Servicio2Service', () => {
  let service: Servicio2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicio2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
