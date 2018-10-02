import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {RootState} from '../../store/reducers';
import {AddTodo, DeleteTodo, FilterToDo, GetTodos, ToggleTodo} from '../../store/actions';
import {Observable} from 'rxjs';
import {filterSelector} from '../../store/selectors';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  filters: any;
  todos$: Observable<any[]> = this.store.pipe(
    select(filterSelector)
  );

  constructor(private store: Store<RootState>, private todoService: TodoService) {
    /*todoService.getTodos().subscribe((res) => {
      console.log(res);
    });*/
  }

  ngOnInit() {
    this.store.dispatch(new GetTodos());
  }

  public addTodo(inputValue: string) {
    this.store.dispatch(new AddTodo(inputValue));
  }

  public deleteTodo(id: number) {
    this.store.dispatch(new DeleteTodo(id));
  }

  public toggleTodo(id: number) {
    this.store.dispatch(new ToggleTodo(id));
  }

  public getFilters(filters) {
    this.filters = filters;
  }

  public filterList(filter) {
    this.store.dispatch(new FilterToDo(filter));
  }
}
