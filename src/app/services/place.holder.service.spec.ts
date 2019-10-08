import { TestBed } from '@angular/core/testing';

import { PlaceHolderService } from './place.holder.service';

describe('PlaceHolderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaceHolderService = TestBed.get(PlaceHolderService);
    expect(service).toBeTruthy();
  });
});
