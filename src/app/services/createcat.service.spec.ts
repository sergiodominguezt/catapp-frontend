import { TestBed } from '@angular/core/testing';

import { CreatecatService } from './createcat.service';

describe('CreatecatService', () => {
  let service: CreatecatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatecatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
