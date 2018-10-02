import {TestBed} from '@angular/core/testing';

import * as TodoReducer from './todo.reducer';
import {AddTodo, DeleteTodo, GetTodos, OnTodosSuccess, ToggleTodo} from '../actions/todo.actions';

describe('TodoReducer', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  /*it('should return the default state', () => {
    const {initialState} = TodoReducer;
    const action = '';
    const state = TodoReducer.toDoReducer(undefined, action); // chiedere a Lo
    expect(state).toBe(initialState);
  });*/

  it('should add an item', () => {
    const {initialState} = TodoReducer;
    const action = new AddTodo('pippo');
    const state = TodoReducer.toDoReducer(initialState, action);
    console.log(state.items);
    expect(state.items.length).toBe(1);
  });

  it('should toggle an item', () => {
    const initialState = {loading: false, items: [{id: 1, title: 'pippo', done: false}]};
    const action = new ToggleTodo(1);
    const state = TodoReducer.toDoReducer(initialState, action);
    expect(state.items[0].done).toBe(true);
  });

  it('should delete an item', () => {
    const initialState = {loading: false, items: [{id: 1, title: 'pippo', done: false}]};
    const action = new DeleteTodo(1);
    const state = TodoReducer.toDoReducer(initialState, action);
    expect(state.items.length).toBe(0);
  });

  it('should set loading to true while getting items', () => {
    const {initialState} = TodoReducer;
    const action = new GetTodos();
    const state = TodoReducer.toDoReducer(initialState, action);
    expect(state.loading).toEqual(true);
  });

  it('should set loading to false when items request is ready', () => {
    const {initialState} = TodoReducer;
    const action = new OnTodosSuccess();
    const state = TodoReducer.toDoReducer(initialState, action);
    expect(state.loading).toEqual(false);
  });
});
