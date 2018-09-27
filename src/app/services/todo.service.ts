import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {OnTodosSuccess} from '../store/actions';
import {TodoModel} from './todo.model';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos').pipe((
      map((res: any[]) => (
        res.map((item) => {
          return new TodoModel(item.id, item.title, item.completed);
        })
      )
    )));
  }

}
