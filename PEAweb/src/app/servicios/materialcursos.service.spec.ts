import { TestBed } from '@angular/core/testing';

import { MaterialcursosService } from './materialcursos.service';

describe('MaterialcursosService', () => {
  let service: MaterialcursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialcursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
