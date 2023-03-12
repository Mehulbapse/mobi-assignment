import { TestBed } from '@angular/core/testing';

import { IllumeServiceService } from './illume-service.service';

describe('IllumeServiceService', () => {
  let service: IllumeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IllumeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
