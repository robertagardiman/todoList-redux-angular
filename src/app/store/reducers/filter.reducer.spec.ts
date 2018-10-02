import {TestBed} from '@angular/core/testing';

import * as FilterReducer from './filter.reducer';
import {FilterToDo} from '../actions/filter.actions';
import * as TodoReducer from './todo.reducer';

describe('FilterReducer', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  /*it('should filter items', () => {
    const initialState = {loading: false, items: [{id: 1, title: 'pippo', done: false}]};
    const action = new FilterToDo('todo');
    const state = TodoReducer.toDoReducer(initialState, action);
    expect(state.items.length).toBe(1);
  });*/
});
