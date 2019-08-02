import { TestBed } from '@angular/core/testing';

import { ReviewManagementService } from './review-management.service';

describe('ReviewManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReviewManagementService = TestBed.get(ReviewManagementService);
    expect(service).toBeTruthy();
  });
});
