import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {GET, OnTodosSuccess} from '../actions';
import {switchMap, map} from 'rxjs/operators';
import {TodoService} from '../../services/todo.service';

@Injectable({
  providedIn: 'root'
})

export class TodoEffects {
  @Effect()
  fetchTodos$ = this.actions$.pipe(
    ofType(GET),
    switchMap((action) => this.todoService.getTodos().pipe(
      map((res: any[]) => (new OnTodosSuccess(res)))
    ))
  );

  constructor(private actions$: Actions, private todoService: TodoService) {
  }
}
