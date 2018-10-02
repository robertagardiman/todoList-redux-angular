import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodosComponent} from './todos.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TodoFormComponent} from '../../component/todo-form/todo-form.component';
import {FiltersComponent} from '../filters/filters.component';
import {StoreModule} from '@ngrx/store';
import {toDoReducer} from '../../store/reducers';
import {filterReducer} from '../../store/reducers/filter.reducer';
import {HttpClientModule} from '@angular/common/http';
import * as TodoReducer from '../../store/reducers/todo.reducer';
import {AddTodo, DELETE, DeleteTodo, ToggleTodo} from '../../store/actions/todo.actions';
import {dispatch} from 'rxjs/internal-compatibility';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodosComponent,
        TodoFormComponent,
        FiltersComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({todos: toDoReducer, filterType: filterReducer}),
        HttpClientModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete todo', () => {
    spyOn(component['store'], 'dispatch');
    component.deleteTodo(1);
    expect(component['store'].dispatch).toHaveBeenCalledWith(new DeleteTodo(1));
  });

  it('should add todo', () => {
    spyOn(component['store'], 'dispatch');
    component.addTodo('pippo');
    expect(component['store'].dispatch).toHaveBeenCalledWith(new AddTodo('pippo'));
  });

  it('should toggle todo', () => {
    spyOn(component['store'], 'dispatch');
    component.toggleTodo(1);
    expect(component['store'].dispatch).toHaveBeenCalledWith(new ToggleTodo(1));
  });
});
