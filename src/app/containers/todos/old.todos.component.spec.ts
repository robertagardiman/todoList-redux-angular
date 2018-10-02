/*
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodosComponent} from './todos.component';
import {TodoFormComponent} from '../../component/todo-form/todo-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FiltersComponent} from '../filters/filters.component';
import {DeleteTodo} from '../../store/actions/todo.actions';
import * as TodoReducer from '../../store/reducers/todo.reducer';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodosComponent, TodoFormComponent, FiltersComponent],
      imports: [FormsModule, ReactiveFormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete todo', () => {
    const initialState = {loading: false, items: [{id: 1, title: 'pippo', done: false}]};
    console.log(component);
    component.deleteTodo(1);
    /!*const deletedTodo = this.initialState.items.find(todo => todo.id === 1);
    console.log('end: ', TodosComponent);
    expect(this.initialState.items.includes(deletedTodo)).toBe(false);*!/
    expect(this.initialState.items.length).toBe(0);
  });

  /!*it('should toggle todo', () => {
    component.todos$ = [{id: 1, done: false}];
    component.toggleTodo(1);
    const toggledTodo = component.todos$.find(todo => todo.id === 1);
    expect(toggledTodo.done).toBe(true);
  });*!/

  /!*it('should get filters', () => {
    expect(component.filters).toEqual(['all', 'todo', 'done']);
  });*!/

  /!*it('should set current filter', () => {
    component.setCurrentFilter('pippo');
    expect(component.currentFilter).toBe('pippo');
  });*!/

  /!*it('should filter list', () => {
    component.todoList = [{id: 1, done: false}, {id: 1, done: false}];
    component.setCurrentFilter('todo');
    expect(component.filterList()).toEqual([{id: 1, done: false}, {id: 1, done: false}]);
  });*!/
});


*/
