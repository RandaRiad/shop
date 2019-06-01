import { TestBed } from '@angular/core/testing';

import { ShoppingcardService } from './shoppingcard.service';

describe('ShoppingcardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppingcardService = TestBed.get(ShoppingcardService);
    expect(service).toBeTruthy();
  });
});
