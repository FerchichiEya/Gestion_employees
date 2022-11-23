import { TestBed } from '@angular/core/testing';

import { EmployeService } from './Employe.service';

describe('EmployeService', () => {
  let service: EmployeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
