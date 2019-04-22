import { TestBed, inject } from '@angular/core/testing';

import { StudentsdataService } from './studentsdata.service';

describe('StudentsdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentsdataService]
    });
  });

  it('should be created', inject([StudentsdataService], (service: StudentsdataService) => {
    expect(service).toBeTruthy();
  }));
});
