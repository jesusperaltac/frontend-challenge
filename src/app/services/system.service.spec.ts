import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { SystemService } from './system.service';

describe('SystemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SystemService],
      imports: [HttpClientModule],
    });
  });

  it('should be created', inject([SystemService], (service: SystemService) => {
    expect(service).toBeTruthy();
  }));
});
