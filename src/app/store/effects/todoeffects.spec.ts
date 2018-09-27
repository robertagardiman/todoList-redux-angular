import { TestBed } from '@angular/core/testing';

import { TodoEffects } from './todoeffects';

describe('TodoEffects', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoEffects = TestBed.get(TodoEffects);
    expect(service).toBeTruthy();
  });
});
