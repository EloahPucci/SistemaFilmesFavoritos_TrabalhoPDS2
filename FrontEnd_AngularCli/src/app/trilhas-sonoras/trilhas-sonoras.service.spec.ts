/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TrilhasSonorasService } from './trilhas-sonoras.service';

describe('TrilhasSonorasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrilhasSonorasService]
    });
  });

  it('should ...', inject([TrilhasSonorasService], (service: TrilhasSonorasService) => {
    expect(service).toBeTruthy();
  }));
});
